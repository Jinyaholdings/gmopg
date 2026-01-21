"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (Base) => class Cardable extends Base {
    defaultCardData() {
        const { SiteID, SitePass } = this.config;
        return {
            SiteID,
            SitePass,
            MemberID: undefined,
        };
    }
    async saveCard(args) {
        return this.post('/payment/SaveCard.idPass', {
            ...this.defaultCardData(),
            ...args,
        });
    }
    async deleteCard(args) {
        return this.post('/payment/DeleteCard.idPass', {
            ...this.defaultCardData(),
            ...args,
        });
    }
    async searchCard(args) {
        const parsed = await this.post('/payment/SearchCard.idPass', {
            ...this.defaultCardData(),
            ...args,
        });
        const cardSeqArry = parsed.CardSeq.split('|');
        const defaultFlagArry = parsed.DefaultFlag.split('|');
        const cardNameArry = parsed.CardName.split('|');
        const cardNoArry = parsed.CardNo.split('|');
        const expireArry = parsed.Expire.split('|');
        const holderNameArry = parsed.HolderName.split('|');
        const deleteFlagArry = parsed.DeleteFlag.split('|');
        return cardSeqArry.map((cardSeq, index) => {
            return {
                CardSeq: cardSeq,
                DefaultFlag: defaultFlagArry[index],
                CardName: cardNameArry[index],
                CardNo: cardNoArry[index],
                Expire: expireArry[index],
                HolderName: holderNameArry[index],
                DeleteFlag: deleteFlagArry[index],
            };
        });
    }
    async searchCardDetail(args) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const parsed = await this.post('/payment/SearchCardDetail.idPass', {
            ...this.defaultCardData(),
            ...args,
        });
        const cardNoArry = ((_a = parsed.CardNo) === null || _a === void 0 ? void 0 : _a.split('|')) || [];
        const brandArry = ((_b = parsed.Brand) === null || _b === void 0 ? void 0 : _b.split('|')) || [];
        const domesticFlagArry = ((_c = parsed.DomesticFlag) === null || _c === void 0 ? void 0 : _c.split('|')) || [];
        const issuerCodeArry = ((_d = parsed.IssuerCode) === null || _d === void 0 ? void 0 : _d.split('|')) || [];
        const debitPrepaidFlagArry = ((_e = parsed.DebitPrepaidFlag) === null || _e === void 0 ? void 0 : _e.split('|')) || [];
        const debitPrepaidIssuerNameArry = ((_f = parsed.DebitPrepaidIssuerName) === null || _f === void 0 ? void 0 : _f.split('|')) || [];
        const forwardFianlArry = ((_g = parsed.ForwardFinal) === null || _g === void 0 ? void 0 : _g.split('|')) || [];
        const errCodeArry = ((_h = parsed.ErrCode) === null || _h === void 0 ? void 0 : _h.split('|')) || [];
        const errInfoArry = ((_j = parsed.ErrInfo) === null || _j === void 0 ? void 0 : _j.split('|')) || [];
        return cardNoArry.map((_, index) => {
            return {
                CardNo: cardNoArry[index],
                Brand: brandArry[index],
                DomesticFlag: domesticFlagArry[index],
                IssuerCode: issuerCodeArry[index],
                DebitPrepaidFlag: debitPrepaidFlagArry[index],
                DebitPrepaidIssuerName: debitPrepaidIssuerNameArry[index],
                ForwardFinal: forwardFianlArry[index],
                ErrCode: errCodeArry[index],
                ErrInfo: errInfoArry[index],
            };
        });
    }
};
