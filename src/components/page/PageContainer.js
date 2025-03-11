"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageContainer = void 0;
const React = require("react");
const Topbar_1 = require("./Topbar");
const PageContainer_module_css_1 = require("./PageContainer.module.css");
const theme_1 = require("../../framework/theme");
const BottomBar_1 = require("./BottomBar");
const PageContainer = ({ children, isProjects = false }) => {
    if ((0, theme_1.getTheme)() === theme_1.Theme.Light) {
        require('./LightTheme.module.css');
    }
    else {
        require('./DarkTheme.module.css');
    }
    require('./PageContainer.module.css');
    const params = window.location.search.includes("?") ? window.location.search.split("?")[1] : "";
    return (React.createElement("div", null,
        React.createElement(Topbar_1.Topbar, { isProjects: isProjects || params === "projects" }),
        React.createElement("div", { className: PageContainer_module_css_1.default.pageContainer }, children),
        React.createElement(BottomBar_1.BottomBar, null)));
};
exports.PageContainer = PageContainer;
//# sourceMappingURL=PageContainer.js.map