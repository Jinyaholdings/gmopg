"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const sinon = require("sinon");
const client_1 = require("../client");
const client_enum_1 = require("../client.enum");
const tranable_1 = require("./tranable");
const Tranable = (0, tranable_1.default)(client_1.default);
const tranable = new Tranable();
ava_1.default.afterEach(() => {
    sinon.restore();
});
(0, ava_1.default)('.entryTran calls API and returns response', async (t) => {
    const expect = {
        AccessID: 'accessid',
        AccessPass: 'accesspass',
    };
    sinon.stub(tranable, 'post').resolves(expect);
    const args = {
        SiteID: 'siteid',
        SitePass: 'sitepass',
        MemberID: 'memberid',
        ShopID: 'shopid',
        ShopPass: 'shoppass',
        OrderID: 'orderid',
        JobCd: client_enum_1.JobCd.Check,
        Amount: 1234,
    };
    const res = await tranable.entryTran(args);
    t.deepEqual(res, expect);
});
(0, ava_1.default)('.execTran calls API and returns response', async (t) => {
    const expect = {
        ACS: 'acs',
        OrderID: 'orderid',
        Forward: 'forward',
        Method: client_enum_1.Method.Lump,
        PayTimes: '1',
        Approve: 'approve',
        TranID: 'tranid',
        TranDate: 'trandate',
        CheckString: 'checkstring',
        ClientField1: 'clientfield1',
        ClientField2: 'clientfield2',
        ClientField3: 'clientfield3',
    };
    sinon.stub(tranable, 'post').resolves(expect);
    const args = {
        AccessID: 'accessid',
        AccessPass: 'accesspass',
        OrderID: 'orderid',
        Method: client_enum_1.Method.Lump,
        PayTimes: 1,
        CardNo: 'cardno',
        Expire: 'expire',
        SecurityCode: '123',
    };
    const res = await tranable.execTran(args);
    t.deepEqual(res, expect);
});
(0, ava_1.default)('.alterTran calls API and returns response', async (t) => {
    const expect = {
        AccessID: 'accessid',
        AccessPass: 'accesspass',
        Forward: 'forward',
        Approve: 'approve',
        TranID: 'tranid',
        TranDate: 'trandate',
    };
    sinon.stub(tranable, 'post').resolves(expect);
    const args = {
        ShopID: 'shopid',
        ShopPass: 'shoppass',
        AccessID: 'accessid',
        AccessPass: 'accesspass',
        JobCd: client_enum_1.JobCd.Check,
    };
    const res = await tranable.alterTran(args);
    t.deepEqual(res, expect);
});
(0, ava_1.default)('.searchTrade calls API and returns response', async (t) => {
    const expect = {
        OrderID: 'orderid',
        Status: client_enum_1.Status.Check,
        ProcessDate: 'processdate',
        JobCd: client_enum_1.JobCd.Check,
        AccessID: 'accessid',
        AccessPass: 'accesspass',
        ItemCode: 'itemcode',
        Amount: '1234',
        Tax: '10',
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
    };
    sinon.stub(tranable, 'post').resolves(expect);
    const args = {
        ShopID: 'shopid',
        ShopPass: 'shoppass',
        OrderID: 'orderid',
    };
    const res = await tranable.searchTrade(args);
    t.deepEqual(res, expect);
});
(0, ava_1.default)('.changeTran calls API and returns response', async (t) => {
    const expect = {
        AccessID: 'accessid',
        AccessPass: 'accesspass',
        Forward: 'forward',
        Approve: 'approve',
        TranID: 'tranid',
        TranDate: 'trandate',
    };
    sinon.stub(tranable, 'post').resolves(expect);
    const args = {
        ShopID: 'shopid',
        ShopPass: 'shoppass',
        AccessID: 'accessid',
        AccessPass: 'accesspass',
        JobCd: client_enum_1.JobCd.Check,
        Amount: 1234,
    };
    const res = await tranable.changeTran(args);
    t.deepEqual(res, expect);
});
