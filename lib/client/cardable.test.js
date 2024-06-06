"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const sinon = require("sinon");
const client_1 = require("../client");
const client_enum_1 = require("../client.enum");
const cardable_1 = require("./cardable");
const Cardable = (0, cardable_1.default)(client_1.default);
const cardable = new Cardable();
ava_1.default.afterEach(() => {
    sinon.restore();
});
(0, ava_1.default)('.saveCard calls API and returns response', async (t) => {
    const expect = {
        CardSeq: 'cardseq',
        CardNo: 'cardno',
        Forward: 'forward',
        Brand: 'brand',
    };
    sinon.stub(cardable, 'post').resolves(expect);
    const args = {
        SiteID: 'siteid',
        SitePass: 'sitepass',
        MemberID: 'memberid',
    };
    const res = await cardable.saveCard(args);
    t.deepEqual(res, expect);
});
(0, ava_1.default)('.deleteCard calls API and returns response', async (t) => {
    const expect = {
        CardSeq: 'cardseq',
    };
    sinon.stub(cardable, 'post').resolves(expect);
    const args = {
        SiteID: 'siteid',
        SitePass: 'sitepass',
        MemberID: 'memberid',
        SeqMode: client_enum_1.SeqMode.Logic,
        CardSeq: 'cardseq',
    };
    const res = await cardable.deleteCard(args);
    t.deepEqual(res, expect);
});
(0, ava_1.default)('.searchCard calls API and returns response', async (t) => {
    const result = {
        CardSeq: 'cardseq',
        DefaultFlag: '1',
        CardName: 'cardname',
        CardNo: 'cardno',
        Expire: 'expire',
        HolderName: 'holdername',
        DeleteFlag: '0',
    };
    sinon.stub(cardable, 'post').resolves(result);
    const expect = [result];
    const args = {
        SiteID: 'siteid',
        SitePass: 'sitepass',
        MemberID: 'memberid',
        SeqMode: client_enum_1.SeqMode.Logic,
        CardSeq: 'cardseq',
    };
    const res = await cardable.searchCard(args);
    t.deepEqual(res, expect);
});
(0, ava_1.default)('.searchCardDetail calls API and returns response', async (t) => {
    const result = {
        CardNo: 'cardno',
        Brand: 'brand',
        DomesticFlag: '1',
        IssuerCode: '1234567',
        DebitPrepaidFlag: '1',
        DebitPrepaidIssuerName: 'debitPrepaidIssuerName',
        ForwardFinal: '1234567',
        ErrCode: '',
        ErrInfo: '',
    };
    sinon.stub(cardable, 'post').resolves(result);
    const expect = [result];
    const args = {
        ShopID: 'shopid',
        ShopPass: 'shoppass',
        Token: 'token',
    };
    const res = await cardable.searchCardDetail(args);
    t.deepEqual(res, expect);
});
