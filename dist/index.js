"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = void 0;
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var app = (0, express_1.default)();
var port = 3000;
app.use('/api', routes_1.default);
app.get('/api', function (req, res) {
    res.json({ "Message": "Hello the bellow is your answer", "Answer": ["This is the number that you'll get : ".concat(sum(3, 7)), sum(9, 156)] });
});
app.listen(port, function () {
    console.log("Server started at localhost: ".concat(port));
});
exports.default = app;
function sum(x, y) {
    return x + y;
}
exports.sum = sum;
