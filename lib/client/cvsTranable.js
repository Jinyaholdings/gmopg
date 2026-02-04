"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const encoding = require("encoding-japanese");
exports.default = (Base) => class extends Base {
    async entryTranCvs(args) {
        const defaultData = {
            ShopID: this.config.ShopID,
            ShopPass: this.config.ShopPass,
            OrderID: undefined,
            Amount: undefined,
            Tax: undefined,
        };
        return this.post('/payment/EntryTranCvs.idPass', {
            ...defaultData,
            ...args,
        });
    }
    async execTranCvs(args) {
        return this.post('/payment/ExecTranCvs.idPass', {
            ...args,
            CustomerName: encoding.urlEncode(encoding.convert(args.CustomerName, { to: 'SJIS', type: 'array' })),
            CustomerKana: encoding.urlEncode(encoding.convert(args.CustomerKana, { to: 'SJIS', type: 'array' })),
        });
    }
    async cancelCvs(args) {
        const defaultData = {
            ShopID: this.config.ShopID,
            ShopPass: this.config.ShopPass,
            AccessID: undefined,
            AccessPass: undefined,
            OrderID: undefined,
        };
        return this.post('/payment/CvsCancel.idPass', {
            ...defaultData,
            ...args,
        });
    }
};
