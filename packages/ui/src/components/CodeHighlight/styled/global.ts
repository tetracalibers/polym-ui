import { createGlobalStyle, css } from 'styled-components'

const pastelfairyTheme = css`
  pre[class*='language-'] {
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
      rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  }

  code[class*='language-'],
  pre[class*='language-'] {
    background: #ffffff;
    color: #ffa6a6;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    line-height: 1.5;
    tab-size: 2;
    hyphens: none;
    font-family: 'IBM Plex Mono' !important;
    font-style: italic;
  }

  /* Selection */
  code[class*='language-']::-moz-selection,
  code[class*='language-'] *::-moz-selection,
  pre[class*='language-'] *::-moz-selection {
    background: rgba(207, 216, 220, 0.5);
    color: inherit;
  }

  code[class*='language-']::selection,
  code[class*='language-'] *::selection,
  pre[class*='language-'] *::selection {
    background: rgba(207, 216, 220, 0.5);
    color: inherit;
  }

  /* Code blocks */
  pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
    border-radius: 0.3em;
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0.2em 0.3em;
    border-radius: 0.3em;
    white-space: normal;
  }

  .token.bold {
    font-weight: bold;
  }

  .token.deleted {
    color: #ea005e;
  }

  .token.cdata,
  .token.comment,
  .token.doctype,
  .token.prolog {
    color: #a7b0c6;
  }

  .token.punctuation,
  .token.namespace {
    color: #b2bec3;
    font-style: normal;
  }

  .token.constant,
  .token.variable,
  .token.entity {
    color: #f69dfa;
  }

  .token.operator {
    color: #a2a7fe;
  }

  .token.function,
  .token.builtin,
  .token.insert {
    color: #81cc1e;
  }

  .token.string,
  .token.char {
    color: #3fc4ad;
  }

  .token.keyword {
    color: #639dfd;
  }

  .token.number,
  .token.boolean,
  .token.symbol {
    color: #69e3eb;
  }

  .token.property {
    color: #69e3eb;
  }

  .token.property.literal-property {
    color: #ffa6a6;
  }

  .token.class-name {
    color: #f69dfa;
  }

  .token.regex > .token.regex-delimiter {
    color: #3fc4ad;
  }

  .token.regex > .token.regex-source {
    color: #a2a7fe;
  }

  .token.regex > .token.regex-flags {
    color: #639dfd;
  }

  .token.selector {
    color: #81cc1e;
  }

  /* css ---------------------------------------- */

  .token.atrule > .token.rule {
    color: #f69dfa;
  }

  .token.url {
    color: #3fc4ad;
  }

  .token.important {
    color: #639dfd;
  }

  .token.url .token.function {
    color: #a2a7fe;
  }

  /* html --------------------------------------- */

  code[class='language-html'],
  pre[class='language-html'] {
    color: #b2bec3;
  }

  .token.tag {
    color: #ffa6a6;
  }

  .token.tag > .token.punctuation {
    color: #f69dfa;
  }

  .token.attr-name {
    color: #69e3eb;
  }

  .token.attr-value {
    color: #3fc4ad;
  }

  .token.attr-value > .token.punctuation.attr-equals {
    color: #b2bec3;
  }

  .token.doctype > .token.punctuation,
  .token.doctype > .token.doctype-tag {
    color: #ffa6a6;
  }

  .token.doctype > .token.name {
    color: #69e3eb;
  }

  .token.entity.named-entity {
    color: #ffa6a6;
  }
`

export const GlobalTheme = createGlobalStyle`
  ${pastelfairyTheme}
`
