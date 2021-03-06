"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const post_1 = require("./entities/post");
const path_1 = __importDefault(require("path"));
const user_1 = require("./entities/user");
exports.default = {
    migrations: {
        path: path_1.default.join(__dirname, '/migrations'),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    dbName: constants_1.DB_NAME,
    entities: [post_1.Post, user_1.User],
    password: constants_1.DB_PASSWORD,
    type: 'postgresql',
    debug: !constants_1.__PROD__
};
//# sourceMappingURL=mikro-orm.config.js.map