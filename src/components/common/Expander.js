"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Expander = void 0;
const React = require("react");
const react_1 = require("react");
const useRect_1 = require("../../framework/useRect");
const css_1 = require("../../utils/css");
const Expander_module_css_1 = require("./Expander.module.css");
const Expander = ({ header = '', defaultExpanded = true, containerClassName = '', headerClassName = '', children }) => {
    const [expanded, setExpanded] = (0, react_1.useState)(defaultExpanded);
    const [showChildren, setShowChildren] = (0, react_1.useState)(defaultExpanded);
    const [rect, ref, manuallyUpdate] = (0, useRect_1.useRect)();
    (0, react_1.useEffect)(() => {
        if (!expanded) {
            window.setTimeout(() => setShowChildren(false), 125);
        }
        else {
            setShowChildren(true);
            window.setTimeout(() => manuallyUpdate(), 125);
        }
    }, [expanded]);
    const containerClasses = (0, css_1.filterCssClasses)({
        [Expander_module_css_1.default.container]: true,
        [containerClassName]: !!containerClassName,
        [Expander_module_css_1.default.containerExpanded]: expanded,
    });
    const headerClasses = (0, css_1.filterCssClasses)({
        [Expander_module_css_1.default.header]: true,
        [headerClassName]: !!headerClassName,
        [Expander_module_css_1.default.headerExpanded]: expanded,
        [Expander_module_css_1.default.headerNotExpanded]: !expanded,
    });
    return (React.createElement("div", { className: containerClasses },
        React.createElement("div", { style: { marginBottom: expanded ? '5px' : 0 }, onClick: () => setExpanded(!expanded), className: headerClasses }, header),
        React.createElement("div", { style: { height: expanded && rect ? rect.height : 0 }, className: Expander_module_css_1.default.content }, showChildren && React.createElement("div", { ref: ref }, children))));
};
exports.Expander = Expander;
//# sourceMappingURL=Expander.js.map