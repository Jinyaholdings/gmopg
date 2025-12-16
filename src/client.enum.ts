export enum PayType {
  Cash = 'Z',
  Credit = '0',
  Suica = '1',
  Edy = '2',
  Cvs = '3',
  DirectDebit = '28',
}

export enum Method {
  Lump = '1',
  Installment = '2',
  BonusLump = '3',
  Revolving = '4',
  BonusInstallment = '5',
}

export enum Status {
  Unprocessed = 'UNPROCESSED',
  Authenticated = 'AUTHENTICATED',
  Check = 'CHECK',
  Capture = 'CAPTURE',
  Auth = 'AUTH',
  Sales = 'SALES',
  Void = 'VOID',
  Return = 'RETURN',
  Returnx = 'RETURNX',
  Sauth = 'SAUTH',
  Reqsuccess = 'REQSUCCESS',
  Paysuccess = 'PAYSUCCESS',
  Payfail = 'PAYFAIL',
  Expired = 'EXPIRED',
  Cancel = 'CANCEL',
}

export enum JobCd {
  /**
   * @deprecated since v6.1.0. Legacy API values will be removed in future version
   * Check/Void/Return/Returnx/Sauth: Not supported in new API
   */
  Check = 'CHECK',
  Void = 'VOID',
  Return = 'RETURN',
  Returnx = 'RETURNX',
  Sauth = 'SAUTH',

  Capture = 'CAPTURE',
  Auth = 'AUTH',
  Sales = 'SALES',
  Cancel = 'CANCEL',
}

export enum SeqMode {
  Logic = '0',
  Physics = '1',
}

export enum DefaultFlag {
  BillingObject = '0',
  NotSubjectToCharge = '1',
}

export enum CvsCode {
  _Lawson = '00001',
  _FamilyMart = '00002',
  _Sunkus = '00003',
  _CircleK = '00004',
  _MiniStop = '00005',
  _DailyYamazaki = '00006',
  _SeicoMart = '00008',
  Lawson = '10001',
  FamilyMart = '10002',
  Sunkus = '10003',
  CircleK = '10004',
  MiniStop = '10005',
  SevenEleven = '00007',
  SeicoMart = '10008',
}

export enum TdFlag {
  Tds2 = '2',
}

export enum Tds2Type {
  AuthenticateWithTds1 = '1',
  ProcessingEndsAsAnError = '2',
  NormalAuthorization = '3',
}

export enum TdRequired {
  FollowContract = '0',
  Required = '1',
  NotRequired = '2',
}

export enum CallbackType {
  Post = '1',
  Direct = '2',
  Get = '3',
}
