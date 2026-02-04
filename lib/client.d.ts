import { Config } from './config.type';
import { UnknownParams } from './client.type';
export default class Client {
    config: Config;
    constructor(config?: Config);
    post<T, U>(pathname: string, data: T, preprocessor?: (data: string) => string): Promise<U>;
    isError(res: UnknownParams): boolean;
}
