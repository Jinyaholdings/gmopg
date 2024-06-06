"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequest = void 0;
const errorDefinition = require('../error-codes.json');
class BadRequest extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
    setResponse(obj) {
        this.response = obj;
        return this;
    }
    parseError(obj) {
        this.errInfo = [...new Set(obj.ErrInfo.split('|'))];
        this.errors = this.errInfo.map((code) => errorDefinition[code]);
        return this;
    }
    toString() {
        return `${this.name}: ${this.message}`;
    }
}
exports.BadRequest = BadRequest;
