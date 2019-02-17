"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Convenience wrapper around generated swagger sdk
 */
var mailslurp_swagger_sdk_ts_1 = require("mailslurp-swagger-sdk-ts");
var MailSlurp = /** @class */ (function () {
    function MailSlurp(opts) {
        // check options
        if (!opts.apiKey) {
            throw "Missing apiKey config parameter";
        }
        // instantiate api clients
        var conf = { apiKey: opts.apiKey };
        this.inboxApi = new mailslurp_swagger_sdk_ts_1.InboxControllerApi(conf);
        this.emailApi = new mailslurp_swagger_sdk_ts_1.EmailControllerApi(conf);
    }
    MailSlurp.prototype.createInbox = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.inboxApi.createInboxUsingPOST()];
            });
        });
    };
    MailSlurp.prototype.deleteInbox = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.inboxApi.deleteInboxUsingDELETE(id)];
            });
        });
    };
    MailSlurp.prototype.getInbox = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.inboxApi.getInboxUsingGET(id)];
            });
        });
    };
    MailSlurp.prototype.getInboxes = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.inboxApi.getInboxesUsingGET()];
            });
        });
    };
    MailSlurp.prototype.getMessages = function (id, args) {
        if (args === void 0) { args = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.inboxApi.getMessagesUsingGET(id, args.limit, args.minCount, args.retryTimeout, args.since)];
            });
        });
    };
    MailSlurp.prototype.sendMessage = function (id, sendEmailOptions) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.inboxApi.sendMessageUsingPOST(id, sendEmailOptions)];
            });
        });
    };
    MailSlurp.prototype.getMessage = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.emailApi.getMessageUsingGET(id)];
            });
        });
    };
    return MailSlurp;
}());
exports.default = MailSlurp;
