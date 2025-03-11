"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFound = void 0;
const React = require("react");
const ReactDOM = require("react-dom");
const PageContainer_1 = require("./components/page/PageContainer");
const NotFound = () => (React.createElement(PageContainer_1.PageContainer, null,
    React.createElement("div", null, "404")));
exports.NotFound = NotFound;
ReactDOM.render(React.createElement(exports.NotFound, null), document.getElementById('root'));
//# sourceMappingURL=404.js.map