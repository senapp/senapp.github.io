"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const React = require("react");
const Button_module_css_1 = require("./Button.module.css");
const Button = ({ label = '', className = '', small = false, onClick }) => (React.createElement("div", { className: `${Button_module_css_1.default.button} ${small && Button_module_css_1.default.smallButton} ${className}`.trimEnd(), onClick: onClick }, label));
exports.Button = Button;
//# sourceMappingURL=Button.js.map