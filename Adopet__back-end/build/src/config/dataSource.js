"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
var typeorm_1 = require("typeorm");
var PetEntity_1 = __importDefault(require("../entities/PetEntity"));
exports.AppDataSource = new typeorm_1.DataSource({
    type: "sqlite",
    database: "./src/config/database.sqlite",
    entities: [PetEntity_1.default],
    synchronize: true
});
