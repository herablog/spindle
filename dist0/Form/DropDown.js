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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropDown = void 0;
var react_1 = __importStar(require("react"));
var Icon_1 = require("../Icon");
var BLOCK_NAME = 'spui-DropDown';
exports.DropDown = function (_a) {
    var children = _a.children, _b = _a.hasError, hasError = _b === void 0 ? false : _b, onChange = _a.onChange, rest = __rest(_a, ["children", "hasError", "onChange"]);
    var selectEl = react_1.useRef(null);
    var _c = react_1.useState(''), text = _c[0], setText = _c[1];
    var _d = react_1.useState(false), disabled = _d[0], setDisabled = _d[1];
    var update = function () {
        if (selectEl && selectEl.current) {
            var selectedEl = selectEl.current.options[selectEl.current.selectedIndex];
            var value = selectedEl.text;
            var disabled_1 = selectedEl.disabled;
            setText(value);
            setDisabled(disabled_1);
        }
    };
    var handleChange = function (event) {
        if (typeof onChange === 'function') {
            onChange(event);
        }
        update();
    };
    // Update text once
    react_1.useEffect(update, []);
    return (react_1.default.createElement("label", { className: [
            BLOCK_NAME + "-label",
            !disabled ? 'is-active' : '',
            hasError ? 'is-error' : '',
        ]
            .filter(Boolean)
            .join(' ') },
        react_1.default.createElement("span", { className: BLOCK_NAME + "-visual" }, text),
        react_1.default.createElement("span", { className: BLOCK_NAME + "-icon" },
            react_1.default.createElement(Icon_1.ChevronDownBold, { "aria-hidden": "true" })),
        react_1.default.createElement("select", __assign({ className: BLOCK_NAME + "-select", ref: selectEl, onChange: handleChange }, rest), children),
        react_1.default.createElement("span", { className: BLOCK_NAME + "-outline" })));
};
//# sourceMappingURL=DropDown.js.map