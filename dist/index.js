"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TryCatch = exports.errorMiddleware = exports.ErrorHandler = void 0;
// src/index.ts
const ErrorHandler_1 = __importDefault(require("./ErrorHandler"));
exports.ErrorHandler = ErrorHandler_1.default;
const middleware_1 = require("./middleware");
Object.defineProperty(exports, "errorMiddleware", { enumerable: true, get: function () { return middleware_1.errorMiddleware; } });
Object.defineProperty(exports, "TryCatch", { enumerable: true, get: function () { return middleware_1.TryCatch; } });
