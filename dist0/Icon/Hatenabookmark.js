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
function SvgHatenabookmark(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M11.09 13.03c.2.14.3.37.3.72s-.11.53-.33.66c-.22.13-.59.2-1.12.2h-.78v-1.78h.81c.55 0 .92.07 1.12.2zm-.35-1.85c.2-.12.31-.32.31-.63s-.09-.52-.28-.65c-.19-.12-.56-.19-1.12-.19h-.49v1.64h.44c.56.01.93-.04 1.14-.17zM21 6.67v10.66c0 2.03-1.64 3.67-3.67 3.67H6.67C4.64 21 3 19.36 3 17.33V6.67C3 4.64 4.64 3 6.67 3h10.66C19.36 3 21 4.64 21 6.67zm-6.03 6.7h1.8V7.91h-1.8v5.46zm-1.47.38c0-.61-.16-1.09-.49-1.46-.33-.36-.78-.57-1.36-.61.52-.14.89-.35 1.13-.62.24-.28.35-.64.35-1.11.01-.34-.08-.68-.24-.98-.16-.28-.4-.52-.69-.67-.25-.14-.57-.24-.93-.3-.37-.06-1.01-.09-1.93-.09H7.09v8.18H9.4c.93 0 1.6-.03 2.01-.09.41-.06.75-.17 1.03-.32.33-.17.61-.44.79-.77.18-.34.27-.72.27-1.16zm3.41 1.31a1.04 1.04 0 10-2.078-.002 1.04 1.04 0 002.078.002z" })));
}
exports.default = SvgHatenabookmark;
//# sourceMappingURL=Hatenabookmark.js.map