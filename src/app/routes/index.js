"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var routing_1 = require("./routing");
var projects_router_1 = require("./projects-router");
var Routes = /** @class */ (function (_super) {
    __extends(Routes, _super);
    function Routes() {
        return _super.call(this) || this;
    }
    Routes.prototype.init = function () {
        this.projectsRouter = new projects_router_1.ProjectsRouter();
    };
    Routes.prototype.route = function () {
        this.router.use('/projects/', this.projectsRouter.router);
    };
    return Routes;
}(routing_1.Routing));
exports.Routes = Routes;
