"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const sinon = require("sinon");
const client_1 = require("../client");
const client_enum_1 = require("../client.enum");
const cvsTranable_1 = require("./cvsTranable");
const CvsTranable = (0, cvsTranable_1.default)(client_1.default);
const cvsTranable = new CvsTranable();
ava_1.default.afterEach(() => {
    sinon.restore();
});
(0, ava_1.default)('.entryTranCvs calls API and returns response', async (t) => {
    const expect = {
        AccessID: 'accessid',
        AccessPass: 'accesspass',
    };
    sinon.stub(cvsTranable, 'post').resolves(expect);
    const args = {
        ShopID: 'shopid',
        ShopPass: 'shoppass',
        OrderID: 'orderid',
        Amount: 1234,
        Tax: 123,
    };
    const res = await cvsTranable.entryTranCvs(args);
    t.deepEqual(res, expect);
});
(0, ava_1.default)('.execTranCvs calls API and returns response', async (t) => {
    const expect = {
        OrderID: 'orderid',
        Convenience: client_enum_1.CvsCode.Lawson,
        ConfNo: 'confno',
        ReceiptNo: 'receiptno',
        PaymentTerm: 'yyyyMMddHHmmss',
        TranDate: 'yyyyMMddHHmmss',
        CheckString: 'checkstring',
        ClientField1: 'clientfield1',
        ClientField2: 'clientfield2',
        ClientField3: 'clientfield3',
    };
    sinon.stub(cvsTranable, 'post').resolves(expect);
    const args = {
        AccessID: 'accessid',
        AccessPass: 'accesspass',
        OrderID: 'orderid',
        Convenience: client_enum_1.CvsCode.Lawson,
        CustomerName: '山田太郎',
        CustomerKana: 'ヤマダタロウ',
        TelNo: '09012341234',
        ReceiptsDisp11: 'contact info',
        ReceiptsDisp12: '09011112222',
        ReceiptsDisp13: '10:00-19:00',
    };
    const res = await cvsTranable.execTranCvs(args);
    t.deepEqual(res, expect);
});
(0, ava_1.default)('.cancelCvs calls API and returns response', async (t) => {
    const expect = {
        OrderID: 'orderid',
        Status: client_enum_1.Status.Cancel,
    };
    sinon.stub(cvsTranable, 'post').resolves(expect);
    const args = {
        ShopID: 'shopid',
        ShopPass: 'shoppass',
        AccessID: 'accessid',
        AccessPass: 'accesspass',
        OrderID: 'orderid',
    };
    const res = await cvsTranable.cancelCvs(args);
    t.deepEqual(res, expect);
});
