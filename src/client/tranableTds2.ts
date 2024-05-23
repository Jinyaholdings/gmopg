import Client from '../client'
import { Constructor } from '../util'
import {
  SecureTran2Args,
  SecureTran2Result,
} from './tranableTds2.type'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default <T extends Constructor<Client>>(Base: T) =>
  class extends Base {
    public async secureTran2(args: SecureTran2Args): Promise<SecureTran2Result> {
      const response = await this.post<SecureTran2Args, SecureTran2Result>('/payment/SecureTran2.idPass', args);
      return response;
    }
  }
