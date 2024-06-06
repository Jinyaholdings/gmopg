import Client from '../client';
import { Constructor } from '../util';
import { SecureTran2Args, SecureTran2Result } from './tranableTds2.type';
declare const _default: <T extends Constructor<Client>>(Base: T) => {
    new (...args: any[]): {
        secureTran2(args: SecureTran2Args): Promise<SecureTran2Result>;
        config: import("../config.type").Config;
        post<T_1, U>(pathname: string, data: T_1, preprocessor?: ((data: string) => string) | undefined): Promise<U>;
        isError(res: import("../client.type").UnknownParams): boolean;
    };
} & T;
export default _default;
