"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageContent = void 0;
const React = require("react");
const PageContent_module_css_1 = require("./PageContent.module.css");
const PageContent = ({ className = '', children }) => (React.createElement("div", { className: `${PageContent_module_css_1.default.container} ${className}`.trimEnd() }, children));
exports.PageContent = PageContent;
//# sourceMappingURL=PageContent.js.map