import Client from '../client';
import { Constructor } from '../util';
import { CancelCvsArgs, CancelCvsResult, EntryTranCvsArgs, EntryTranCvsResult, ExecTranCvsArgs, ExecTranCvsResult } from './cvsTranable.type';
declare const _default: <T extends Constructor<Client>>(Base: T) => {
    new (...args: any[]): {
        entryTranCvs(args: EntryTranCvsArgs): Promise<EntryTranCvsResult>;
        execTranCvs(args: ExecTranCvsArgs): Promise<ExecTranCvsResult>;
        cancelCvs(args: CancelCvsArgs): Promise<CancelCvsResult>;
        config: import("../config.type").Config;
        post<T_1, U>(pathname: string, data: T_1, preprocessor?: ((data: string) => string) | undefined): Promise<U>;
        isError(res: import("../client.type").UnknownParams): boolean;
    };
} & T;
export default _default;
