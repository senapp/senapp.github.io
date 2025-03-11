"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPortrait = exports.isMobile = void 0;
function isMobile() {
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
}
exports.isMobile = isMobile;
function isPortrait() {
    return window.innerHeight > window.innerWidth;
}
exports.isPortrait = isPortrait;
//# sourceMappingURL=settings.js.map