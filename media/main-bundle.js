/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!***************************!*\
  !*** ./src/panel/main.ts ***!
  \***************************/

/* This is how the VS Code API can be invoked from the panel */
// declare global {
//     interface VscodeStateApi {
//         getState(): PetPanelState | undefined; // API is actually Any, but we want it to be typed.
//         setState(state: PetPanelState): void;
//         postMessage(message: WebviewMessage): void;
//     }
//     function acquireVsCodeApi(): VscodeStateApi;
// }
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createPMApp = void 0;
let canvas, ctx;
function initCanvas() {
    canvas = document.getElementById('pmCanvas');
    if (!canvas) {
        console.log('Canvas not ready');
        return;
    }
    ctx = canvas.getContext('2d');
    if (!ctx) {
        console.log('Canvas context not ready');
        return;
    }
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}
// This script will be run within the webview itself
// It cannot access the main VS Code APIs directly.
function createPMApp(baseuri) {
    var petSpriteElement = document.createElement('img');
    petSpriteElement.className = 'pm';
    petSpriteElement.src = baseuri + '/lumbergh/Lumbergh_idle.gif';
    document.getElementById('pmContainer')?.appendChild(petSpriteElement);
}
exports.createPMApp = createPMApp;

})();

self.pmApp = __webpack_exports__;
/******/ })()
;