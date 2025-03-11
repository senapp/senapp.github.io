"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkeadealsPage = void 0;
const React = require("react");
const ReactDOM = require("react-dom");
const PageContainer_1 = require("../components/page/PageContainer");
const PageContent_1 = require("../components/page/PageContent");
const ProjectView_1 = require("../components/projects/ProjectView");
const projects_1 = require("../framework/projects");
const SkeadealsPage = () => {
    const project = projects_1.ProjectStore.get(projects_1.ProjectIdentity.Skeadeals);
    return (React.createElement(PageContainer_1.PageContainer, null,
        React.createElement(PageContent_1.PageContent, null,
            React.createElement(ProjectView_1.ProjectView, { project: project }))));
};
exports.SkeadealsPage = SkeadealsPage;
ReactDOM.render(React.createElement(exports.SkeadealsPage, null), document.getElementById('root'));
//# sourceMappingURL=skeadeals.js.map