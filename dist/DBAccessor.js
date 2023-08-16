"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRates = exports.getRatesData = exports.createUser = exports.getUserLogin = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
function DBConnection() {
    return mysql2_1.default.createConnection({
        host: "localhost",
        user: "root",
        password: "admin",
        database: "exchange"
    });
}
const getUserLogin = (name, password, cb) => {
    DBConnection().execute('SELECT * FROM `users` WHERE `username`=? AND `password`=?', [name, password], function (err, results) {
        console.log(err, results);
        cb(err, results);
    });
};
exports.getUserLogin = getUserLogin;
const createUser = (name, user_name, password, permission_id, cb) => {
    DBConnection().execute("INSERT INTO `users` (`name`, `user_name`, `password`, `permission_id`) VALUES (?, ?, ?, ?)", [name, user_name, password, permission_id], function (err, result) {
        cb(err, result);
    });
};
exports.createUser = createUser;
const getRatesData = (cb) => {
    DBConnection().execute('SELECT * FROM `rates`', function (err, results) {
        cb(err, results);
    });
};
exports.getRatesData = getRatesData;
const getRates = (cb) => {
    DBConnection().execute('SELECT * FROM `currencies` ORDER BY `id` DESC LIMIT 1', function (err, results) {
        cb(err, results);
    });
};
exports.getRates = getRates;
