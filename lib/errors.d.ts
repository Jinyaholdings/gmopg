export declare class BadRequest extends Error {
    errors: string[];
    errInfo: string[];
    response: any;
    constructor(message?: string);
    setResponse(obj: any): BadRequest;
    parseError(obj: any): BadRequest;
    toString(): string;
}
