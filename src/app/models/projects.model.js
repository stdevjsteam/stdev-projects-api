"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
exports.default = (function (sequalize) {
    var attributes = {
        id: {
            type: sequelize_1.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: sequelize_1.STRING,
            allowNull: false,
            unique: true
        },
        technology: {
            type: sequelize_1.STRING,
            allowNull: false
        },
        developers: {
            type: sequelize_1.STRING,
            allowNull: false
        }
    };
    return sequalize.define('Projects', attributes);
});
