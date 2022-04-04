"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var imageResize_1 = __importDefault(require("./api/imageResize"));
var routes = express_1.default.Router();
routes.use('/imageResize', imageResize_1.default);
routes.get('/', function (req, res) {
    res.json({ Message: 'Main API route' });
});
exports.default = routes;
