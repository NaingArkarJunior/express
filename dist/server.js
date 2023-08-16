"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const DBAccessor_1 = require("./DBAccessor");
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const utils_1 = require("./utils");
exports.app = (0, express_1.default)();
const APP_PASSWORD = "@token";
exports.app.use((0, cors_1.default)());
exports.app.use(body_parser_1.default.json());
exports.app.use(body_parser_1.default.urlencoded({ extended: true }));
exports.app.listen(8000, () => {
    console.log("server start...");
});
exports.app.use(express_1.default.static('public'));
exports.app.get('/login', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, '../public/index.html'));
});
exports.app.get('/register', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, '../public/register.html'));
});
exports.app.get('/rates', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, '../public/rates.html'));
});
exports.app.get("/rates/last", (req, res) => {
    (0, DBAccessor_1.getRates)((err, data) => {
        if (data) {
            let resData = data[0];
            resData.rates = JSON.parse(resData.rates);
            resData.currency = "MMK";
            return res.send((0, utils_1.resSuccess)(resData));
        }
        else {
            return res.send((0, utils_1.resFail)(err));
        }
    });
});
