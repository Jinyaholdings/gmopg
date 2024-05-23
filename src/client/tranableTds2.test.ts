import test from 'ava'
import sinon = require('sinon')
import Client from '../client'
import { Method } from '../client.enum'
import WithTranableTds2 from './tranableTds2'
import { SecureTran2Result } from './tranableTds2.type'

const TranableTds2 = WithTranableTds2(Client)
const tranableTds2 = new TranableTds2()

test.afterEach(() => {
  sinon.restore()
})

test('.secureTran2 calls API and returns response', async t => {
  const expect: SecureTran2Result = {
    OrderID: 'orderid',
    Forward: 'forward',
    Method: Method.Lump,
    PayTimes: '1',
    Approve: 'approve',
    TranID: 'tranid',
    TranDate: 'trandate',
    CheckString: 'checkstring',
    ClientField1: 'clientfield1',
    ClientField2: 'clientfield2',
    ClientField3: 'clientfield3',
  }

  sinon.stub(tranableTds2, 'post').resolves(expect)

  const args = {
    AccessID: 'accessid',
    AccessPass: 'accesspass',
  }
  const res = await tranableTds2.secureTran2(args)

  t.deepEqual(res, expect)
})
