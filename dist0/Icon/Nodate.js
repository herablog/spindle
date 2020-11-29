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
function SvgNodate(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M20 13.75V5.99c0-2.21-1.79-4-4-4H8c-2.21 0-4 1.79-4 4v12c0 2.21 1.79 4 4 4h3.76c1.05 0 2.08-.43 2.83-1.17l4.24-4.24c.74-.75 1.17-1.78 1.17-2.83zm-6.5 1.74h3.59l-3.59 3.59v-3.59zm4.5-2h-4.5c-1.1 0-2 .9-2 2v4.5H8c-1.1 0-2-.9-2-2v-12c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v7.5z" })));
}
exports.default = SvgNodate;
//# sourceMappingURL=Nodate.js.map