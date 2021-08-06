"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20210617181925 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20210617181925 extends migrations_1.Migration {
    up() {
        return __awaiter(this, void 0, void 0, function* () {
            this.addSql('create table "user" ("id" serial primary key, "created_at" text not null, "updated_at" text not null, "username" text not null, "email" text not null, "salt" text not null, "password" text not null, "is_super_admin" bool not null default false);');
            this.addSql('alter table "user" add constraint "user_username_unique" unique ("username");');
            this.addSql('alter table "user" add constraint "user_email_unique" unique ("email");');
        });
    }
}
exports.Migration20210617181925 = Migration20210617181925;
//# sourceMappingURL=Migration20210617181925.js.map