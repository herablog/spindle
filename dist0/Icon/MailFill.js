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
function SvgMailFill(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M19 4H5C3.3 4 2 5.3 2 7v10c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V7c0-1.7-1.3-3-3-3zm-.7 6l-3.6 2.8c-.8.6-1.7 1-2.7 1-1 0-1.9-.3-2.7-1L5.7 10c-.5-.4-.6-1.2-.2-1.8.4-.5 1.2-.6 1.8-.2l3.6 2.8c.7.6 1.6.6 2.3 0L16.7 8c.5-.4 1.3-.3 1.8.2.4.6.3 1.4-.2 1.8z" })));
}
exports.default = SvgMailFill;
//# sourceMappingURL=MailFill.js.map