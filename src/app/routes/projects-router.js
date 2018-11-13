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
var projects_controller_1 = require("../controllers/projects.controller");
var ProjectsRouter = /** @class */ (function (_super) {
    __extends(ProjectsRouter, _super);
    function ProjectsRouter() {
        return _super.call(this) || this;
    }
    ProjectsRouter.prototype.init = function () {
        this.projectsController = new projects_controller_1.ProjectsController();
    };
    ProjectsRouter.prototype.route = function () {
        this.router.post('/', this.projectsController.addProject.bind(this.projectsController)); // Create
        this.router.get('/', this.projectsController.getProjects.bind(this.projectsController)); // Read
        // this.router.put('/',       this.projectsController.getProjects.bind(this.projectsController));    // Update
        this.router.delete('/:id', this.projectsController.removeProject.bind(this.projectsController)); // Delete
    };
    return ProjectsRouter;
}(routing_1.Routing));
exports.ProjectsRouter = ProjectsRouter;
