"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resUnAuthoirize = exports.resNotFound = exports.validationFail = exports.resFail = exports.resCreateSuccess = exports.resSuccess = void 0;
function resSuccess(data) {
    return {
        status: 200,
        message: "Success",
        data: data
    };
}
exports.resSuccess = resSuccess;
function resCreateSuccess(data) {
    return {
        status: 200,
        message: "SuccessFully Created",
        data: data
    };
}
exports.resCreateSuccess = resCreateSuccess;
function resFail(error) {
    return {
        status: 500,
        message: "Internal Server Error",
        error: error
    };
}
exports.resFail = resFail;
function validationFail(error) {
    return {
        status: 400,
        message: "Invalid Request",
        error: error
    };
}
exports.validationFail = validationFail;
function resNotFound(error) {
    return {
        status: 404,
        message: "Empty Data or File not Found",
        error: error
    };
}
exports.resNotFound = resNotFound;
function resUnAuthoirize(error) {
    return {
        status: 403,
        message: "UnAuthorize",
        error: error
    };
}
exports.resUnAuthoirize = resUnAuthoirize;
