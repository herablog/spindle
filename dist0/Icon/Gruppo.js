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
function SvgGruppo(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.53 18.02c-.09-.09-.9-1.44-3.03-2.52a5.816 5.816 0 002.46-4.78c0-3.2-2.51-5.72-5.56-5.72-.83 0-1.58.19-2.29.53-.69-.34-1.47-.53-2.3-.53-3.05 0-5.46 2.53-5.46 5.74 0 2 .89 3.7 2.37 4.77-2.14 1.1-3.04 2.41-3.1 2.52-.15.27-.17.53-.04.76.15.26.35.39.66.39H19.9c.28 0 .53-.16.66-.39.15-.27.13-.54-.03-.77zM6.75 9.22c0-.48.39-.88.88-.88.48 0 .88.39.88.88 0 .48-.39.88-.88.88s-.88-.4-.88-.88zm5.17 3.17c-.5.7-1.31 1.11-2.17 1.11-.86 0-1.67-.42-2.17-1.11a.507.507 0 01.11-.7c.23-.16.54-.11.7.12.62.87 2.09.87 2.72 0 .16-.22.47-.28.7-.12.22.16.27.47.11.7zm-.04-2.29c-.49 0-.88-.4-.88-.88s.39-.88.88-.88c.48 0 .88.39.88.88-.01.48-.4.88-.88.88zm3.62 7.46c-.44-.66-1.12-1.29-2.59-2.06a5.816 5.816 0 002.46-4.78c0-1.63-.6-3.03-1.61-4.09.09-.05.3-.07.64-.07 2.13 0 3.85 1.88 3.85 4.16 0 1.36-.62 2.64-1.75 3.42-.48.33-.76.9-.71 1.49.05.57.7.77 1.19 1.05.59.33 1.28.53 1.63.89H15.5v-.01z" })));
}
exports.default = SvgGruppo;
//# sourceMappingURL=Gruppo.js.map