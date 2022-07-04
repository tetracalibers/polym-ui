/*!
  StylingPatch.js v0.0.0
  https://github.com/tetracalibers/React-polyhexUI/tree/main/packages/styling-patch#readme
  Released under the MIT License.
*/
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var mdnData = require('mdn-data');
var alasql = require('alasql');
var jsonFormat = require('json-format');
var shell = require('shelljs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var alasql__default = /*#__PURE__*/_interopDefaultLegacy(alasql);
var jsonFormat__default = /*#__PURE__*/_interopDefaultLegacy(jsonFormat);
var shell__namespace = /*#__PURE__*/_interopNamespace(shell);

const { atRules, selectors, properties } = mdnData.css;
const createCssKeywordList = (data, keywordKind) => {
  const flatObjList = alasql__default["default"]("SELECT * FROM ?", [data]);
  const query = `
      SELECT 
        data._->(0) AS keyword, 
        static.keywordType AS keywordType,
        data._->(1)->groups AS moduleGroup,
        data._->(1)->groups->length AS moduleCount
      FROM ? AS data, (SELECT '${keywordKind}' AS keywordType) AS static
  `;
  const cssModuleList = alasql__default["default"](query, [flatObjList]);
  return cssModuleList;
};
const cssKeywordList_atRules = createCssKeywordList(atRules, "at-rule");
const cssKeywordList_selectors = createCssKeywordList(selectors, "selector");
const cssKeywordList_properties = createCssKeywordList(properties, "property");
const cssKeywordList_usingArray = [...cssKeywordList_atRules, ...cssKeywordList_selectors, ...cssKeywordList_properties];

const getMaxModuleCount = `
  SELECT MAX(moduleCount) AS maxModuleCount FROM ?
`;
const [{ maxModuleCount }] = alasql__default["default"](getMaxModuleCount, [cssKeywordList_usingArray]);
const sequencial = [...Array(maxModuleCount)].map((_, i) => i);
const getExpandedArrayCssKeywordList = sequencial.map((_, i) => `
  SELECT
    keyword, 
    keywordType,
    moduleGroup->(${i}) AS moduleGroup
  FROM ? WHERE moduleCount > ${i}
`).join(" UNION ALL ");
const cssKeywordList_arrayExpanded = alasql__default["default"](getExpandedArrayCssKeywordList, Array(maxModuleCount).fill(cssKeywordList_usingArray));

const normalizedPath = (path) => {
  let clone = path;
  clone = clone.slice(0, 1) === "/" ? clone.slice(1) : clone;
  clone = clone.slice(-1) === "/" ? clone.slice(0, -1) : clone;
  return clone;
};
const getDirRelativeDepth = (dirPath) => {
  return normalizedPath(dirPath).split("/").length;
};
const returnDir = (movedDirPath) => {
  const depth = getDirRelativeDepth(movedDirPath);
  const returnDirPath = depth < 0 ? "." : new Array(depth).fill("..").join("/");
  shell__namespace.cd(returnDirPath);
};
const doAfterMoveDir = (path, func, args = []) => {
  if (!shell__namespace.test("-e", path))
    shell__namespace.mkdir("-p", path);
  shell__namespace.cd(path);
  func(...args);
  returnDir(path);
};
const _createFile = (contents, fileName) => {
  shell__namespace.ShellString(contents).to(fileName);
};
const _appendFile = (contents, fileName) => {
  shell__namespace.ShellString(contents).toEnd(fileName);
};
const createFile = (data, filePath, append = false) => {
  const pathPartsList = normalizedPath(filePath).split("/");
  const dirPath = [...pathPartsList].slice(0, -1).join("/");
  const [fileName] = pathPartsList.reverse();
  const contents = typeof data === "string" ? data : data.toString();
  doAfterMoveDir(dirPath, append ? _appendFile : _createFile, [contents, fileName]);
};

const toJSON = (data) => {
  const config_jsonFormat = {
    type: "space",
    size: 2
  };
  return jsonFormat__default["default"](data, config_jsonFormat);
};
const createJsonFile = (data, filePath) => {
  createFile(toJSON(data), `${filePath}.json`);
};

const getLikeSelectQuery = (like) => {
  return `SELECT * FROM ? WHERE keyword LIKE '${like}'`;
};
const getNotLikeSelectQuery = (like) => {
  return getLikeSelectQuery(like).replace("LIKE", "NOT LIKE");
};
const runLikeSelectQuery = (like) => {
  return (from) => {
    return (addNot = true) => {
      return alasql__default["default"](addNot ? getNotLikeSelectQuery(like) : getLikeSelectQuery(like), [from]);
    };
  };
};
const likeResultDump = (like) => {
  return (from) => {
    const likeResult = runLikeSelectQuery(like)(from)(false);
    return (fileName) => {
      if (likeResult.length > 0) {
        createJsonFile(likeResult, `dump/css-keywords/bySyntax/${fileName}`);
      }
      return likeResult;
    };
  };
};
const likeResultDumpLoop = (likePatternList) => {
  return (updateList) => {
    return (use = true) => {
      let reminder = updateList;
      let match = [];
      likePatternList.map((like) => {
        let fileName = `s_${like}_e`;
        fileName = use ? fileName : "ignore/" + fileName;
        match = [...match, ...likeResultDump(like)(reminder)(fileName)];
        reminder = runLikeSelectQuery(like)(reminder)(true);
      });
      return { reminder, match };
    };
  };
};
const dumpUsefulCssKeywordList = () => {
  const vendorPrefixList = ["-webkit-", "-moz-", "-ms-"];
  const dumpLikePatterns = [
    ["@%"],
    vendorPrefixList.map((prefix) => `${prefix}%`),
    vendorPrefixList.map((prefix) => `::${prefix}%`),
    vendorPrefixList.map((prefix) => `:${prefix}%`),
    ["::%"],
    [":%"]
  ];
  const excludePatterns = [
    ["selectors", "combinator"].map((suffix) => `% ${suffix}`),
    ["Pseudo-%"],
    ["Selector list", "--*"]
  ];
  let notMatchKeywords = cssKeywordList_arrayExpanded;
  dumpLikePatterns.map((like) => {
    const { reminder } = likeResultDumpLoop(like)(notMatchKeywords)(true);
    notMatchKeywords = reminder;
  });
  let ignoreKeywords = [];
  excludePatterns.map((like) => {
    const { reminder, match } = likeResultDumpLoop(like)(notMatchKeywords)(false);
    notMatchKeywords = reminder;
    ignoreKeywords = [...ignoreKeywords, ...match];
  });
  likeResultDumpLoop(["%"])(notMatchKeywords)(true);
  const useCssKeywordList = alasql__default["default"](`
    SELECT * FROM ?
    WHERE keyword NOT IN (
      SELECT keyword FROM ?
    )
  `, [cssKeywordList_arrayExpanded, ignoreKeywords]);
  createJsonFile(useCssKeywordList, `dump/css-keywords/all`);
  return useCssKeywordList;
};

var groupList={"enum":["Basic Selectors","Combinators","Compositing and Blending","CSS Angles","CSS Animations","CSS Backgrounds and Borders","CSS Basic User Interface","CSS Box Model","CSS Box Alignment","CSS Break","CSS Cascading and Inheritance","CSS Charsets","CSS Color","CSS Columns","CSS Conditional Rules","CSS Containment","CSS Counter Styles","CSS Device Adaptation","CSS Display","CSS Flexible Box Layout","CSS Flexible Lengths","CSS Fonts","CSS Fragmentation","CSS Frequencies","CSS Generated Content","CSS Grid Layout","CSS Houdini","CSS Images","CSS Inline","CSS Lengths","CSS Lists and Counters","CSS Logical Properties","CSS Masking","CSS Miscellaneous","CSS Motion Path","CSS Namespaces","CSS Overflow","CSS Pages","CSS Positioning","CSS Regions","CSS Resolutions","CSS Ruby","CSS Scroll Anchoring","CSS Scrollbars","CSS Scroll Snap","CSS Shadow Parts","CSS Shapes","CSS Speech","CSS Table","CSS Text","CSS Text Decoration","CSS Times","CSS Transforms","CSS Transitions","CSS Types","CSS Units","CSS Variables","CSS Will Change","CSS Writing Modes","CSSOM View","Filter Effects","Grouping Selectors","MathML","Media Queries","Microsoft Extensions","Mozilla Extensions","Pointer Events","Pseudo","Pseudo-classes","Pseudo-elements","Selectors","WebKit Extensions"]};

const mdnModuleGroupList = groupList.enum;
const dumpUsefulCssKeywordList_byModule = (usefulCssKeywordList) => {
  mdnModuleGroupList.map((moduleGroup) => {
    const moduleGroupNoSpaces = moduleGroup.replace(/\s/g, "");
    const getThisGroupKeywordList = `
      SELECT * FROM ? WHERE moduleGroup LIKE '${moduleGroup}'
    `;
    const thisGroupKeywordList = alasql__default["default"](getThisGroupKeywordList, [
      usefulCssKeywordList
    ]);
    if (thisGroupKeywordList.length > 0) {
      createJsonFile(thisGroupKeywordList, `dump/css-keywords/byModule/${moduleGroupNoSpaces}`);
    }
  });
};

const usefulCssKeywordList = dumpUsefulCssKeywordList();
dumpUsefulCssKeywordList_byModule(usefulCssKeywordList);

exports.usefulCssKeywordList = usefulCssKeywordList;
//# sourceMappingURL=bundle.cjs.map
