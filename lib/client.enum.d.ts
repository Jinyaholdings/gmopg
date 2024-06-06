export declare enum PayType {
    Cash = "Z",
    Credit = "0",
    Suica = "1",
    Edy = "2",
    Cvs = "3",
    DirectDebit = "28"
}
export declare enum Method {
    Lump = "1",
    Installment = "2",
    BonusLump = "3",
    Revolving = "4",
    BonusInstallment = "5"
}
export declare enum Status {
    Unprocessed = "UNPROCESSED",
    Authenticated = "AUTHENTICATED",
    Check = "CHECK",
    Capture = "CAPTURE",
    Auth = "AUTH",
    Sales = "SALES",
    Void = "VOID",
    Return = "RETURN",
    Returnx = "RETURNX",
    Sauth = "SAUTH",
    Reqsuccess = "REQSUCCESS",
    Paysuccess = "PAYSUCCESS",
    Payfail = "PAYFAIL",
    Expired = "EXPIRED",
    Cancel = "CANCEL"
}
export declare enum JobCd {
    Check = "CHECK",
    Capture = "CAPTURE",
    Auth = "AUTH",
    Sales = "SALES",
    Void = "VOID",
    Return = "RETURN",
    Returnx = "RETURNX",
    Sauth = "SAUTH"
}
export declare enum SeqMode {
    Logic = "0",
    Physics = "1"
}
export declare enum DefaultFlag {
    BillingObject = "0",
    NotSubjectToCharge = "1"
}
export declare enum CvsCode {
    _Lawson = "00001",
    _FamilyMart = "00002",
    _Sunkus = "00003",
    _CircleK = "00004",
    _MiniStop = "00005",
    _DailyYamazaki = "00006",
    _SeicoMart = "00008",
    Lawson = "10001",
    FamilyMart = "10002",
    Sunkus = "10003",
    CircleK = "10004",
    MiniStop = "10005",
    SevenEleven = "00007",
    SeicoMart = "10008"
}
export declare enum TdFlag {
    Tds2 = "2"
}
export declare enum Tds2Type {
    AuthenticateWithTds1 = "1",
    ProcessingEndsAsAnError = "2",
    NormalAuthorization = "3"
}
export declare enum TdRequired {
    FollowContract = "0",
    Required = "1",
    NotRequired = "2"
}
export declare enum CallbackType {
    Post = "1",
    Direct = "2",
    Get = "3"
}
