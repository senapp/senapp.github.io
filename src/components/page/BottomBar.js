"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BottomBar = void 0;
const React = require("react");
const images_1 = require("../../framework/images");
const connection_1 = require("../../utils/connection");
const BarItem_1 = require("./BarItem");
const BottomBar_module_css_1 = require("./BottomBar.module.css");
const react_1 = require("react");
const settings_1 = require("../../framework/settings");
const Image_1 = require("../common/Image");
const utils_1 = require("../../utils/utils");
const BottomBar = () => {
    const [expanded, setExpanded] = (0, react_1.useState)(false);
    const mobileView = (0, settings_1.isPortrait)() || (0, settings_1.isMobile)();
    const [, forceUpdate] = (0, react_1.useReducer)(x => x + 1, 0);
    (0, react_1.useEffect)(() => { window.addEventListener('resize', forceUpdate); }, []);
    const getBarItems = () => {
        return (React.createElement(React.Fragment, null,
            React.createElement("ul", { className: !mobileView ? BottomBar_module_css_1.default.barListLeft : (BottomBar_module_css_1.default.mobileListLeft + " " + BottomBar_module_css_1.default.barItemsExpanded) },
                React.createElement(BarItem_1.BarItem, { className: BottomBar_module_css_1.default.barItem, label: "Privacy policy", url: (0, connection_1.toUrl)(`/pages/legal`, '?0') }),
                React.createElement(BarItem_1.BarItem, { className: BottomBar_module_css_1.default.barItem, label: "Terms & Conditions", url: (0, connection_1.toUrl)(`/pages/legal`, '?1') }),
                React.createElement(BarItem_1.BarItem, { className: BottomBar_module_css_1.default.barItem, label: "Statements", url: (0, connection_1.toUrl)(`/pages/legal`, '?2') }),
                React.createElement(BarItem_1.BarItem, { className: BottomBar_module_css_1.default.barItem, label: "Attributions", url: (0, connection_1.toUrl)(`/pages/legal`, '?3') }),
                React.createElement(BarItem_1.BarItem, { className: BottomBar_module_css_1.default.barItem, label: "Support", url: (0, connection_1.toUrl)(`/pages/support`) })),
            React.createElement("ul", { className: !mobileView ? BottomBar_module_css_1.default.barListRight : (BottomBar_module_css_1.default.mobileListRight + " " + BottomBar_module_css_1.default.barItemsExpanded + " " + BottomBar_module_css_1.default.barItemsExpandedSocials) },
                React.createElement(BarItem_1.BarItem, { imageIdentity: images_1.ImageIdentity.Twitter, url: "https://twitter.com/senappstudios", newPage: true }),
                React.createElement(BarItem_1.BarItem, { imageIdentity: images_1.ImageIdentity.Instagram, url: "https://www.instagram.com/senappstudios/", newPage: true }),
                React.createElement(BarItem_1.BarItem, { imageIdentity: images_1.ImageIdentity.Youtube, url: "https://www.youtube.com/channel/UCCPrhv3IQ5d35qnMZruUekw", newPage: true }))));
    };
    const createBottomView = () => {
        if (mobileView) {
            return (React.createElement(React.Fragment, null,
                React.createElement(Image_1.Image, { onClick: () => {
                        setExpanded(!expanded);
                        (0, utils_1.toggleScroll)(expanded);
                        (0, utils_1.scrollToTop)();
                    }, containerClassName: BottomBar_module_css_1.default.expandContainer + " " + (expanded ? BottomBar_module_css_1.default.buttonExpanded : ""), imageClassName: BottomBar_module_css_1.default.expand, imageIdentity: expanded ? images_1.ImageIdentity.Close : images_1.ImageIdentity.Expand }),
                React.createElement("div", { className: BottomBar_module_css_1.default.mobileListContainer + " " + (expanded ? BottomBar_module_css_1.default.barExpanded : "") }, getBarItems())));
        }
        else {
            return (getBarItems());
        }
    };
    return (React.createElement("div", { className: BottomBar_module_css_1.default.bottombar },
        createBottomView(),
        React.createElement("div", { className: BottomBar_module_css_1.default.copyright },
            new Date().getFullYear(),
            " \u00A9 Senapp Studios, Albin Bj\u00F6rklund")));
};
exports.BottomBar = BottomBar;
//# sourceMappingURL=BottomBar.js.map