"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
var projects_model_1 = require("../models/projects.model");
var Database = /** @class */ (function () {
    function Database() {
        var _this = this;
        this.env = process.env.NODE_ENV || "development";
        this.config = require("../../../db-config.json")[this.env];
        this.db = {};
        this.sequelize = new Sequelize(process.env.DATABASE_URL || process.env.DATABSE_CONNECTION_URI, {
            "dialect": "postgres",
            "operatorsAliases": false
        });
        this.db = {
            sequelize: this.sequelize,
            Sequelize: Sequelize,
            Projects: projects_model_1.default(this.sequelize)
        };
        Object.values(this.db).forEach(function (model) {
            if (model.associate) {
                model.associate(_this.db);
            }
        });
    }
    return Database;
}());
exports.database = new Database();
