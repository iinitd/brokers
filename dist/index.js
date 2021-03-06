"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseBroker = exports.useBroker = void 0;
var react_1 = require("react");
function useBroker(broker) {
    var _this = this;
    var initData = broker.initData, initParams = broker.initParams, isPrefetch = broker.isPrefetch;
    var _a = __read(react_1.useState(initData), 2), data = _a[0], setData = _a[1];
    var _b = __read(react_1.useState(initParams), 2), params = _b[0], setParams = _b[1];
    var _c = __read(react_1.useState(false), 2), loading = _c[0], setLoading = _c[1];
    var redeal = function (m) { return __awaiter(_this, void 0, void 0, function () {
        var newParams, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('refetching');
                    setLoading(true);
                    newParams = params;
                    if (m) {
                        newParams = m(params);
                        setParams(newParams);
                    }
                    console.log('newParams', newParams);
                    return [4 /*yield*/, broker.deal(newParams)];
                case 1:
                    res = _a.sent();
                    setData(res);
                    setLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        if (isPrefetch) {
            redeal();
        }
    }, []);
    var exportables = {
        data: data,
        params: params,
        loading: loading,
        redeal: redeal,
    };
    return exportables;
}
exports.useBroker = useBroker;
var BaseBroker = /** @class */ (function () {
    function BaseBroker(presets) {
        this.name = presets === null || presets === void 0 ? void 0 : presets.name;
        this.initData = presets === null || presets === void 0 ? void 0 : presets.initData;
        this.initParams = presets === null || presets === void 0 ? void 0 : presets.initParams;
        this.isPrefetch = (presets === null || presets === void 0 ? void 0 : presets.isPrefetch) || false;
    }
    BaseBroker.prototype.deal = function (params) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    return BaseBroker;
}());
exports.BaseBroker = BaseBroker;
//# sourceMappingURL=index.js.map