"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var EnumEspecie_1 = __importDefault(require("../Enum/EnumEspecie"));
var PetEntity_1 = __importDefault(require("../entities/PetEntity"));
// let listaDePets: Array<tipoPet> = [];
var id = 0;
function geraId() {
    id = id + 1;
    return id;
}
var PetController = /** @class */ (function () {
    function PetController(repository) {
        this.repository = repository;
    }
    PetController.prototype.criaPet = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, nome, adotado, preco, dataDeNascimento, especie, novoPet;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, nome = _a.nome, adotado = _a.adotado, preco = _a.preco, dataDeNascimento = _a.dataDeNascimento, especie = _a.especie;
                        if (!Object.values(EnumEspecie_1.default).includes(especie)) {
                            return [2 /*return*/, res.status(404).json({ erro: "Espécie inválida" })];
                        }
                        novoPet = new PetEntity_1.default(nome, especie, dataDeNascimento, preco, adotado);
                        return [4 /*yield*/, this.repository.criaPet(novoPet)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/, res.status(200).json(novoPet)];
                }
            });
        });
    };
    PetController.prototype.listaPets = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var listaDePets;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.listaPet()];
                    case 1:
                        listaDePets = _a.sent();
                        return [2 /*return*/, res.status(200).json(listaDePets)];
                }
            });
        });
    };
    PetController.prototype.atualizaPet = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, _a, success, message;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, this.repository.atualizaPet(Number(id), req.body)];
                    case 1:
                        _a = _b.sent(), success = _a.success, message = _a.message;
                        if (!success) {
                            return [2 /*return*/, res.status(404).json({ message: message })];
                        }
                        return [2 /*return*/, res.sendStatus(204)];
                }
            });
        });
    };
    PetController.prototype.deletaPet = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, _a, success, message;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, this.repository.deletaPet(Number(id))];
                    case 1:
                        _a = _b.sent(), success = _a.success, message = _a.message;
                        if (!success) {
                            return [2 /*return*/, res.status(404).json({ message: message })];
                        }
                        return [2 /*return*/, res.sendStatus(204)];
                }
            });
        });
    };
    return PetController;
}());
exports.default = PetController;
