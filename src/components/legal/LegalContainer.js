"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegalContainer = void 0;
const React = require("react");
const Expander_1 = require("../common/Expander");
const LegalContainer_module_css_1 = require("./LegalContainer.module.css");
const LegalContainer = ({ header = '', expanded = false, dateUpdated = '', children }) => (React.createElement(Expander_1.Expander, { header: `${header}: ${dateUpdated}`, defaultExpanded: expanded, containerClassName: LegalContainer_module_css_1.default.expanderContainer, headerClassName: LegalContainer_module_css_1.default.expanderHeader },
    React.createElement("div", { className: LegalContainer_module_css_1.default.childContainer }, children)));
exports.LegalContainer = LegalContainer;
//# sourceMappingURL=LegalContainer.js.map