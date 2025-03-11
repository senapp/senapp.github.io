"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
const React = require("react");
const images_1 = require("../../framework/images");
const css_1 = require("../../utils/css");
const Image_module_css_1 = require("./Image.module.css");
const Image = ({ imageIdentity, containerClassName = '', imageClassName = '', aClassName = '', onClick = undefined, href }) => {
    const imageInfo = images_1.ImageStore.get(imageIdentity);
    if (!imageInfo) {
        return null;
    }
    const containerClasses = (0, css_1.filterCssClasses)({
        [Image_module_css_1.default.imageContainer]: true,
        [Image_module_css_1.default.imageFontAwesomeContainer]: !!imageInfo.fontawesome,
        [containerClassName]: !!containerClassName,
    });
    const imageClasses = (0, css_1.filterCssClasses)({
        [Image_module_css_1.default.image]: true,
        [imageInfo.url]: !!imageInfo.fontawesome,
        [Image_module_css_1.default.imageFontAwesome]: !!imageInfo.fontawesome,
        [imageClassName]: !!imageClassName,
    });
    const getImage = () => (imageInfo.fontawesome
        ? React.createElement("i", { className: imageClasses })
        : React.createElement("img", { className: imageClasses, src: imageInfo.url }));
    return (React.createElement("div", { onClick: onClick, className: containerClasses }, href
        ? React.createElement("a", { className: aClassName, href: href }, getImage())
        : getImage()));
};
exports.Image = Image;
//# sourceMappingURL=Image.js.map