"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.switchTheme = exports.getTheme = exports.setTheme = exports.Theme = void 0;
var Theme;
(function (Theme) {
    Theme[Theme["Light"] = 0] = "Light";
    Theme[Theme["Dark"] = 1] = "Dark";
})(Theme = exports.Theme || (exports.Theme = {}));
const setTheme = (theme) => {
    window.localStorage.setItem('theme', theme.toString());
    window.location.reload();
};
exports.setTheme = setTheme;
const getTheme = () => {
    var _a;
    const themeIndex = Number((_a = window.localStorage.getItem('theme')) !== null && _a !== void 0 ? _a : '0');
    return Theme[Theme[themeIndex]];
};
exports.getTheme = getTheme;
const switchTheme = () => {
    if ((0, exports.getTheme)() === Theme.Light) {
        (0, exports.setTheme)(Theme.Dark);
    }
    else {
        (0, exports.setTheme)(Theme.Light);
    }
};
exports.switchTheme = switchTheme;
//# sourceMappingURL=theme.js.map