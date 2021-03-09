// ==UserScript==
// @name         Autofill github delete form
// @namespace    http://woutervm.com/packages/gh-simplify-delete
// @version      0.1
// @description  Simplify the removal of repo's.
// @author       Wouter van Marrum
// @match        https://github.com/**/**/settings
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let deleteButton = document.querySelector("#options_bucket > div.Box.Box--danger > ul > li:nth-child(4) > details > summary");
    deleteButton.addEventListener('click', function (event) {
        let repoName = document.querySelector("#options_bucket > div.Box.Box--danger > ul > li:nth-child(4) > details > details-dialog > div.Box-body.overflow-auto > p:nth-child(2) > strong");

        let repoNameInput = document.querySelector("#options_bucket > div.Box.Box--danger > ul > li:nth-child(4) > details > details-dialog > div.Box-body.overflow-auto > form > p > input");
        repoNameInput.value = repoName.textContent;

        let submitButton = document.querySelector("#options_bucket > div.Box.Box--danger > ul > li:nth-child(4) > details > details-dialog > div.Box-body.overflow-auto > form > button");
        submitButton.disabled = false;
    });
})();
