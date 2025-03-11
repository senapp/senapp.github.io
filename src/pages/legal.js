"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegalPage = void 0;
const React = require("react");
const ReactDOM = require("react-dom");
const Attributions_1 = require("../components/legal/Attributions");
const PrivacyPolicy_1 = require("../components/legal/PrivacyPolicy");
const Statements_1 = require("../components/legal/Statements");
const TermsAndConditions_1 = require("../components/legal/TermsAndConditions");
const PageContainer_1 = require("../components/page/PageContainer");
const PageContent_1 = require("../components/page/PageContent");
const legal_module_css_1 = require("./legal.module.css");
var Page;
(function (Page) {
    Page[Page["None"] = 0] = "None";
    Page[Page["PrivacyPolicy"] = 1] = "PrivacyPolicy";
    Page[Page["TermsAndConditions"] = 2] = "TermsAndConditions";
    Page[Page["Statements"] = 3] = "Statements";
    Page[Page["Attributions"] = 4] = "Attributions";
})(Page || (Page = {}));
const LegalPage = () => {
    const urlLegalPage = getActiveUrlLegalPage();
    return (React.createElement(PageContainer_1.PageContainer, null,
        React.createElement(PageContent_1.PageContent, { className: legal_module_css_1.default.container },
            React.createElement(PrivacyPolicy_1.PrivacyPolicy, { expanded: urlLegalPage === Page.PrivacyPolicy }),
            React.createElement(TermsAndConditions_1.TermsAndConditions, { expanded: urlLegalPage === Page.TermsAndConditions }),
            React.createElement(Statements_1.Statements, { expanded: urlLegalPage === Page.Statements }),
            React.createElement(Attributions_1.Attributions, { expanded: urlLegalPage === Page.Attributions }))));
};
exports.LegalPage = LegalPage;
const getActiveUrlLegalPage = () => {
    const splitByDash = window.location.href.split('/');
    if (splitByDash[splitByDash.length - 1].includes('?')) {
        const rawValueArray = splitByDash[splitByDash.length - 1].split('?');
        const rawValue = rawValueArray[rawValueArray.length - 1];
        if (Number.isNaN(Number(rawValue))) {
            return Page.None;
        }
        else {
            const value = Number(rawValue);
            switch (value) {
                case 0:
                    return Page.PrivacyPolicy;
                case 1:
                    return Page.TermsAndConditions;
                case 2:
                    return Page.Statements;
                case 3:
                    return Page.Attributions;
                default:
                    return Page.None;
            }
        }
    }
    else {
        return Page.None;
    }
};
ReactDOM.render(React.createElement(exports.LegalPage, null), document.getElementById('root'));
//# sourceMappingURL=legal.js.map