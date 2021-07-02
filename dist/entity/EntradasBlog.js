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
exports.EntradasBlog = void 0;
const typeorm_1 = require("typeorm");
let EntradasBlog = class EntradasBlog {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], EntradasBlog.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], EntradasBlog.prototype, "titulo", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], EntradasBlog.prototype, "urlImgPortada", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], EntradasBlog.prototype, "urlImgMiniatura", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], EntradasBlog.prototype, "categoria", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], EntradasBlog.prototype, "parrafo", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], EntradasBlog.prototype, "fecha", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], EntradasBlog.prototype, "firma", void 0);
__decorate([
    typeorm_1.Column('varchar', { default: '', nullable: false, length: 255 }),
    __metadata("design:type", String)
], EntradasBlog.prototype, "urlTitulo", void 0);
__decorate([
    typeorm_1.VersionColumn(),
    __metadata("design:type", Number)
], EntradasBlog.prototype, "masVistos", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 255, default: 0, nullable: false, }),
    __metadata("design:type", String)
], EntradasBlog.prototype, "uuid", void 0);
EntradasBlog = __decorate([
    typeorm_1.Entity()
], EntradasBlog);
exports.EntradasBlog = EntradasBlog;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50cmFkYXNCbG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2VudGl0eS9FbnRyYWRhc0Jsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEscUNBQStFO0FBRy9FLElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQVk7Q0FvQ3hCLENBQUE7QUFqQ0c7SUFEQyxnQ0FBc0IsRUFBRTs7d0NBQ2Q7QUFHWDtJQURDLGdCQUFNLEVBQUU7OzRDQUNNO0FBR2Y7SUFEQyxnQkFBTSxFQUFFOzttREFDYTtBQUd0QjtJQURDLGdCQUFNLEVBQUU7O3FEQUNlO0FBR3hCO0lBREMsZ0JBQU0sRUFBRTs7K0NBQ1M7QUFHbEI7SUFEQyxnQkFBTSxDQUFDLE1BQU0sQ0FBQzs7NkNBQ0M7QUFHaEI7SUFEQyxnQkFBTSxFQUFFOzsyQ0FDSTtBQUdiO0lBREMsZ0JBQU0sRUFBRTs7MkNBQ0k7QUFHYjtJQURDLGdCQUFNLENBQUMsU0FBUyxFQUFFLEVBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxHQUFHLEVBQUMsQ0FBQzs7K0NBQzdDO0FBS2pCO0lBREMsdUJBQWEsRUFBRTs7K0NBQ0M7QUFHakI7SUFEQyxnQkFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssR0FBRyxDQUFDOzswQ0FDekQ7QUFuQ0gsWUFBWTtJQUR4QixnQkFBTSxFQUFFO0dBQ0ksWUFBWSxDQW9DeEI7QUFwQ1ksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW4sIEVudGl0eSwgUHJpbWFyeUdlbmVyYXRlZENvbHVtbiwgVmVyc2lvbkNvbHVtbiB9IGZyb20gJ3R5cGVvcm0nXHJcblxyXG5ARW50aXR5KClcclxuZXhwb3J0IGNsYXNzIEVudHJhZGFzQmxvZyB7XHJcblxyXG4gICAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oKVxyXG4gICAgaWQ6IG51bWJlcjtcclxuXHJcbiAgICBAQ29sdW1uKClcclxuICAgIHRpdHVsbzogc3RyaW5nO1xyXG5cclxuICAgIEBDb2x1bW4oKVxyXG4gICAgdXJsSW1nUG9ydGFkYTogc3RyaW5nOyBcclxuXHJcbiAgICBAQ29sdW1uKClcclxuICAgIHVybEltZ01pbmlhdHVyYTogc3RyaW5nO1xyXG5cclxuICAgIEBDb2x1bW4oKVxyXG4gICAgY2F0ZWdvcmlhOiBzdHJpbmc7XHJcblxyXG4gICAgQENvbHVtbigndGV4dCcpXHJcbiAgICBwYXJyYWZvOiBzdHJpbmc7XHJcbiAgICBcclxuICAgIEBDb2x1bW4oKSBcclxuICAgIGZlY2hhOiBzdHJpbmdcclxuXHJcbiAgICBAQ29sdW1uKCkgXHJcbiAgICBmaXJtYTogc3RyaW5nXHJcblxyXG4gICAgQENvbHVtbigndmFyY2hhcicsIHtkZWZhdWx0OiAnJywgbnVsbGFibGU6IGZhbHNlLCBsZW5ndGg6MjU1fSlcclxuICAgIHVybFRpdHVsbzogc3RyaW5nXHJcblxyXG4gICAgXHJcbiAgICAvLyBAQ29sdW1uKHt0eXBlOiAnaW50JyAsIGRlZmF1bHQ6IDAsIG51bGxhYmxlOiBmYWxzZSwgfSlcclxuICAgIEBWZXJzaW9uQ29sdW1uKClcclxuICAgIG1hc1Zpc3RvczogbnVtYmVyXHJcblxyXG4gICAgQENvbHVtbih7dHlwZTogJ3ZhcmNoYXInLGxlbmd0aDogMjU1LCBkZWZhdWx0OiAwLCBudWxsYWJsZTogZmFsc2UsIH0pXHJcbiAgICB1dWlkOiBzdHJpbmdcclxufSJdfQ==