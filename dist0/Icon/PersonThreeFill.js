"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
function SvgPersonThreeFill(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M9.39 8.91c0-1.44 1.17-2.61 2.61-2.61s2.61 1.17 2.61 2.61-1.17 2.61-2.61 2.61-2.61-1.17-2.61-2.61zM12 12.48c-2.93 0-4.38 1.52-4.94 3.17-.21.62.16 1.29.79 1.47 2.71.76 5.59.76 8.3 0 .63-.18 1-.85.79-1.47-.56-1.66-2.01-3.17-4.94-3.17zm7-1.18c1.15 0 2.09-.94 2.09-2.09S20.15 7.12 19 7.12s-2.09.94-2.09 2.09.94 2.09 2.09 2.09zm3.95 3.3c-.45-1.33-1.6-2.54-3.95-2.54-1 0-1.77.23-2.37.58 1 .94 1.71 2.18 1.99 3.58 1.25.04 2.5-.1 3.71-.44.5-.14.79-.68.62-1.18zM5 11.3c1.15 0 2.09-.94 2.09-2.09S6.15 7.12 5 7.12s-2.09.94-2.09 2.09S3.85 11.3 5 11.3zm0 .76c-2.35 0-3.5 1.21-3.95 2.54-.17.5.13 1.03.63 1.18 1.21.34 2.46.48 3.71.44.27-1.4.98-2.64 1.99-3.58-.61-.35-1.38-.58-2.38-.58z" })));
}
exports.default = SvgPersonThreeFill;
//# sourceMappingURL=PersonThreeFill.js.map