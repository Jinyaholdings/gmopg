import Client from '../client';
import { Constructor } from '../util';
import { SiteArgs } from '../client.type';
import { DeleteCardArgs, DeleteCardResult, SaveCardArgs, SaveCardResult, SearchCardArgs, SearchCardResult, SearchCardDetailArgs, SearchCardDetailResult } from './cardable.type';
declare const _default: <T extends Constructor<Client>>(Base: T) => {
    new (...args: any[]): {
        defaultCardData(): SiteArgs;
        saveCard(args: SaveCardArgs): Promise<SaveCardResult>;
        deleteCard(args: DeleteCardArgs): Promise<DeleteCardResult>;
        searchCard(args: SearchCardArgs): Promise<SearchCardResult[]>;
        searchCardDetail(args: SearchCardDetailArgs): Promise<SearchCardDetailResult[]>;
        config: import("../config.type").Config;
        post<T_1, U>(pathname: string, data: T_1, preprocessor?: ((data: string) => string) | undefined): Promise<U>;
        isError(res: import("../client.type").UnknownParams): boolean;
    };
} & T;
export default _default;
