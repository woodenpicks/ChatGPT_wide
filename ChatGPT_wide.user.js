// ==UserScript==
// @name         Wider ChatGPT
// @version      1.0
// @description  Increase the width of the ChatGPT interface and the text input bubble.
// @author       woodenpicks
// @match        https://chat.openai.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`
        .md\\:max-w-3xl, .lg\\:max-w-\\[40rem\\], .xl\\:max-w-\\[48rem\\],
        .lg\\:max-w-2xl, .xl\\:max-w-3xl, textarea#prompt-textarea {
            max-width: 95% !important;
            width: 100% !important;
        }
    `);
})();
