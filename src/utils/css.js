"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterCssClasses = void 0;
const filterCssClasses = (classes) => Object.entries(classes).filter(classInfo => classInfo[1]).map(classInfo => classInfo[0]).join(' ');
exports.filterCssClasses = filterCssClasses;
//# sourceMappingURL=css.js.map