"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCurrentUrl = exports.toUrl = exports.getRootPath = void 0;
var ConnectionType;
(function (ConnectionType) {
    ConnectionType[ConnectionType["LocalHost"] = 0] = "LocalHost";
    ConnectionType[ConnectionType["LocalHostNumber"] = 1] = "LocalHostNumber";
    ConnectionType[ConnectionType["Public"] = 2] = "Public";
})(ConnectionType || (ConnectionType = {}));
const getConnectionType = () => {
    if (document.location.hostname.includes('localhost')) {
        return ConnectionType.LocalHost;
    }
    if (document.location.hostname.includes('127.0.0.1')) {
        return ConnectionType.LocalHostNumber;
    }
    else {
        return ConnectionType.Public;
    }
};
const getRootPath = (type) => {
    switch (type !== null && type !== void 0 ? type : getConnectionType()) {
        case ConnectionType.LocalHost:
            return 'http://localhost:5500';
        case ConnectionType.LocalHostNumber:
            return 'http://127.0.0.1:5500';
        case ConnectionType.Public:
        default:
            return 'https://senapp.github.io';
    }
};
exports.getRootPath = getRootPath;
const toUrl = (path, parameters = '') => {
    const type = getConnectionType();
    switch (type) {
        case ConnectionType.LocalHost:
        case ConnectionType.LocalHostNumber:
            return `${(0, exports.getRootPath)(type)}${path}.html${parameters}`;
        case ConnectionType.Public:
        default:
            return `${(0, exports.getRootPath)(type)}${path}${parameters}`;
    }
};
exports.toUrl = toUrl;
const isCurrentUrl = (url) => url === document.location.href;
exports.isCurrentUrl = isCurrentUrl;
//# sourceMappingURL=connection.js.map