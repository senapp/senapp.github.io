"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePage = void 0;
const React = require("react");
const ReactDOM = require("react-dom");
const PageContainer_1 = require("../components/page/PageContainer");
const PageContent_1 = require("../components/page/PageContent");
const home_module_css_1 = require("./home.module.css");
const HomePage = () => (React.createElement(PageContainer_1.PageContainer, null,
    React.createElement(PageContent_1.PageContent, { className: home_module_css_1.default.homeContainer },
        React.createElement("h1", { className: home_module_css_1.default.title }, "Senapp Studios"),
        React.createElement("h2", { className: home_module_css_1.default.text }, "Game and App developer"),
        React.createElement("h3", { className: home_module_css_1.default.message }, "Check out the website with the tabs above and below!"))));
exports.HomePage = HomePage;
ReactDOM.render(React.createElement(exports.HomePage, null), document.getElementById('root'));
//# sourceMappingURL=home.js.map