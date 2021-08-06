"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userResolver = void 0;
const user_1 = require("./../entities/user");
const type_graphql_1 = require("type-graphql");
const crypto_1 = __importDefault(require("crypto"));
let InputFields = class InputFields {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], InputFields.prototype, "username", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], InputFields.prototype, "email", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], InputFields.prototype, "password", void 0);
InputFields = __decorate([
    type_graphql_1.InputType()
], InputFields);
let InputError = class InputError {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], InputError.prototype, "field", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], InputError.prototype, "message", void 0);
InputError = __decorate([
    type_graphql_1.ObjectType()
], InputError);
let UserResponse = class UserResponse {
};
__decorate([
    type_graphql_1.Field(() => [InputError], { nullable: true }),
    __metadata("design:type", Array)
], UserResponse.prototype, "errors", void 0);
__decorate([
    type_graphql_1.Field(() => user_1.User, { nullable: true }),
    __metadata("design:type", user_1.User)
], UserResponse.prototype, "user", void 0);
UserResponse = __decorate([
    type_graphql_1.ObjectType()
], UserResponse);
let userResolver = class userResolver {
    me() {
        return 'hello from user resolver';
    }
    register({ em }, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (options.username.length < 2) {
                return {
                    errors: [{
                            field: 'username',
                            message: 'username is too short'
                        }]
                };
            }
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!re.test(options.email)) {
                return {
                    errors: [{
                            field: 'email',
                            message: 'invalid email address'
                        }]
                };
            }
            if (options.password.length < 8) {
                return {
                    errors: [{
                            field: 'password',
                            message: "password length is too short"
                        }]
                };
            }
            const salt = crypto_1.default.randomBytes(16).toString('hex');
            const hashPass = crypto_1.default.pbkdf2Sync(options.password, salt, 10000, 64, 'sha512').toString('hex');
            const user = em.create(user_1.User, { username: options.username, password: hashPass, salt: salt, email: options.email });
            try {
                yield em.persistAndFlush(user);
            }
            catch (err) {
                if (err.code === '23505' && err.detail.includes('already exists')) {
                    if (err.detail.includes('username')) {
                        return {
                            errors: [{
                                    field: 'username',
                                    message: "username  already exit"
                                }]
                        };
                    }
                    else if (err.detail.includes('email')) {
                        return {
                            errors: [{
                                    field: 'email',
                                    message: "email already exit"
                                }]
                        };
                    }
                }
            }
            return {
                user
            };
        });
    }
};
__decorate([
    type_graphql_1.Query(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], userResolver.prototype, "me", null);
__decorate([
    type_graphql_1.Mutation(() => UserResponse),
    __param(0, type_graphql_1.Ctx()),
    __param(1, type_graphql_1.Arg('options')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, InputFields]),
    __metadata("design:returntype", Promise)
], userResolver.prototype, "register", null);
userResolver = __decorate([
    type_graphql_1.Resolver()
], userResolver);
exports.userResolver = userResolver;
//# sourceMappingURL=userResolver.js.map