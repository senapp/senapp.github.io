"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextInput = void 0;
const React = require("react");
const react_1 = require("react");
const TextInput_module_css_1 = require("./TextInput.module.css");
const TextInput = ({ label, containerClassName = '', maxLength, multiline, type = "text", value, onChange }) => {
    var _a;
    const [currentInput, setCurrentInput] = (0, react_1.useState)((_a = value === null || value === void 0 ? void 0 : value.toString()) !== null && _a !== void 0 ? _a : '');
    (0, react_1.useEffect)(() => {
        if (value !== undefined) {
            setCurrentInput(value.toString());
        }
    }, [value]);
    const onValueChange = (newValue) => {
        if (maxLength && newValue.length > maxLength) {
            newValue = newValue.slice(0, maxLength);
            setCurrentInput(newValue);
        }
        if (onChange) {
            onChange(newValue);
        }
    };
    return (React.createElement("div", { className: `${TextInput_module_css_1.default.container} ${containerClassName}`.trimEnd() },
        label && React.createElement("div", { className: TextInput_module_css_1.default.label },
            " ",
            label,
            " "),
        multiline
            ? React.createElement("textarea", { className: TextInput_module_css_1.default.input, value: currentInput, onChange: (e) => onValueChange(e.target.value) })
            : React.createElement("input", { className: TextInput_module_css_1.default.input, value: currentInput, type: type, onChange: (e) => onValueChange(e.target.value) })));
};
exports.TextInput = TextInput;
//# sourceMappingURL=TextInput.js.map