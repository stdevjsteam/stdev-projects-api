"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Routing = /** @class */ (function () {
    function Routing() {
        this.router = express_1.Router();
        this.init();
        this.route();
    }
    return Routing;
}());
exports.Routing = Routing;
