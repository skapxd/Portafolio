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
exports.Contact = void 0;
const typeorm_1 = require("typeorm");
let Contact = class Contact {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Contact.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Contact.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Contact.prototype, "correo", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Contact.prototype, "fecha", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 255,
        default: '',
        nullable: false,
    }),
    __metadata("design:type", String)
], Contact.prototype, "temas", void 0);
Contact = __decorate([
    typeorm_1.Entity()
], Contact);
exports.Contact = Contact;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbnRpdHkvQ29udGFjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBZ0U7QUFHaEUsSUFBYSxPQUFPLEdBQXBCLE1BQWEsT0FBTztDQXFCbkIsQ0FBQTtBQWxCRztJQURDLGdDQUFzQixFQUFFOzttQ0FDZDtBQUdYO0lBREMsZ0JBQU0sRUFBRTs7dUNBQ007QUFHZjtJQURDLGdCQUFNLEVBQUU7O3VDQUNNO0FBR2Y7SUFEQyxnQkFBTSxFQUFFOztzQ0FDSztBQVFkO0lBTkMsZ0JBQU0sQ0FBQztRQUNKLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLEdBQUc7UUFDWCxPQUFPLEVBQUUsRUFBRTtRQUNYLFFBQVEsRUFBRSxLQUFLO0tBQ2xCLENBQUM7O3NDQUNZO0FBcEJMLE9BQU87SUFEbkIsZ0JBQU0sRUFBRTtHQUNJLE9BQU8sQ0FxQm5CO0FBckJZLDBCQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uLCBFbnRpdHksIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4gfSBmcm9tICd0eXBlb3JtJ1xyXG5cclxuQEVudGl0eSgpXHJcbmV4cG9ydCBjbGFzcyBDb250YWN0IHtcclxuXHJcbiAgICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigpXHJcbiAgICBpZDogbnVtYmVyO1xyXG4gXHJcbiAgICBAQ29sdW1uKClcclxuICAgIG5vbWJyZTogc3RyaW5nO1xyXG5cclxuICAgIEBDb2x1bW4oKVxyXG4gICAgY29ycmVvOiBzdHJpbmc7XHJcblxyXG4gICAgQENvbHVtbigpXHJcbiAgICBmZWNoYTogc3RyaW5nO1xyXG5cclxuICAgIEBDb2x1bW4oe1xyXG4gICAgICAgIHR5cGU6ICd2YXJjaGFyJywgXHJcbiAgICAgICAgbGVuZ3RoOiAyNTUsIFxyXG4gICAgICAgIGRlZmF1bHQ6ICcnLCBcclxuICAgICAgICBudWxsYWJsZTogZmFsc2UsXHJcbiAgICB9KVxyXG4gICAgdGVtYXM6IHN0cmluZztcclxufSJdfQ==