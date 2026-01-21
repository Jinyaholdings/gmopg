"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const errors_1 = require("./errors");
(0, ava_1.default)('new returns Error instance', (t) => {
    t.true(new errors_1.BadRequest() instanceof errors_1.BadRequest);
});
(0, ava_1.default)('variables is message as instance', (t) => {
    const err = new errors_1.BadRequest('yo');
    t.is(err.message, 'yo');
});
(0, ava_1.default)('.parseError returns ErrInfo as array', (t) => {
    const err = new errors_1.BadRequest().parseError({ ErrInfo: 'NC1000009|N0C030G96' });
    t.is(err.errors[0], '決済NG');
    t.is(err.errors[1], 'カード会社にて受付を拒否しました。');
    t.is(err.errInfo[0], 'NC1000009');
    t.is(err.errInfo[1], 'N0C030G96');
});
(0, ava_1.default)('.parseError returns unique ErrInfos', (t) => {
    const err = new errors_1.BadRequest().parseError({ ErrInfo: 'E61030001|E61030001' });
    t.deepEqual(err.errors, ['加盟店設定エラー/決済を中止して、問い吅わせにて設定状況を確認して下さい。']);
    t.deepEqual(err.errInfo, ['E61030001']);
});
