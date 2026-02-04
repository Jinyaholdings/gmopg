"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateID = generateID;
const crypto_1 = require("crypto");
function generateID(key) {
    return `${key}-${(0, crypto_1.createHash)('md5').update(`${key}-${new Date().toISOString()}`).digest('hex')}`;
}
