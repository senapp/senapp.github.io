"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleScroll = exports.scrollToTop = void 0;
const scrollToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
exports.scrollToTop = scrollToTop;
const toggleScroll = (enabled) => {
    if (enabled) {
        document.body.style.overflow = "auto";
    }
    else {
        document.body.style.overflow = "hidden";
    }
};
exports.toggleScroll = toggleScroll;
//# sourceMappingURL=utils.js.map