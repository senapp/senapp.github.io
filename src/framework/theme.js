"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProjectsState = exports.setProjectsState = exports.switchTheme = exports.getTheme = exports.setTheme = exports.ProjectsState = exports.Theme = void 0;
var Theme;
(function (Theme) {
    Theme[Theme["Light"] = 0] = "Light";
    Theme[Theme["Dark"] = 1] = "Dark";
})(Theme = exports.Theme || (exports.Theme = {}));
var ProjectsState;
(function (ProjectsState) {
    ProjectsState[ProjectsState["Locked"] = 0] = "Locked";
    ProjectsState[ProjectsState["Unlocked"] = 1] = "Unlocked";
})(ProjectsState = exports.ProjectsState || (exports.ProjectsState = {}));
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
const setProjectsState = (state) => {
    window.localStorage.setItem('projectsState', state.toString());
};
exports.setProjectsState = setProjectsState;
const getProjectsState = () => {
    var _a;
    const themeIndex = Number((_a = window.localStorage.getItem('projectsState')) !== null && _a !== void 0 ? _a : '0');
    return ProjectsState[ProjectsState[themeIndex]];
};
exports.getProjectsState = getProjectsState;
//# sourceMappingURL=theme.js.map