import Client from '../client';
import { Constructor } from '../util';
import { SiteArgs } from '../client.type';
import { DeleteMemberArgs, DeleteMemberResult, SaveMemberArgs, SaveMemberResult, SearchMemberArgs, SearchMemberResult, UpdateMemberArgs, UpdateMemberResult } from './memberable.type';
declare const _default: <T extends Constructor<Client>>(Base: T) => {
    new (...args: any[]): {
        defaultMemberData(): SiteArgs;
        saveMember(args: SaveMemberArgs): Promise<SaveMemberResult>;
        updateMember(args: UpdateMemberArgs): Promise<UpdateMemberResult>;
        deleteMember(args: DeleteMemberArgs): Promise<DeleteMemberResult>;
        searchMember(args: SearchMemberArgs): Promise<SearchMemberResult | null>;
        config: import("../config.type").Config;
        post<T_1, U>(pathname: string, data: T_1, preprocessor?: ((data: string) => string) | undefined): Promise<U>;
        isError(res: import("../client.type").UnknownParams): boolean;
    };
} & T;
export default _default;
