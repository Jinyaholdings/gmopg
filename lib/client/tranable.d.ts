import Client from '../client';
import { Constructor } from '../util';
import { AlterTranArgs, AlterTranResult, ChangeTranArgs, ChangeTranResult, EntryTranArgs, EntryTranResult, ExecTranArgs, ExecTranResult, SearchTradeArgs, SearchTradeResult } from './tranable.type';
declare const _default: <T extends Constructor<Client>>(Base: T) => {
    new (...args: any[]): {
        entryTran(args: EntryTranArgs): Promise<EntryTranResult>;
        execTran(args: ExecTranArgs): Promise<ExecTranResult>;
        alterTran(args: AlterTranArgs): Promise<AlterTranResult>;
        searchTrade(args: SearchTradeArgs): Promise<SearchTradeResult>;
        changeTran(args: ChangeTranArgs): Promise<ChangeTranResult>;
        config: import("../config.type").Config;
        post<T_1, U>(pathname: string, data: T_1, preprocessor?: ((data: string) => string) | undefined): Promise<U>;
        isError(res: import("../client.type").UnknownParams): boolean;
    };
} & T;
export default _default;
