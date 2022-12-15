"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
function controller(routePrefix) {
    return function (target) {
        for (let k in Object.getOwnPropertyNames(target.prototype)) {
            const routeHandler = target.prototype[k];
            const path = Reflect.getMetadata('path', target.prototype, k);
            if (path) {
                router.get(`${routePrefix}${path}`, routeHandler);
            }
        }
    };
}
exports.controller = controller;
