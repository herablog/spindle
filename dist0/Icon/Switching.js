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
function SvgSwitching(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M15.19 10.15c-.45 0-.67-.54-.35-.85l1.4-1.4A5.969 5.969 0 0012 6.13c-2.46 0-4.71 1.55-5.6 3.86a.99.99 0 01-1.29.57c-.52-.2-.77-.78-.58-1.29C5.71 6.2 8.71 4.13 12 4.13c2.16 0 4.17.86 5.65 2.35L19.12 5c.31-.32.85-.09.85.35v4.29c0 .28-.22.5-.5.5h-4.28v.01zM4 14.63v4.29c0 .45.54.67.85.35l1.5-1.5c1.49 1.49 3.5 2.36 5.64 2.36 3.29 0 6.29-2.07 7.47-5.14a.994.994 0 00-.58-1.29.998.998 0 00-1.29.58 6.024 6.024 0 01-5.6 3.86c-1.61 0-3.12-.65-4.23-1.77l1.38-1.38c.31-.32.09-.85-.35-.85H4.5a.48.48 0 00-.5.49z" })));
}
exports.default = SvgSwitching;
//# sourceMappingURL=Switching.js.map