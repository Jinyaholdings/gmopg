"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallbackType = exports.TdRequired = exports.Tds2Type = exports.TdFlag = exports.CvsCode = exports.DefaultFlag = exports.SeqMode = exports.JobCd = exports.Status = exports.Method = exports.PayType = void 0;
var PayType;
(function (PayType) {
    PayType["Cash"] = "Z";
    PayType["Credit"] = "0";
    PayType["Suica"] = "1";
    PayType["Edy"] = "2";
    PayType["Cvs"] = "3";
    PayType["DirectDebit"] = "28";
})(PayType || (exports.PayType = PayType = {}));
var Method;
(function (Method) {
    Method["Lump"] = "1";
    Method["Installment"] = "2";
    Method["BonusLump"] = "3";
    Method["Revolving"] = "4";
    Method["BonusInstallment"] = "5";
})(Method || (exports.Method = Method = {}));
var Status;
(function (Status) {
    Status["Unprocessed"] = "UNPROCESSED";
    Status["Authenticated"] = "AUTHENTICATED";
    Status["Check"] = "CHECK";
    Status["Capture"] = "CAPTURE";
    Status["Auth"] = "AUTH";
    Status["Sales"] = "SALES";
    Status["Void"] = "VOID";
    Status["Return"] = "RETURN";
    Status["Returnx"] = "RETURNX";
    Status["Sauth"] = "SAUTH";
    Status["Reqsuccess"] = "REQSUCCESS";
    Status["Paysuccess"] = "PAYSUCCESS";
    Status["Payfail"] = "PAYFAIL";
    Status["Expired"] = "EXPIRED";
    Status["Cancel"] = "CANCEL";
})(Status || (exports.Status = Status = {}));
var JobCd;
(function (JobCd) {
    JobCd["Check"] = "CHECK";
    JobCd["Capture"] = "CAPTURE";
    JobCd["Auth"] = "AUTH";
    JobCd["Sales"] = "SALES";
    JobCd["Void"] = "VOID";
    JobCd["Return"] = "RETURN";
    JobCd["Returnx"] = "RETURNX";
    JobCd["Sauth"] = "SAUTH";
})(JobCd || (exports.JobCd = JobCd = {}));
var SeqMode;
(function (SeqMode) {
    SeqMode["Logic"] = "0";
    SeqMode["Physics"] = "1";
})(SeqMode || (exports.SeqMode = SeqMode = {}));
var DefaultFlag;
(function (DefaultFlag) {
    DefaultFlag["BillingObject"] = "0";
    DefaultFlag["NotSubjectToCharge"] = "1";
})(DefaultFlag || (exports.DefaultFlag = DefaultFlag = {}));
var CvsCode;
(function (CvsCode) {
    CvsCode["_Lawson"] = "00001";
    CvsCode["_FamilyMart"] = "00002";
    CvsCode["_Sunkus"] = "00003";
    CvsCode["_CircleK"] = "00004";
    CvsCode["_MiniStop"] = "00005";
    CvsCode["_DailyYamazaki"] = "00006";
    CvsCode["_SeicoMart"] = "00008";
    CvsCode["Lawson"] = "10001";
    CvsCode["FamilyMart"] = "10002";
    CvsCode["Sunkus"] = "10003";
    CvsCode["CircleK"] = "10004";
    CvsCode["MiniStop"] = "10005";
    CvsCode["SevenEleven"] = "00007";
    CvsCode["SeicoMart"] = "10008";
})(CvsCode || (exports.CvsCode = CvsCode = {}));
var TdFlag;
(function (TdFlag) {
    TdFlag["Tds2"] = "2";
})(TdFlag || (exports.TdFlag = TdFlag = {}));
var Tds2Type;
(function (Tds2Type) {
    Tds2Type["AuthenticateWithTds1"] = "1";
    Tds2Type["ProcessingEndsAsAnError"] = "2";
    Tds2Type["NormalAuthorization"] = "3";
})(Tds2Type || (exports.Tds2Type = Tds2Type = {}));
var TdRequired;
(function (TdRequired) {
    TdRequired["FollowContract"] = "0";
    TdRequired["Required"] = "1";
    TdRequired["NotRequired"] = "2";
})(TdRequired || (exports.TdRequired = TdRequired = {}));
var CallbackType;
(function (CallbackType) {
    CallbackType["Post"] = "1";
    CallbackType["Direct"] = "2";
    CallbackType["Get"] = "3";
})(CallbackType || (exports.CallbackType = CallbackType = {}));
