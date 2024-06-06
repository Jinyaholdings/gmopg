"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const gmopg_1 = require("./gmopg");
let gmopg;
ava_1.default.beforeEach(() => {
    gmopg = new gmopg_1.default();
});
(0, ava_1.default)('new returns GMOPG instance', (t) => {
    t.true(gmopg instanceof gmopg_1.default);
});
(0, ava_1.default)('.ENUMS returns enum object', (t) => {
    t.deepEqual(Object.keys(gmopg_1.ENUMS), [
        'PayType',
        'Method',
        'Status',
        'JobCd',
        'SeqMode',
        'DefaultFlag',
        'CvsCode',
        'TdFlag',
        'Tds2Type',
        'TdRequired',
        'CallbackType',
    ]);
});
(0, ava_1.default)('.GENERATE_MEMBER_ID returns generated memberID', (t) => {
    const ID = (0, gmopg_1.GENERATE_MEMBER_ID)('key');
    t.regex(ID, /^key-\w{32}$/);
});
(0, ava_1.default)('.GENERATE_MEMBER_ID returns max 60 chars', (t) => {
    const ID = (0, gmopg_1.GENERATE_MEMBER_ID)('0123456789-0123456789-0123456789-0123456789');
    t.regex(ID, /^.{60}$/);
});
(0, ava_1.default)('.config returns IConfig', (t) => {
    const expect = {
        baseUrl: 'https://pt01.mul-pay.jp',
        http: {
            timeout: 180000,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json, text/plain, */*',
                'User-Agent': 'GMO PG Client: Unofficial'
            }
        }
    };
    t.deepEqual(gmopg.config, expect);
});
(0, ava_1.default)('.saveMember is function', (t) => {
    t.is(typeof gmopg.saveMember, 'function');
});
(0, ava_1.default)('.updateMember is function', (t) => {
    t.is(typeof gmopg.updateMember, 'function');
});
(0, ava_1.default)('.deleteMember is function', (t) => {
    t.is(typeof gmopg.deleteMember, 'function');
});
(0, ava_1.default)('.searchMember is function', (t) => {
    t.is(typeof gmopg.searchMember, 'function');
});
(0, ava_1.default)('.saveCard is function', (t) => {
    t.is(typeof gmopg.saveCard, 'function');
});
(0, ava_1.default)('.deleteCard is function', (t) => {
    t.is(typeof gmopg.deleteCard, 'function');
});
(0, ava_1.default)('.searchCard is function', (t) => {
    t.is(typeof gmopg.searchCard, 'function');
});
(0, ava_1.default)('.entryTran is function', (t) => {
    t.is(typeof gmopg.entryTran, 'function');
});
(0, ava_1.default)('.execTran is function', (t) => {
    t.is(typeof gmopg.execTran, 'function');
});
(0, ava_1.default)('.alterTran is function', (t) => {
    t.is(typeof gmopg.alterTran, 'function');
});
(0, ava_1.default)('.searchTrade is function', (t) => {
    t.is(typeof gmopg.searchTrade, 'function');
});
(0, ava_1.default)('.changeTran is function', (t) => {
    t.is(typeof gmopg.changeTran, 'function');
});
(0, ava_1.default)('.secureTran2 is function', (t) => {
    t.is(typeof gmopg.secureTran2, 'function');
});
(0, ava_1.default)('.entryTranCvs is function', (t) => {
    t.is(typeof gmopg.entryTranCvs, 'function');
});
(0, ava_1.default)('.execTranCvs is function', (t) => {
    t.is(typeof gmopg.execTranCvs, 'function');
});
(0, ava_1.default)('.cancelCvs is function', (t) => {
    t.is(typeof gmopg.cancelCvs, 'function');
});
(0, ava_1.default)('.searchTradeMulti is function', (t) => {
    t.is(typeof gmopg.searchTradeMulti, 'function');
});
(0, ava_1.default)('.post is function', (t) => {
    t.is(typeof gmopg.post, 'function');
});
