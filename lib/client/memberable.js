"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (Base) => class extends Base {
    defaultMemberData() {
        const { SiteID, SitePass } = this.config;
        return {
            SiteID,
            SitePass,
            MemberID: undefined,
        };
    }
    async saveMember(args) {
        return this.post('/payment/SaveMember.idPass', {
            ...this.defaultMemberData(),
            ...args,
        });
    }
    async updateMember(args) {
        return this.post('/payment/UpdateMember.idPass', {
            ...this.defaultMemberData(),
            ...args,
        });
    }
    async deleteMember(args) {
        return this.post('/payment/DeleteMember.idPass', {
            ...this.defaultMemberData(),
            ...args,
        });
    }
    async searchMember(args) {
        return this.post('/payment/SearchMember.idPass', {
            ...this.defaultMemberData(),
            ...args,
        });
    }
};
