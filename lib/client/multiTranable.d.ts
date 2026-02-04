import Client from '../client';
import { Constructor } from '../util';
import { SearchTradeMultiArgs, SearchTradeMultiCardResult, SearchTradeMultiCvsResult } from './multiTranable.type';
declare const _default: <T extends Constructor<Client>>(Base: T) => {
    new (...args: any[]): {
        searchTradeMulti<R extends SearchTradeMultiCardResult | SearchTradeMultiCvsResult>(args: SearchTradeMultiArgs): Promise<R>;
        config: import("../config.type").Config;
        post<T_1, U>(pathname: string, data: T_1, preprocessor?: (data: string) => string): Promise<U>;
        isError(res: import("../client.type").UnknownParams): boolean;
    };
} & T;
export default _default;
