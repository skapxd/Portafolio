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
    Hola, ${data.nombre}, Tu información ha sido enviada exitosamente

    Dentro de las próximas 24 horas me estaré comunicando contigo por correo o celular

    Porfavor, no responder a este email.
    `;
};
const postPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
});
exports.postPost = postPost;
