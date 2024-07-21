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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TryCatch = exports.errorMiddleware = void 0;
const ErrorHandler_1 = __importDefault(require("./ErrorHandler"));
const errorMiddleware = (err, req, res, next) => {
    console.log(err);
    err.message || (err.message = "Internal Server Error");
    err.statusCode || (err.statusCode = 500);
    if (err.name === "CastError") {
        err = new ErrorHandler_1.default("Invalid Id", 400);
    }
    res.status(err.statusCode).json({
        success: false,
        error: err.message,
    });
};
exports.errorMiddleware = errorMiddleware;
const TryCatch = (func) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield func(req, res, next);
        }
        catch (err) {
            console.log(err);
            next(err);
        }
    });
};
exports.TryCatch = TryCatch;
