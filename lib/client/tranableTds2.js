"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (Base) => class extends Base {
    async secureTran2(args) {
        const response = await this.post('/payment/SecureTran2.idPass', args);
        return response;
    }
};
