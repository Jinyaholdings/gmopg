"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const sinon = require("sinon");
const client_1 = require("../client");
const memberable_1 = require("./memberable");
const Memberable = (0, memberable_1.default)(client_1.default);
const memberable = new Memberable();
ava_1.default.afterEach(() => {
    sinon.restore();
});
(0, ava_1.default)('.saveMember calls API and returns response', async (t) => {
    const expect = {
        MemberID: 'memberid',
    };
    sinon.stub(memberable, 'post').resolves(expect);
    const args = {
        SiteID: 'siteid',
        SitePass: 'sitepass',
        MemberID: 'memberid',
        MemberName: 'membername',
    };
    const res = await memberable.saveMember(args);
    t.deepEqual(res, expect);
});
(0, ava_1.default)('.updateMember calls API and returns response', async (t) => {
    const expect = {
        MemberID: 'memberid',
    };
    sinon.stub(memberable, 'post').resolves(expect);
    const args = {
        SiteID: 'siteid',
        SitePass: 'sitepass',
        MemberID: 'memberid',
        MemberName: 'membername',
    };
    const res = await memberable.updateMember(args);
    t.deepEqual(res, expect);
});
(0, ava_1.default)('.deleteMember calls API and returns response', async (t) => {
    const expect = {
        MemberID: 'memberid',
    };
    sinon.stub(memberable, 'post').resolves(expect);
    const args = {
        SiteID: 'siteid',
        SitePass: 'sitepass',
        MemberID: 'memberid',
    };
    const res = await memberable.deleteMember(args);
    t.deepEqual(res, expect);
});
(0, ava_1.default)('.searchMember calls API and returns response', async (t) => {
    const expect = {
        MemberID: 'memberid',
        MemberName: 'membername',
        DeleteFlag: '1',
    };
    sinon.stub(memberable, 'post').resolves(expect);
    const args = {
        SiteID: 'siteid',
        SitePass: 'sitepass',
        MemberID: 'memberid',
    };
    const res = await memberable.searchMember(args);
    t.deepEqual(res, expect);
});
