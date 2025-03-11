"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectView = void 0;
const React = require("react");
const Image_1 = require("../common/Image");
const ProjectView_module_css_1 = require("./ProjectView.module.css");
const react_1 = require("react");
const settings_1 = require("../../framework/settings");
const Button_1 = require("../common/Button");
const ProjectView = ({ project }) => {
    if (!project) {
        return null;
    }
    const mobileView = (0, settings_1.isPortrait)() || (0, settings_1.isMobile)();
    const [, forceUpdate] = (0, react_1.useReducer)(x => x + 1, 0);
    (0, react_1.useEffect)(() => { window.addEventListener('resize', forceUpdate); }, []);
    const createLinksInText = (text) => {
        var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
        return text.replace(exp, `<a class=${ProjectView_module_css_1.default.link} href='$1'>Link</a>`);
    };
    (0, react_1.useEffect)(() => {
        let element = document.getElementById("#description");
        if (element) {
            element.innerHTML = createLinksInText(project.description);
        }
    });
    const [galleryLimit, setGalleryLimit] = (0, react_1.useState)(5);
    return (React.createElement("div", { className: ProjectView_module_css_1.default.projectContainer },
        React.createElement("div", { className: mobileView ? ProjectView_module_css_1.default.projectMainMobile : ProjectView_module_css_1.default.projectMain },
            React.createElement(Image_1.Image, { containerClassName: mobileView ? ProjectView_module_css_1.default.projectIconContainerMobile : ProjectView_module_css_1.default.projectIconContainer, imageClassName: ProjectView_module_css_1.default.projectIcon, imageIdentity: project.icon }),
            React.createElement("div", { className: ProjectView_module_css_1.default.projectInfoRight },
                React.createElement("div", { className: ProjectView_module_css_1.default.projectName },
                    React.createElement("h3", null, "Name"),
                    React.createElement("h1", null, project.name)),
                React.createElement("div", { className: ProjectView_module_css_1.default.projectLinks },
                    React.createElement("h3", null, "Links"),
                    React.createElement("div", { className: ProjectView_module_css_1.default.projectLinksContainer }, project.links.map((link, index) => React.createElement(React.Fragment, null,
                        index !== 0 && React.createElement("span", { className: ProjectView_module_css_1.default.linkSeperator }, ', '),
                        React.createElement("a", { target: "_blank", className: ProjectView_module_css_1.default.link, key: index, href: link.url }, link.name))))),
                React.createElement("div", { className: ProjectView_module_css_1.default.projectTools },
                    React.createElement("h3", null, "Tools"),
                    React.createElement("p", { className: ProjectView_module_css_1.default.projectToolsText }, project.tools.join(', '))))),
        React.createElement("div", { className: ProjectView_module_css_1.default.projectInfo },
            React.createElement("h2", null, "Description"),
            React.createElement("p", { id: "#description", className: ProjectView_module_css_1.default.description }),
            project.photos.length > 0 &&
                React.createElement("div", { className: mobileView ? ProjectView_module_css_1.default.projectPhotosMobile : ProjectView_module_css_1.default.projectPhotos },
                    React.createElement("div", { className: ProjectView_module_css_1.default.galleryTopBar },
                        React.createElement("h2", null, "Gallery"),
                        project.photos.length >= galleryLimit &&
                            React.createElement(Button_1.Button, { className: ProjectView_module_css_1.default.showMoreButton, onClick: () => setGalleryLimit(galleryLimit + 5), label: "Show more" })),
                    React.createElement("div", { className: ProjectView_module_css_1.default.galleryContainer }, project.photos.map((photo, index) => {
                        if (index >= galleryLimit) {
                            return null;
                        }
                        return React.createElement("img", { className: mobileView ? ProjectView_module_css_1.default.galleryPhotoMobile : ProjectView_module_css_1.default.galleryPhoto, src: photo });
                    })),
                    React.createElement("div", { className: ProjectView_module_css_1.default.galleryPhotosText }, `Showing ${Math.min(galleryLimit, project.photos.length)} of ${project.photos.length} photos`)))));
};
exports.ProjectView = ProjectView;
//# sourceMappingURL=ProjectView.js.map