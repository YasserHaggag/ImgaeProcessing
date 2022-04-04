"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var errormid_1 = __importDefault(require("./middlewares/errormid"));
var routes_1 = __importDefault(require("./routes"));
var app = (0, express_1.default)();
var port = 3000;
app.use('/api', routes_1.default);
app.use(errormid_1.default);
app.listen(port, function () {
    console.log("Server started at localhost: ".concat(port));
});
exports.default = app;
