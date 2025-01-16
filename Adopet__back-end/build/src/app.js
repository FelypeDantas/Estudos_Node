"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
require("reflect-metadata");
var dataSource_1 = require("./config/dataSource");
var app = (0, express_1.default)();
app.use(express_1.default.json());
(0, routes_1.default)(app);
dataSource_1.AppDataSource.initialize().then(function () {
    console.log("Banco de dados conectado");
}).catch(function (err) {
    console.log(err);
});
exports.default = app;
