import hljs from "highlight.js/lib/core";

// @ts-ignore
import { solidity } from "highlightjs-solidity";
hljs.registerLanguage("solidity", solidity);

export default hljs;
