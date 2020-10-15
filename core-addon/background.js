/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

window.browser = require("webextension-polyfill");
const IonCore = require("./IonCore.js");

const ionCore = new IonCore({
    availableStudiesURI: __ION_STUDIES_LIST__
});
ionCore.initialize();
