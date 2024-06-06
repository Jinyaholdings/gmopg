"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENUMS = exports.GENERATE_MEMBER_ID = void 0;
const enums = require("./client.enum");
exports.ENUMS = enums;
const memberable_1 = require("./client/memberable");
const cardable_1 = require("./client/cardable");
const tranable_1 = require("./client/tranable");
const tranableTds2_1 = require("./client/tranableTds2");
const cvsTranable_1 = require("./client/cvsTranable");
const multiTranable_1 = require("./client/multiTranable");
const util_1 = require("./util");
const client_1 = require("./client");
exports.default = (0, cardable_1.default)((0, cvsTranable_1.default)((0, memberable_1.default)((0, multiTranable_1.default)((0, tranableTds2_1.default)((0, tranable_1.default)(client_1.default))))));
function GENERATE_MEMBER_ID(key) {
    return (0, util_1.generateID)(key).substring(0, 60);
}
exports.GENERATE_MEMBER_ID = GENERATE_MEMBER_ID;
__exportStar(require("./config.type"), exports);
__exportStar(require("./client.type"), exports);
__exportStar(require("./client.enum"), exports);
__exportStar(require("./client/memberable.type"), exports);
__exportStar(require("./client/cardable.type"), exports);
__exportStar(require("./client/tranable.type"), exports);
__exportStar(require("./client/tranableTds2.type"), exports);
__exportStar(require("./client/cvsTranable.type"), exports);
__exportStar(require("./client/multiTranable.type"), exports);
