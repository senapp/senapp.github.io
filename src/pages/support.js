"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupportPage = void 0;
const React = require("react");
const ReactDOM = require("react-dom");
const Expander_1 = require("../components/common/Expander");
const PageContainer_1 = require("../components/page/PageContainer");
const PageContent_1 = require("../components/page/PageContent");
const support_module_css_1 = require("./support.module.css");
const SupportPage = () => (React.createElement(PageContainer_1.PageContainer, null,
    React.createElement(PageContent_1.PageContent, { className: support_module_css_1.default.container },
        React.createElement("div", { className: support_module_css_1.default.title }, "Frequently asked questions"),
        React.createElement(Expander_1.Expander, { header: "My game crashed/freezed/bugged?", defaultExpanded: false, containerClassName: support_module_css_1.default.questionContainer, headerClassName: support_module_css_1.default.questionHeader },
            React.createElement("div", { className: support_module_css_1.default.question }, "Send a email to help.senapp@gmail.com with videos and screenshoots of the issue. If that is not possible then please describe what you were doing leading up to the issue. The more details the better!")),
        React.createElement(Expander_1.Expander, { header: "Can you make a club simulator as well?", defaultExpanded: false, containerClassName: support_module_css_1.default.questionContainer, headerClassName: support_module_css_1.default.questionHeader },
            React.createElement("div", { className: support_module_css_1.default.question },
                "Yes!",
                React.createElement("br", null),
                React.createElement("br", null),
                "I will try to release club versions of the game International Football Simulator when I have enough free time.")),
        React.createElement(Expander_1.Expander, { header: "I bought no ads but I still get ads?", defaultExpanded: false, containerClassName: support_module_css_1.default.questionContainer, headerClassName: support_module_css_1.default.questionHeader },
            React.createElement("div", { className: support_module_css_1.default.question }, 'When you launch the game, go to the settings menu and click "Restore Purchases". If this doesn\'t fix the issue then send a email to help.senapp@gmail.com with your recipt number so I can refund you. Example: GPA.3213.3123.1231')))));
exports.SupportPage = SupportPage;
ReactDOM.render(React.createElement(exports.SupportPage, null), document.getElementById('root'));
//# sourceMappingURL=support.js.map