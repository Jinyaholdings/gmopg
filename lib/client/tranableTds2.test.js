"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const sinon = require("sinon");
const client_1 = require("../client");
const client_enum_1 = require("../client.enum");
const tranableTds2_1 = require("./tranableTds2");
const TranableTds2 = (0, tranableTds2_1.default)(client_1.default);
const tranableTds2 = new TranableTds2();
ava_1.default.afterEach(() => {
    sinon.restore();
});
(0, ava_1.default)('.secureTran2 calls API and returns response', async (t) => {
    const expect = {
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
    sinon.stub(tranableTds2, 'post').resolves(expect);
    const args = {
        AccessID: 'accessid',
        AccessPass: 'accesspass',
    };
    const res = await tranableTds2.secureTran2(args);
    t.deepEqual(res, expect);
});
