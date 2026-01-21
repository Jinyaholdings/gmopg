"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (Base) => class extends Base {
    async entryTran(args) {
        const defaultData = {
            ShopID: this.config.ShopID,
            ShopPass: this.config.ShopPass,
            OrderID: undefined,
            JobCd: undefined,
            Amount: undefined,
        };
        return this.post('/payment/EntryTran.idPass', {
            ...defaultData,
            ...args,
        });
    }
    async execTran(args) {
        return this.post('/payment/ExecTran.idPass', args, data => data.startsWith('ACS=2&RedirectUrl=')
            ? data.replace('&t=', '%26t=')
            : data);
    }
    async alterTran(args) {
        const defaultData = {
            ShopID: this.config.ShopID,
            ShopPass: this.config.ShopPass,
            AccessID: undefined,
            AccessPass: undefined,
            JobCd: undefined,
        };
        return this.post('/payment/AlterTran.idPass', {
            ...defaultData,
            ...args,
        });
    }
    async searchTrade(args) {
        const defaultData = {
            ShopID: this.config.ShopID,
            ShopPass: this.config.ShopPass,
            OrderID: undefined,
        };
        return this.post('/payment/SearchTrade.idPass', {
            ...defaultData,
            ...args,
        });
    }
    async changeTran(args) {
        const defaultData = {
            ShopID: this.config.ShopID,
            ShopPass: this.config.ShopPass,
            AccessID: undefined,
            AccessPass: undefined,
            JobCd: undefined,
            Amount: undefined,
        };
        return this.post('/payment/ChangeTran.idPass', {
            ...defaultData,
            ...args,
        });
    }
};
