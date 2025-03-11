"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsView = void 0;
const React = require("react");
const projects_1 = require("../../framework/projects");
const Project_1 = require("./Project");
const ProjectsView_module_css_1 = require("./ProjectsView.module.css");
const ProjectsView = ({ showPrivate }) => {
    const availableProjects = [];
    projects_1.ProjectStore.forEach((value) => {
        if (showPrivate || value.public) {
            availableProjects.push(value);
        }
    });
    return (React.createElement("div", { className: ProjectsView_module_css_1.default.container }, availableProjects.map(project => React.createElement(Project_1.Project, { showPrivate: showPrivate, key: project.type, project: project }))));
};
exports.ProjectsView = ProjectsView;
//# sourceMappingURL=ProjectsView.js.map