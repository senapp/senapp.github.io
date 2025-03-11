"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppsPage = void 0;
const React = require("react");
const ReactDOM = require("react-dom");
const PageContainer_1 = require("../components/page/PageContainer");
const PageContent_1 = require("../components/page/PageContent");
const ProjectsView_1 = require("../components/projects/ProjectsView");
const apps_module_css_1 = require("./apps.module.css");
const AppsPage = () => (React.createElement(PageContainer_1.PageContainer, null,
    React.createElement(PageContent_1.PageContent, { className: apps_module_css_1.default.container },
        React.createElement("div", { className: apps_module_css_1.default.title }, "Apps"),
        React.createElement(ProjectsView_1.ProjectsView, { showPrivate: false }))));
exports.AppsPage = AppsPage;
ReactDOM.render(React.createElement(exports.AppsPage, null), document.getElementById('root'));
//# sourceMappingURL=apps.js.map