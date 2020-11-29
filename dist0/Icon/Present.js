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
function SvgPresent(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M18.39 7.45c.25-.61.32-1.29.16-1.96A3.196 3.196 0 0016.2 3.1c-1.46-.35-2.91.29-3.61 1.59 0 .01-.01.01-.01.02l-.56 1.05c-.02.04-.03.09-.05.13-.02-.05-.03-.09-.05-.14l-.56-1.05s-.01-.01-.01-.02c-.7-1.3-2.15-1.94-3.61-1.59a3.18 3.18 0 00-2.35 2.39c-.16.68-.09 1.35.16 1.97-1.3.08-2.34 1.15-2.34 2.46v2.15c0 .94.54 1.75 1.31 2.17-.08.25-.14.51-.14.78v3.52A2.493 2.493 0 006.87 21h10.2a2.48 2.48 0 002.48-2.48V15c0-.27-.06-.53-.14-.78.78-.42 1.31-1.23 1.31-2.17V9.91a2.46 2.46 0 00-2.33-2.46zm.33 2.46v2.15c0 .26-.21.48-.48.48h-5.27v-3.1h5.28c.26-.01.47.2.47.47zm-4.93-3.22l.28-.53c.13-.25.22-.41.28-.53a1.218 1.218 0 012.25.28c.08.36.01.71-.19 1-.2.28-.51.47-.85.5-.05 0-.09.01-.14.01h-1.19c-.25 0-.38-.17-.43-.24a.493.493 0 01-.01-.49zm-6.45-.77c.09-.42.45-.78.87-.88a1.218 1.218 0 011.38.6c.06.12.15.29.28.53l.28.53c.12.23.03.42-.01.5-.04.06-.17.23-.43.23H8.52c-.05 0-.09 0-.14-.01-.34-.04-.65-.22-.85-.5-.2-.29-.27-.64-.19-1zM5.22 9.91c0-.26.21-.48.48-.48h5.28v3.1H5.69a.48.48 0 01-.48-.48V9.91h.01zm1.17 8.61V15c0-.26.21-.48.48-.48h4.1V19h-4.1a.48.48 0 01-.48-.48zm11.16 0c0 .26-.21.48-.48.48h-4.1v-4.47h4.1c.26 0 .48.21.48.48v3.51z" })));
}
exports.default = SvgPresent;
//# sourceMappingURL=Present.js.map