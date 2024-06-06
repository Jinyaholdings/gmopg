"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const nock = require("nock");
const client_enum_1 = require("./client.enum");
const client_1 = require("./client");
const baseUrl = 'https://x.y';
const client = new client_1.default({ baseUrl });
(0, ava_1.default)('.post is function', (t) => {
    t.is(typeof client.post, 'function');
});
(0, ava_1.default)('.post requests body correctly and send correct content-type header', async (t) => {
    nock(baseUrl, {
        reqheaders: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
        .post(/.*/, 'Foo=aaa&Bar=0&Baz=true&Ja=日本語&Type=0')
        .reply(200, 'AccessID=accessid&AccessPass=accesspass');
    const res = await client.post('/test1', {
        Foo: 'aaa',
        Bar: 0,
        Baz: true,
        Ja: '日本語',
        Type: client_enum_1.PayType.Credit
    });
    t.deepEqual(res, {
        AccessID: 'accessid',
        AccessPass: 'accesspass'
    });
});
(0, ava_1.default)('.post returns errors correctly', async (t) => {
    nock(baseUrl)
        .post(/.*/, 'Foo=aaa&Bar=0&Baz=true&Ja=日本語&Type=0')
        .reply(200, 'ErrCode=E01&ErrInfo=E01190001');
    try {
        await client.post('/test2', {
            Foo: 'aaa',
            Bar: 0,
            Baz: true,
            Ja: '日本語',
            Type: client_enum_1.PayType.Credit
        });
        t.fail();
    }
    catch (err) {
        t.deepEqual(err.errInfo, ["E01190001"]);
    }
});
(0, ava_1.default)('.post should not decode "+" chars', async (t) => {
    nock(baseUrl)
        .post(/.*/)
        .reply(200, 'TranID=123aZ&Token=abc123/+-_&StartUrl=https://x.y/z');
    const res = await client.post('/test1', { foo: '1' });
    t.deepEqual(res, {
        TranID: '123aZ',
        Token: 'abc123/+-_',
        StartUrl: 'https://x.y/z',
    });
});
(0, ava_1.default)('.post uses preprocessor to prevent from breaking 3ds2 redirect url', async (t) => {
    nock(baseUrl)
        .post(/.*/)
        .reply(200, 'ACS=2&RedirectUrl=https://manage.tds2gw.gmopg.jp/api/v2/brw/callback?transId=6e48e31f-2940-48e1-a702-ebba2f3373ee&t=dccc8a7ed85372c9accff576bff59b3a');
    const res = await client.post('/test1', {}, data => data.startsWith('ACS=2&RedirectUrl=')
        ? data.replace('&t=', '%26t=')
        : data);
    t.deepEqual(res, {
        ACS: '2',
        RedirectUrl: 'https://manage.tds2gw.gmopg.jp/api/v2/brw/callback?transId=6e48e31f-2940-48e1-a702-ebba2f3373ee&t=dccc8a7ed85372c9accff576bff59b3a',
    });
});
(0, ava_1.default)('client instance has deep merged config', async (t) => {
    const c = new client_1.default({
        baseUrl: 'http://localhost',
        http: {
            timeout: 1,
        }
    });
    t.deepEqual(c.config, {
        baseUrl: 'http://localhost',
        http: {
            timeout: 1,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json, text/plain, */*',
                'User-Agent': 'GMO PG Client: Unofficial'
            },
        }
    });
});
