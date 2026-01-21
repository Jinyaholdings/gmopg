"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (Base) => class extends Base {
    async searchTradeMulti(args) {
        const defaultData = {
            ShopID: this.config.ShopID,
            ShopPass: this.config.ShopPass,
            OrderID: undefined,
            PayType: undefined,
        };
        return this.post('/payment/SearchTradeMulti.idPass', {
            ...defaultData,
            ...args,
        });
    }
};
