"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChessPage = void 0;
const React = require("react");
const ReactDOM = require("react-dom");
const PageContainer_1 = require("../components/page/PageContainer");
const PageContent_1 = require("../components/page/PageContent");
const projects_1 = require("../framework/projects");
const ProjectView_1 = require("../components/projects/ProjectView");
const ChessPage = () => {
    const project = projects_1.ProjectStore.get(projects_1.ProjectIdentity.Chess);
    return (React.createElement(PageContainer_1.PageContainer, null,
        React.createElement(PageContent_1.PageContent, null,
            React.createElement(ProjectView_1.ProjectView, { project: project }))));
};
exports.ChessPage = ChessPage;
ReactDOM.render(React.createElement(exports.ChessPage, null), document.getElementById('root'));
//# sourceMappingURL=chess.js.map