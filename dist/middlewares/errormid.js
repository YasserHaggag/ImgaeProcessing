"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errormid = function (error, req, res, next) {
    var status = error.status || 500;
    var message = error.message || 'An error Occurred, please contact the support';
    res.status(status).json({ status: status, 'message': message });
    next();
};
exports.default = errormid;
