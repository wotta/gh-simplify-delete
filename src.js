// ==UserScript==
// @name         Autofill github delete form
// @namespace    http://woutervm.com/packages/gh-simplify-delete
// @version      0.2
// @description  Simplify the removal of repo's.
// @author       Wouter van Marrum
// @match        https://github.com/**/**/settings
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let deleteButton = document.evaluate("//summary[contains(text(),'Delete this repository')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    deleteButton.addEventListener('click', function (event) {
        let repoName = document.evaluate('//p[contains(text(), "Please type")]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.querySelector('strong').innerText;

        let repoNameInput = document.evaluate('//input[contains(@aria-label, "confirm that you want to delete this repository.")]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

        repoNameInput.value = repoName;

        let submitButton = document.evaluate("//button/span[contains(text(), 'I understand the consequences, delete this repository')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.closest('button');
        submitButton.disabled = false;
        // document.querySelector("#options_bucket > div.Box.Box--danger > ul > li:nth-child(4) > details > details-dialog > div.Box-body.overflow-auto > form > button").click();
    });

})();
