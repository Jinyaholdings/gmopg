import * as enums from './client.enum';
import Client from './client';
declare const _default: {
    new (...args: any[]): {
        defaultCardData(): import("./client.type").SiteArgs;
        saveCard(args: import("./client/cardable.type").SaveCardArgs): Promise<import("./client/cardable.type").SaveCardResult>;
        deleteCard(args: import("./client/cardable.type").DeleteCardArgs): Promise<import("./client/cardable.type").DeleteCardResult>;
        searchCard(args: import("./client/cardable.type").SearchCardArgs): Promise<import("./client/cardable.type").SearchCardResult[]>;
        searchCardDetail(args: import("./client/cardable.type").SearchCardDetailArgs): Promise<import("./client/cardable.type").SearchCardDetailResult[]>;
        config: import("./config.type").Config;
        post<T, U>(pathname: string, data: T, preprocessor?: (data: string) => string): Promise<U>;
        isError(res: import("./client.type").UnknownParams): boolean;
    };
} & {
    new (...args: any[]): {
        entryTranCvs(args: import("./client/cvsTranable.type").EntryTranCvsArgs): Promise<import("./client/cvsTranable.type").EntryTranCvsResult>;
        execTranCvs(args: import("./client/cvsTranable.type").ExecTranCvsArgs): Promise<import("./client/cvsTranable.type").ExecTranCvsResult>;
        cancelCvs(args: import("./client/cvsTranable.type").CancelCvsArgs): Promise<import("./client/cvsTranable.type").CancelCvsResult>;
        config: import("./config.type").Config;
        post<T, U>(pathname: string, data: T, preprocessor?: (data: string) => string): Promise<U>;
        isError(res: import("./client.type").UnknownParams): boolean;
    };
} & {
    new (...args: any[]): {
        defaultMemberData(): import("./client.type").SiteArgs;
        saveMember(args: import("./client/memberable.type").SaveMemberArgs): Promise<import("./client/memberable.type").SaveMemberResult>;
        updateMember(args: import("./client/memberable.type").UpdateMemberArgs): Promise<import("./client/memberable.type").UpdateMemberResult>;
        deleteMember(args: import("./client/memberable.type").DeleteMemberArgs): Promise<import("./client/memberable.type").DeleteMemberResult>;
        searchMember(args: import("./client/memberable.type").SearchMemberArgs): Promise<import("./client/memberable.type").SearchMemberResult | null>;
        config: import("./config.type").Config;
        post<T, U>(pathname: string, data: T, preprocessor?: (data: string) => string): Promise<U>;
        isError(res: import("./client.type").UnknownParams): boolean;
    };
} & {
    new (...args: any[]): {
        searchTradeMulti<R extends import("./client/multiTranable.type").SearchTradeMultiCardResult | import("./client/multiTranable.type").SearchTradeMultiCvsResult>(args: import("./client/multiTranable.type").SearchTradeMultiArgs): Promise<R>;
        config: import("./config.type").Config;
        post<T, U>(pathname: string, data: T, preprocessor?: (data: string) => string): Promise<U>;
        isError(res: import("./client.type").UnknownParams): boolean;
    };
} & {
    new (...args: any[]): {
        secureTran2(args: import("./client/tranableTds2.type").SecureTran2Args): Promise<import("./client/tranableTds2.type").SecureTran2Result>;
        config: import("./config.type").Config;
        post<T, U>(pathname: string, data: T, preprocessor?: (data: string) => string): Promise<U>;
        isError(res: import("./client.type").UnknownParams): boolean;
    };
} & {
    new (...args: any[]): {
        entryTran(args: import("./client/tranable.type").EntryTranArgs): Promise<import("./client/tranable.type").EntryTranResult>;
        execTran(args: import("./client/tranable.type").ExecTranArgs): Promise<import("./client/tranable.type").ExecTranResult>;
        alterTran(args: import("./client/tranable.type").AlterTranArgs): Promise<import("./client/tranable.type").AlterTranResult>;
        searchTrade(args: import("./client/tranable.type").SearchTradeArgs): Promise<import("./client/tranable.type").SearchTradeResult>;
        changeTran(args: import("./client/tranable.type").ChangeTranArgs): Promise<import("./client/tranable.type").ChangeTranResult>;
        config: import("./config.type").Config;
        post<T, U>(pathname: string, data: T, preprocessor?: (data: string) => string): Promise<U>;
        isError(res: import("./client.type").UnknownParams): boolean;
    };
} & typeof Client;
export default _default;
export declare function GENERATE_MEMBER_ID(key: string): string;
export { enums as ENUMS };
export * from './config.type';
export * from './client.type';
export * from './client.enum';
export * from './client/memberable.type';
export * from './client/cardable.type';
export * from './client/tranable.type';
export * from './client/tranableTds2.type';
export * from './client/cvsTranable.type';
export * from './client/multiTranable.type';
