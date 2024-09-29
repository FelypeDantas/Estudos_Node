"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var petsRoutes_1 = __importDefault(require("../routes/petsRoutes"));
var router = function (app) {
    app.use("/pets", petsRoutes_1.default);
};
exports.default = router;
