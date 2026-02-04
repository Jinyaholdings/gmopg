"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const sinon = require("sinon");
const client_1 = require("../client");
const client_enum_1 = require("../client.enum");
const multiTranable_1 = require("./multiTranable");
const MultiTranable = (0, multiTranable_1.default)(client_1.default);
const multiTranable = new MultiTranable();
ava_1.default.afterEach(() => {
    sinon.restore();
});
(0, ava_1.default)('.searchTradeMulti calls API and returns response - CVS', async (t) => {
    const expect = {
        Status: client_enum_1.Status.Reqsuccess,
        ProcessDate: 'processdate',
        AccessID: 'accessid',
        AccessPass: 'accesspass',
        Amount: '1234',
        Tax: '10',
        Currency: 'JPN',
        ClientField1: 'clientfield1',
        ClientField2: 'clientfield2',
        ClientField3: 'clientfield3',
        PayType: client_enum_1.PayType.Cvs,
        CvsCode: client_enum_1.CvsCode.Lawson,
        CvsConfNo: 'cvsconfno',
        CvsReceiptNo: 'cvsreceiptno',
        PaymentTerm: 'paymentterm',
        FinishDate: 'finishdate',
    };
    sinon.stub(multiTranable, 'post').resolves(expect);
    const args = {
        ShopID: 'shopid',
        ShopPass: 'shoppass',
        OrderID: 'orderid',
        PayType: client_enum_1.PayType.Cvs,
    };
    const res = await multiTranable.searchTradeMulti(args);
    t.deepEqual(res, expect);
});
(0, ava_1.default)('.searchTradeMulti calls API and returns response - Credit', async (t) => {
    const expect = {
        Status: client_enum_1.Status.Capture,
        ProcessDate: 'processdate',
        JobCd: client_enum_1.JobCd.Capture,
        AccessID: 'accessid',
        AccessPass: 'accesspass',
        Amount: '1234',
        Tax: '10',
        Currency: 'JPN',
        SiteID: 'siteid',
        MemberID: 'memberid',
        CardNo: 'cardno',
        Expire: 'expire',
        Method: client_enum_1.Method.Lump,
        PayTimes: '1',
        Forward: 'forward',
        TranID: 'tranid',
        Approve: 'approve',
        ClientField1: 'clientfield1',
        ClientField2: 'clientfield2',
        ClientField3: 'clientfield3',
        PayType: client_enum_1.PayType.Credit,
    };
    sinon.stub(multiTranable, 'post').resolves(expect);
    const args = {
        ShopID: 'shopid',
        ShopPass: 'shoppass',
        OrderID: 'orderid',
        PayType: client_enum_1.PayType.Credit,
    };
    const res = await multiTranable.searchTradeMulti(args);
    t.deepEqual(res, expect);
});
