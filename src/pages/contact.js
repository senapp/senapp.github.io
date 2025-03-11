"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactPage = void 0;
const React = require("react");
const ReactDOM = require("react-dom");
const PageContainer_1 = require("../components/page/PageContainer");
const PageContent_1 = require("../components/page/PageContent");
const contact_module_css_1 = require("./contact.module.css");
const connection_1 = require("../utils/connection");
const TextInput_1 = require("../components/common/TextInput");
const react_1 = require("react");
const Button_1 = require("../components/common/Button");
const settings_1 = require("../framework/settings");
const ContactPage = () => {
    const [firstName, setFirstName] = (0, react_1.useState)("");
    const [lastName, setLastName] = (0, react_1.useState)("");
    const [company, setCompany] = (0, react_1.useState)("");
    const [position, setPosition] = (0, react_1.useState)("");
    const [email, setEmail] = (0, react_1.useState)("");
    const [website, setWebsite] = (0, react_1.useState)("");
    const [message, setMessage] = (0, react_1.useState)("");
    const [subject, setSubject] = (0, react_1.useState)("");
    const [showEmail, setShowEmail] = (0, react_1.useState)(false);
    const [name, setName] = (0, react_1.useState)("");
    const [emailSupport, setEmailSupport] = (0, react_1.useState)("");
    const [subjectSupport, setSubjectSupport] = (0, react_1.useState)("");
    const [messageSupport, setMessageSupport] = (0, react_1.useState)("");
    const [showEmailSupport, setShowEmailSupport] = (0, react_1.useState)(false);
    const mobileView = (0, settings_1.isPortrait)() || (0, settings_1.isMobile)();
    const [, forceUpdate] = (0, react_1.useReducer)(x => x + 1, 0);
    (0, react_1.useEffect)(() => { window.addEventListener('resize', forceUpdate); }, []);
    const validation = () => {
        if (firstName.length <= 0) {
            alert('Please enter your first name.');
            return false;
        }
        else if (lastName.length <= 0) {
            alert('Please enter your last name.');
            return false;
        }
        else if (company.length <= 3) {
            alert('Please provide the full company name.');
            return false;
        }
        else if (email.length <= 4 || !email.includes('@') || !email.includes('.')) {
            alert('Please provide a valid email address.');
            return false;
        }
        else if (subject.length <= 3) {
            alert('Subject is too short.');
            return false;
        }
        else if (message.length <= 10) {
            alert('Message is too short. Please provide more information.');
            return false;
        }
        return true;
    };
    const sendEmail = (targetEmail) => {
        if (!validation()) {
            return;
        }
        const email_subject = `${subject}`;
        const email_body = `${message}

        Company: ${company}
        Name: ${firstName} ${lastName}
        Position: ${position.length > 0 ? position : 'N/A'}

        Website: ${website.length > 0 ? website : 'N/A'}
        Email: ${email}`;
        window.location.href = `mailto:${targetEmail}?subject=${encodeURI(email_subject)}&body=${encodeURI(email_body)}`;
    };
    const validationSupport = () => {
        if (name.length <= 0) {
            alert('Please enter your name or alias.');
            return false;
        }
        else if (emailSupport.length <= 4 || !emailSupport.includes('@') || !emailSupport.includes('.')) {
            alert('Please provide a valid email address.');
            return false;
        }
        else if (subjectSupport.length <= 3) {
            alert('Subject is too short.');
            return false;
        }
        else if (messageSupport.length <= 10) {
            alert('Message is too short. Please provide more information.');
            return false;
        }
        return true;
    };
    const sendEmailSupport = (targetEmail) => {
        if (!validationSupport()) {
            return;
        }
        const email_subject = `${subjectSupport}`;
        const email_body = `${messageSupport}

        Name: ${name}
        Email: ${emailSupport}`;
        window.location.href = `mailto:${targetEmail}?subject=${encodeURI(email_subject)}&body=${encodeURI(email_body)}`;
    };
    return (React.createElement(PageContainer_1.PageContainer, null,
        React.createElement(PageContent_1.PageContent, { className: contact_module_css_1.default.container },
            React.createElement("div", { className: mobileView ? contact_module_css_1.default.boxContainerMobile : contact_module_css_1.default.boxContainer },
                React.createElement("div", { className: contact_module_css_1.default.mailContainer },
                    React.createElement("h1", null, "Business"),
                    React.createElement("div", { className: contact_module_css_1.default.inputRow },
                        React.createElement(TextInput_1.TextInput, { label: 'First Name *', value: firstName, onChange: setFirstName }),
                        React.createElement(TextInput_1.TextInput, { label: 'Last Name *', value: lastName, onChange: setLastName })),
                    React.createElement("div", { className: contact_module_css_1.default.inputRow },
                        React.createElement(TextInput_1.TextInput, { label: 'Company *', value: company, onChange: setCompany }),
                        React.createElement(TextInput_1.TextInput, { label: 'Position', value: position, onChange: setPosition })),
                    React.createElement("div", { className: contact_module_css_1.default.inputRow },
                        React.createElement(TextInput_1.TextInput, { label: 'Email *', value: email, onChange: setEmail }),
                        React.createElement(TextInput_1.TextInput, { label: 'Website', value: website, onChange: setWebsite })),
                    React.createElement("div", { className: contact_module_css_1.default.inputRow },
                        React.createElement(TextInput_1.TextInput, { containerClassName: contact_module_css_1.default.subjectInput, label: 'Subject *', value: subject, onChange: setSubject })),
                    React.createElement("div", { className: contact_module_css_1.default.inputRow },
                        React.createElement(TextInput_1.TextInput, { containerClassName: contact_module_css_1.default.messageContainer, value: message, multiline: true, label: 'Message *', onChange: setMessage })),
                    React.createElement("div", { className: contact_module_css_1.default.mailText }, "Please do not email us about using your ad network or marketing our apps through your service."),
                    React.createElement("div", { className: contact_module_css_1.default.buttonDisplay },
                        React.createElement(Button_1.Button, { label: 'Send', className: contact_module_css_1.default.buttonStyle, onClick: () => sendEmail("business.senapp@gmail.com") }),
                        showEmail
                            ? React.createElement("a", { className: contact_module_css_1.default.link, href: "mailto:business.senapp@gmail.com" }, "business.senapp@gmail.com")
                            : React.createElement(Button_1.Button, { label: 'Show Email', className: contact_module_css_1.default.buttonStyle, onClick: () => setShowEmail(true) }))),
                React.createElement("div", { className: contact_module_css_1.default.mailContainer },
                    React.createElement("h1", null, "Support"),
                    React.createElement("div", { className: contact_module_css_1.default.inputRow },
                        React.createElement(TextInput_1.TextInput, { label: 'Name *', value: name, onChange: setName }),
                        React.createElement(TextInput_1.TextInput, { label: 'Email *', value: emailSupport, onChange: setEmailSupport })),
                    React.createElement("div", { className: contact_module_css_1.default.inputRow },
                        React.createElement(TextInput_1.TextInput, { containerClassName: contact_module_css_1.default.subjectInput, label: 'Subject *', value: subjectSupport, onChange: setSubjectSupport })),
                    React.createElement("div", { className: contact_module_css_1.default.inputRow },
                        React.createElement(TextInput_1.TextInput, { containerClassName: contact_module_css_1.default.messageContainer, value: messageSupport, multiline: true, label: 'Message *', onChange: setMessageSupport })),
                    React.createElement("div", { className: contact_module_css_1.default.mailText },
                        'Please check the ',
                        React.createElement("a", { href: (0, connection_1.toUrl)('/pages/support') }, "Support"),
                        ' tab on the bottom of this page before emailing support.'),
                    React.createElement("div", { className: contact_module_css_1.default.buttonDisplay },
                        React.createElement(Button_1.Button, { label: 'Send', className: contact_module_css_1.default.buttonStyle, onClick: () => sendEmailSupport("help.senapp@gmail.com") }),
                        showEmailSupport
                            ? React.createElement("a", { className: contact_module_css_1.default.link, href: "mailto:help.senapp@gmail.com" }, "help.senapp@gmail.com")
                            : React.createElement(Button_1.Button, { label: 'Show Email', className: contact_module_css_1.default.buttonStyle, onClick: () => setShowEmailSupport(true) })))))));
};
exports.ContactPage = ContactPage;
ReactDOM.render(React.createElement(exports.ContactPage, null), document.getElementById('root'));
//# sourceMappingURL=contact.js.map