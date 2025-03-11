"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarItem = void 0;
const React = require("react");
const connection_1 = require("../../utils/connection");
const css_1 = require("../../utils/css");
const Image_1 = require("../common/Image");
const BarItem_module_css_1 = require("./BarItem.module.css");
const BarItem = ({ label = '', imageIdentity, url, action, containerClassName = '', className = '', newPage = false }) => {
    const isActive = (0, connection_1.isCurrentUrl)(url);
    const itemClasses = (0, css_1.filterCssClasses)({
        [BarItem_module_css_1.default.barItem]: true,
        [containerClassName]: !!containerClassName,
    });
    const aClasses = (0, css_1.filterCssClasses)({
        [BarItem_module_css_1.default.barItemContent]: true,
        [BarItem_module_css_1.default.active]: !!url && isActive,
        [className]: !!className
    });
    return (React.createElement("li", { className: itemClasses },
        React.createElement("a", { className: aClasses, onClick: action, href: url, target: newPage ? '_blank' : undefined, rel: "noreferrer" },
            label && label,
            imageIdentity && React.createElement(Image_1.Image, { imageIdentity: imageIdentity }))));
};
exports.BarItem = BarItem;
//# sourceMappingURL=BarItem.js.map