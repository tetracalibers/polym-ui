import { cssKeywordList_arrayExpanded } from './parsedDataArrayExpand';
import { createJsonFile } from '../util/forJson';
import alasql from 'alasql';

const getLikeSelectQuery: Function = (like: string): string => {
  return `SELECT * FROM ? WHERE keyword LIKE '${like}'`;
};

const getNotLikeSelectQuery: Function = (like: string): string => {
  return getLikeSelectQuery(like).replace('LIKE', 'NOT LIKE');
};

const runLikeSelectQuery: Function = (like: string): Function => {
  return (from: object): Function => {
    return (addNot = true): object => {
      return alasql(
        addNot ? getNotLikeSelectQuery(like) : getLikeSelectQuery(like),
        [from]
      );
    };
  };
};

const likeResultDump: Function = (like: string): Function => {
  return (from: object): Function => {
    const likeResult = runLikeSelectQuery(like)(from)(false);
    return (fileName: string): void => {
      if (likeResult.length > 0) {
        createJsonFile(likeResult, `dump/css-keywords/bySyntax/${fileName}`);
        createJsonFile(likeResult, `dump/css-keywords/all`, true)
      }
    };
  };
};

const likeResultDumpLoop: Function = (
  likePatternList: Array<string>
): Function => {
  return (updateList: Array<object>): Function => {
    return (dump = true): Array<object> => {
      let updatedList = updateList;
      likePatternList.map((like: string) => {
        if (dump) likeResultDump(like)(updatedList)(`s_${like}_e`);
        updatedList = runLikeSelectQuery(like)(updatedList)();
      });
      return updatedList;
    };
  };
};

export const dumpCssKeywordList_bySyntax: Function = (): void => {
  const vendorPrefixList = ['-webkit-', '-moz-', '-ms-'];
  const dumpLikePatterns = [
    //s_atmark
    ['@%'],
    //s_prefix
    vendorPrefixList.map((prefix: string) => `${prefix}%`),
    //s_doubleColon_prefix
    vendorPrefixList.map((prefix: string) => `::${prefix}%`),
    //s_colon_prefix
    vendorPrefixList.map((prefix: string) => `:${prefix}%`),
    //s_doubleColon
    ['::%'],
    //s_colon
    [':%'],
  ];
  const excludePatterns = [
    //space_suffix_e
    ['selectors', 'combinator'].map((suffix: string) => `% ${suffix}`),
    //s_Pseudo_hyphen
    ['Pseudo-%'],
    //staticExcludeWords
    ['Selector list', '--*'],
  ];

  let notMatchKeywords = cssKeywordList_arrayExpanded;
  dumpLikePatterns.map((like: Array<string>) => {
    notMatchKeywords = likeResultDumpLoop(like)(notMatchKeywords)(true);
  });
  excludePatterns.map((like: Array<string>) => {
    notMatchKeywords = likeResultDumpLoop(like)(notMatchKeywords)(false);
  });
  createJsonFile(notMatchKeywords, `dump/css-keywords/bySyntax/kebabCase`);
};
