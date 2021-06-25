"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postPost = void 0;
const Mail_1 = __importDefault(require("../../mail/Mail"));
const msjTextSkapxd = (data) => {
    return `
Tienes un nuevo registro del portafolio
nombre: ${data.nombre}        
correo: ${data.correo}        
telefono: ${data.telefono}        
nombre empresa: ${data.nombreEmpresa}        

mensaje: ${data.mensaje}        
`;
};
const msjTextClient = (data) => {
    return `
Hola ${data.nombre}, Tu información ha sido enviada exitosamente

Dentro de las próximas 24 horas me estaré comunicando contigo por correo o celular

Porfavor, no responder a este email.
`;
};
const postPost = async (req, res) => {
    const body = req.body;
    if (Object.keys(body).length === 0) {
        return res.json({
            success: false
        });
    }
    new Mail_1.default().sendMail('manuellondogno132@gmail.com', {
        msjText: msjTextSkapxd({
            correo: body.correo,
            mensaje: body.mensaje,
            nombre: body.nombre,
            nombreEmpresa: body.nombreEmpresa,
            telefono: body.telefono
        })
    });
    new Mail_1.default().sendMail(body.correo, {
        msjText: msjTextClient({
            correo: body.correo,
            mensaje: body.mensaje,
            nombre: body.nombre,
            nombreEmpresa: body.nombreEmpresa,
            telefono: body.telefono
        })
    });
    return res.json({
        success: true
    });
};
exports.postPost = postPost;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVyL2FwaS9wb3N0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLDJEQUFtQztBQVVuQyxNQUFNLGFBQWEsR0FBRyxDQUFDLElBQVUsRUFBRSxFQUFFO0lBQ3JDLE9BQU87O1VBRUcsSUFBSSxDQUFDLE1BQU07VUFDWCxJQUFJLENBQUMsTUFBTTtZQUNULElBQUksQ0FBQyxRQUFRO2tCQUNQLElBQUksQ0FBQyxhQUFhOztXQUV6QixJQUFJLENBQUMsT0FBTztDQUN0QixDQUFBO0FBQ0QsQ0FBQyxDQUFBO0FBR0QsTUFBTSxhQUFhLEdBQUcsQ0FBQyxJQUFVLEVBQUUsRUFBRTtJQUNqQyxPQUFPO09BQ0gsSUFBSSxDQUFDLE1BQU87Ozs7O0NBS25CLENBQUE7QUFDRCxDQUFDLENBQUE7QUFHTSxNQUFNLFFBQVEsR0FBRyxLQUFLLEVBQUcsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBRTNELE1BQU0sSUFBSSxHQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFFNUIsSUFBSyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFFakMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQ1osT0FBTyxFQUFFLEtBQUs7U0FDakIsQ0FBQyxDQUFBO0tBQ0w7SUFFRCxJQUFJLGNBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyw2QkFBNkIsRUFBQztRQUM5QyxPQUFPLEVBQUUsYUFBYSxDQUFDO1lBQ25CLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDMUIsQ0FBQztLQUNMLENBQUMsQ0FBQTtJQUVGLElBQUksY0FBSSxFQUFFLENBQUMsUUFBUSxDQUFFLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDOUIsT0FBTyxFQUFFLGFBQWEsQ0FBQztZQUNuQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQzFCLENBQUM7S0FDTCxDQUFDLENBQUE7SUFFRixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDWixPQUFPLEVBQUUsSUFBSTtLQUNoQixDQUFDLENBQUE7QUFDTixDQUFDLENBQUE7QUFsQ1ksUUFBQSxRQUFRLFlBa0NwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCBNYWlsIGZyb20gJy4uLy4uL21haWwvTWFpbCc7XHJcblxyXG5pbnRlcmZhY2UgQm9keSB7XHJcbiAgICBub21icmU6IHN0cmluZ1xyXG4gICAgY29ycmVvOiBzdHJpbmdcclxuICAgIHRlbGVmb25vOiBzdHJpbmdcclxuICAgIG1lbnNhamU6IHN0cmluZ1xyXG4gICAgbm9tYnJlRW1wcmVzYTogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IG1zalRleHRTa2FweGQgPSAoZGF0YTogQm9keSkgPT4ge1xyXG5yZXR1cm4gYFxyXG5UaWVuZXMgdW4gbnVldm8gcmVnaXN0cm8gZGVsIHBvcnRhZm9saW9cclxubm9tYnJlOiAke2RhdGEubm9tYnJlfSAgICAgICAgXHJcbmNvcnJlbzogJHtkYXRhLmNvcnJlb30gICAgICAgIFxyXG50ZWxlZm9ubzogJHtkYXRhLnRlbGVmb25vfSAgICAgICAgXHJcbm5vbWJyZSBlbXByZXNhOiAke2RhdGEubm9tYnJlRW1wcmVzYX0gICAgICAgIFxyXG5cclxubWVuc2FqZTogJHtkYXRhLm1lbnNhamV9ICAgICAgICBcclxuYFxyXG59XHJcblxyXG5cclxuY29uc3QgbXNqVGV4dENsaWVudCA9IChkYXRhOiBCb2R5KSA9PiB7XHJcbiAgICByZXR1cm4gYFxyXG5Ib2xhICR7IGRhdGEubm9tYnJlIH0sIFR1IGluZm9ybWFjacOzbiBoYSBzaWRvIGVudmlhZGEgZXhpdG9zYW1lbnRlXHJcblxyXG5EZW50cm8gZGUgbGFzIHByw7N4aW1hcyAyNCBob3JhcyBtZSBlc3RhcsOpIGNvbXVuaWNhbmRvIGNvbnRpZ28gcG9yIGNvcnJlbyBvIGNlbHVsYXJcclxuXHJcblBvcmZhdm9yLCBubyByZXNwb25kZXIgYSBlc3RlIGVtYWlsLlxyXG5gXHJcbn1cclxuICAgIFxyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3RQb3N0ID0gYXN5bmMgKCByZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICAgICAgICBcclxuICAgIGNvbnN0IGJvZHk6IEJvZHkgPSByZXEuYm9keTtcclxuXHJcbiAgICBpZiAoIE9iamVjdC5rZXlzKGJvZHkpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiByZXMuanNvbih7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgbmV3IE1haWwoKS5zZW5kTWFpbCgnbWFudWVsbG9uZG9nbm8xMzJAZ21haWwuY29tJyx7XHJcbiAgICAgICAgbXNqVGV4dDogbXNqVGV4dFNrYXB4ZCh7XHJcbiAgICAgICAgICAgIGNvcnJlbzogYm9keS5jb3JyZW8sXHJcbiAgICAgICAgICAgIG1lbnNhamU6IGJvZHkubWVuc2FqZSxcclxuICAgICAgICAgICAgbm9tYnJlOiBib2R5Lm5vbWJyZSxcclxuICAgICAgICAgICAgbm9tYnJlRW1wcmVzYTogYm9keS5ub21icmVFbXByZXNhLFxyXG4gICAgICAgICAgICB0ZWxlZm9ubzogYm9keS50ZWxlZm9ub1xyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIG5ldyBNYWlsKCkuc2VuZE1haWwoIGJvZHkuY29ycmVvLCB7XHJcbiAgICAgICAgbXNqVGV4dDogbXNqVGV4dENsaWVudCh7XHJcbiAgICAgICAgICAgIGNvcnJlbzogYm9keS5jb3JyZW8sXHJcbiAgICAgICAgICAgIG1lbnNhamU6IGJvZHkubWVuc2FqZSxcclxuICAgICAgICAgICAgbm9tYnJlOiBib2R5Lm5vbWJyZSxcclxuICAgICAgICAgICAgbm9tYnJlRW1wcmVzYTogYm9keS5ub21icmVFbXByZXNhLFxyXG4gICAgICAgICAgICB0ZWxlZm9ubzogYm9keS50ZWxlZm9ub1xyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiByZXMuanNvbih7XHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZVxyXG4gICAgfSlcclxufSJdfQ==