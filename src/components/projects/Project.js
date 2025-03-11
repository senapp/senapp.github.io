"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
const React = require("react");
const Image_1 = require("../common/Image");
const Project_module_css_1 = require("./Project.module.css");
const Project = ({ project, showPrivate }) => (React.createElement("div", { className: Project_module_css_1.default.container },
    React.createElement(Image_1.Image, { href: (project.url + (showPrivate ? "?projects" : "")), aClassName: Project_module_css_1.default.imageA, containerClassName: Project_module_css_1.default.imageContainer, imageClassName: Project_module_css_1.default.image, imageIdentity: project.icon }),
    React.createElement("div", { className: Project_module_css_1.default.title }, project.name),
    React.createElement("div", { className: Project_module_css_1.default.links }, project.links.map((link, index) => React.createElement(React.Fragment, null,
        index !== 0 && React.createElement("span", { className: Project_module_css_1.default.linkSeperator }, ', '),
        React.createElement("a", { target: "_blank", className: Project_module_css_1.default.link, key: index, href: link.url }, link.name))))));
exports.Project = Project;
//# sourceMappingURL=Project.js.map