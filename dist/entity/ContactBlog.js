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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactBlog = void 0;
const typeorm_1 = require("typeorm");
let ContactBlog = class ContactBlog {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ContactBlog.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ContactBlog.prototype, "correo", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ContactBlog.prototype, "fecha", void 0);
ContactBlog = __decorate([
    typeorm_1.Entity()
], ContactBlog);
exports.ContactBlog = ContactBlog;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFjdEJsb2cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZW50aXR5L0NvbnRhY3RCbG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHFDQUFnRTtBQUdoRSxJQUFhLFdBQVcsR0FBeEIsTUFBYSxXQUFXO0NBV3ZCLENBQUE7QUFSRztJQURDLGdDQUFzQixFQUFFOzt1Q0FDZDtBQUdYO0lBREMsZ0JBQU0sRUFBRTs7MkNBQ007QUFHZjtJQURDLGdCQUFNLEVBQUU7OzBDQUNLO0FBVEwsV0FBVztJQUR2QixnQkFBTSxFQUFFO0dBQ0ksV0FBVyxDQVd2QjtBQVhZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uLCBFbnRpdHksIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4gfSBmcm9tICd0eXBlb3JtJ1xyXG5cclxuQEVudGl0eSgpXHJcbmV4cG9ydCBjbGFzcyBDb250YWN0QmxvZyB7XHJcblxyXG4gICAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oKVxyXG4gICAgaWQ6IG51bWJlcjtcclxuXHJcbiAgICBAQ29sdW1uKClcclxuICAgIGNvcnJlbzogc3RyaW5nOyBcclxuXHJcbiAgICBAQ29sdW1uKClcclxuICAgIGZlY2hhOiBzdHJpbmc7XHJcblxyXG59Il19