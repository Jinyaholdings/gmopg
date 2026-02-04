import { Method } from '../client.enum';
import { Result } from '../client.type';
export type SecureTran2Args = {
    AccessID: string;
    AccessPass: string;
};
export type SecureTran2Result = Result & {
    OrderID: string;
    Forward: string;
    Method: Method;
    PayTimes: string;
    Approve: string;
    TranID: string;
    TranDate: string;
    CheckString: string;
    ClientField1: string;
    ClientField2: string;
    ClientField3: string;
};
