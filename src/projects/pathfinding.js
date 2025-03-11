"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PathfindingPage = void 0;
const React = require("react");
const ReactDOM = require("react-dom");
const PageContainer_1 = require("../components/page/PageContainer");
const PageContent_1 = require("../components/page/PageContent");
const ProjectView_1 = require("../components/projects/ProjectView");
const projects_1 = require("../framework/projects");
const PathfindingPage = () => {
    const project = projects_1.ProjectStore.get(projects_1.ProjectIdentity.Pathfinding);
    return (React.createElement(PageContainer_1.PageContainer, null,
        React.createElement(PageContent_1.PageContent, null,
            React.createElement(ProjectView_1.ProjectView, { project: project }))));
};
exports.PathfindingPage = PathfindingPage;
ReactDOM.render(React.createElement(exports.PathfindingPage, null), document.getElementById('root'));
//# sourceMappingURL=pathfinding.js.map