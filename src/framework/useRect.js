"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRect = void 0;
const react_1 = require("react");
const useEffectInEvent = (event, useCapture, set) => {
    (0, react_1.useEffect)(() => {
        set();
        window.addEventListener(event, set, useCapture);
        return () => window.removeEventListener(event, set, useCapture);
    }, []);
};
const useRect = () => {
    const ref = (0, react_1.useRef)(null);
    const [rect, setRect] = (0, react_1.useState)();
    const set = () => { var _a; return setRect((_a = ref.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()); };
    useEffectInEvent('resize', false, set);
    useEffectInEvent('scroll', true, set);
    return [rect, ref, set];
};
exports.useRect = useRect;
//# sourceMappingURL=useRect.js.map