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
exports.ContactGuia = void 0;
const typeorm_1 = require("typeorm");
let ContactGuia = class ContactGuia {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ContactGuia.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ContactGuia.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ContactGuia.prototype, "email", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ContactGuia.prototype, "telefono", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ContactGuia.prototype, "fecha", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ContactGuia.prototype, "finanzas", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ContactGuia.prototype, "marketing", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ContactGuia.prototype, "ventas", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ContactGuia.prototype, "impuestos", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ContactGuia.prototype, "talentoHumano", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ContactGuia.prototype, "desarrolloPersonal", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ContactGuia.prototype, "terminos", void 0);
ContactGuia = __decorate([
    typeorm_1.Entity()
], ContactGuia);
exports.ContactGuia = ContactGuia;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFjdEd1aWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZW50aXR5L0NvbnRhY3RHdWlhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHFDQUFnRTtBQUdoRSxJQUFhLFdBQVcsR0FBeEIsTUFBYSxXQUFXO0NBNEN2QixDQUFBO0FBekNHO0lBREMsZ0NBQXNCLEVBQUU7O3VDQUNkO0FBR1g7SUFEQyxnQkFBTSxFQUFFOzsyQ0FDTTtBQUdmO0lBREMsZ0JBQU0sRUFBRTs7MENBQ0s7QUFHZDtJQURDLGdCQUFNLEVBQUU7OzZDQUNRO0FBR2pCO0lBREMsZ0JBQU0sRUFBRTs7MENBQ0s7QUFJZDtJQURDLGdCQUFNLEVBQUU7OzZDQUNRO0FBSWpCO0lBREMsZ0JBQU0sRUFBRTs7OENBQ1M7QUFJbEI7SUFEQyxnQkFBTSxFQUFFOzsyQ0FDTTtBQUlmO0lBREMsZ0JBQU0sRUFBRTs7OENBQ1M7QUFJbEI7SUFEQyxnQkFBTSxFQUFFOztrREFDYTtBQUl0QjtJQURDLGdCQUFNLEVBQUU7O3VEQUNrQjtBQUczQjtJQURDLGdCQUFNLEVBQUU7OzZDQUNRO0FBMUNSLFdBQVc7SUFEdkIsZ0JBQU0sRUFBRTtHQUNJLFdBQVcsQ0E0Q3ZCO0FBNUNZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uLCBFbnRpdHksIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4gfSBmcm9tICd0eXBlb3JtJ1xyXG5cclxuQEVudGl0eSgpXHJcbmV4cG9ydCBjbGFzcyBDb250YWN0R3VpYSB7XHJcblxyXG4gICAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oKVxyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIFxyXG4gICAgQENvbHVtbigpXHJcbiAgICBub21icmU6IHN0cmluZztcclxuXHJcbiAgICBAQ29sdW1uKClcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcblxyXG4gICAgQENvbHVtbigpXHJcbiAgICB0ZWxlZm9ubzogc3RyaW5nO1xyXG5cclxuICAgIEBDb2x1bW4oKVxyXG4gICAgZmVjaGE6IHN0cmluZztcclxuXHJcbiAgICBcclxuICAgIEBDb2x1bW4oKVxyXG4gICAgZmluYW56YXM6IHN0cmluZztcclxuXHJcbiAgICBcclxuICAgIEBDb2x1bW4oKVxyXG4gICAgbWFya2V0aW5nOiBzdHJpbmc7XHJcblxyXG4gICAgXHJcbiAgICBAQ29sdW1uKClcclxuICAgIHZlbnRhczogc3RyaW5nO1xyXG5cclxuICAgIFxyXG4gICAgQENvbHVtbigpXHJcbiAgICBpbXB1ZXN0b3M6IHN0cmluZztcclxuXHJcbiAgICBcclxuICAgIEBDb2x1bW4oKVxyXG4gICAgdGFsZW50b0h1bWFubzogc3RyaW5nO1xyXG5cclxuICAgIFxyXG4gICAgQENvbHVtbigpXHJcbiAgICBkZXNhcnJvbGxvUGVyc29uYWw6IHN0cmluZztcclxuICAgIFxyXG4gICAgQENvbHVtbigpXHJcbiAgICB0ZXJtaW5vczogc3RyaW5nO1xyXG5cclxufSJdfQ==