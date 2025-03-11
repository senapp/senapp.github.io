"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KanjiPage = void 0;
const React = require("react");
const ReactDOM = require("react-dom");
const PageContainer_1 = require("../components/page/PageContainer");
const PageContent_1 = require("../components/page/PageContent");
const ProjectView_1 = require("../components/projects/ProjectView");
const projects_1 = require("../framework/projects");
const KanjiPage = () => {
    const project = projects_1.ProjectStore.get(projects_1.ProjectIdentity.Kanji);
    return (React.createElement(PageContainer_1.PageContainer, null,
        React.createElement(PageContent_1.PageContent, null,
            React.createElement(ProjectView_1.ProjectView, { project: project }))));
};
exports.KanjiPage = KanjiPage;
ReactDOM.render(React.createElement(exports.KanjiPage, null), document.getElementById('root'));
//# sourceMappingURL=kanji.js.map