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
function SvgGenreDone(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.15 20H7c-.55 0-1-.45-1-1V7.98h12v6.97c0 .55.45 1 1 1s1-.45 1-1V4.98c0-1.66-1.34-3-3-3H7c-1.66 0-3 1.34-3 3V19c0 1.65 1.35 3 3 3h4.15c.55 0 1-.45 1-1s-.44-1-1-1zm4.44-7.34l-2.26-.27-.92-2.14a.457.457 0 00-.84 0l-.92 2.14-2.26.27c-.38.05-.54.52-.26.78l1.69 1.64-.45 2.35c-.08.39.34.68.68.48l1.94-1.16 1.94 1.16c.34.2.76-.09.68-.48l-.45-2.35 1.69-1.64c.28-.26.12-.73-.26-.78zm4.75 4.77c.4-.39 1.03-.39 1.42 0 .39.39.39 1.02.01 1.42l-4.05 4.04c-.2.19-.45.29-.71.29-.25 0-.5-.1-.7-.29l-2.17-2.14a.996.996 0 01-.01-1.41.996.996 0 011.41-.01L17 20.77l3.34-3.34z" })));
}
exports.default = SvgGenreDone;
//# sourceMappingURL=GenreDone.js.map