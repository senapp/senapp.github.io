"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Topbar = void 0;
const React = require("react");
const images_1 = require("../../framework/images");
const theme_1 = require("../../framework/theme");
const connection_1 = require("../../utils/connection");
const BarItem_1 = require("./BarItem");
const Image_1 = require("../common/Image");
const Topbar_module_css_1 = require("./Topbar.module.css");
const settings_1 = require("../../framework/settings");
const react_1 = require("react");
const utils_1 = require("../../utils/utils");
const Topbar = ({ isProjects }) => {
    const [expanded, setExpanded] = (0, react_1.useState)(false);
    const mobileView = (0, settings_1.isPortrait)() || (0, settings_1.isMobile)();
    const [, forceUpdate] = (0, react_1.useReducer)(x => x + 1, 0);
    (0, react_1.useEffect)(() => { window.addEventListener('resize', forceUpdate); }, []);
    if (isProjects && (0, theme_1.getProjectsState)() === theme_1.ProjectsState.Locked) {
        (0, theme_1.setProjectsState)(theme_1.ProjectsState.Unlocked);
    }
    else if (!isProjects && (0, theme_1.getProjectsState)() === theme_1.ProjectsState.Unlocked) {
        isProjects = true;
    }
    const getLeftBarItems = () => {
        return (React.createElement("ul", { className: !mobileView ? Topbar_module_css_1.default.barListLeft : (Topbar_module_css_1.default.mobileList + " " + Topbar_module_css_1.default.barItemsExpanded) },
            React.createElement(BarItem_1.BarItem, { label: "Home", url: (0, connection_1.toUrl)(`/pages/home`) }),
            isProjects
                ? React.createElement(BarItem_1.BarItem, { label: "Projects", url: (0, connection_1.toUrl)(`/pages/projects`) })
                : React.createElement(BarItem_1.BarItem, { label: "Apps", url: (0, connection_1.toUrl)(`/pages/apps`) }),
            React.createElement(BarItem_1.BarItem, { label: "Contact", url: (0, connection_1.toUrl)(`/pages/contact`) }),
            React.createElement(BarItem_1.BarItem, { action: theme_1.switchTheme, imageIdentity: (0, theme_1.getTheme)() === theme_1.Theme.Dark ? images_1.ImageIdentity.Sun : images_1.ImageIdentity.Moon })));
    };
    const createTopLeftView = () => {
        if (mobileView) {
            return (React.createElement(React.Fragment, null,
                React.createElement(Image_1.Image, { onClick: () => {
                        setExpanded(!expanded);
                        (0, utils_1.toggleScroll)(expanded);
                        (0, utils_1.scrollToTop)();
                    }, containerClassName: Topbar_module_css_1.default.expandContainer, imageClassName: Topbar_module_css_1.default.expand, imageIdentity: expanded ? images_1.ImageIdentity.Close : images_1.ImageIdentity.Expand }),
                React.createElement("div", { className: Topbar_module_css_1.default.mobileListContainer + " " + (expanded ? Topbar_module_css_1.default.barExpanded : "") }, getLeftBarItems())));
        }
        else {
            return (getLeftBarItems());
        }
    };
    return (React.createElement("div", { className: Topbar_module_css_1.default.topbar },
        createTopLeftView(),
        React.createElement("ul", { className: Topbar_module_css_1.default.barListRight },
            React.createElement(Image_1.Image, { imageClassName: Topbar_module_css_1.default.logo, imageIdentity: images_1.ImageIdentity.SenappStudios }))));
};
exports.Topbar = Topbar;
//# sourceMappingURL=Topbar.js.map