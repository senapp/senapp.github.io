"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SenappGameEnginePage = void 0;
const React = require("react");
const ReactDOM = require("react-dom");
const PageContainer_1 = require("../components/page/PageContainer");
const PageContent_1 = require("../components/page/PageContent");
const ProjectView_1 = require("../components/projects/ProjectView");
const projects_1 = require("../framework/projects");
const SenappGameEnginePage = () => {
    const project = projects_1.ProjectStore.get(projects_1.ProjectIdentity.GameEngine);
    return (React.createElement(PageContainer_1.PageContainer, null,
        React.createElement(PageContent_1.PageContent, null,
            React.createElement(ProjectView_1.ProjectView, { project: project }))));
};
exports.SenappGameEnginePage = SenappGameEnginePage;
ReactDOM.render(React.createElement(exports.SenappGameEnginePage, null), document.getElementById('root'));
//# sourceMappingURL=senappGameEngine.js.map