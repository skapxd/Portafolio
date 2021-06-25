"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const credentials_1 = require("../credentials");
class Mail {
    async sendMail(email, options) {
        var _a;
        let transporter = nodemailer_1.default.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: credentials_1.userMail,
                pass: credentials_1.passMail
            }
        });
        transporter.verify().then(() => {
            console.log('ready for send email');
        });
        await transporter.sendMail({
            from: 'automail.noresponder@gmail.com',
            to: email,
            // html: options.msjHtml,
            text: (_a = options.msjText) !== null && _a !== void 0 ? _a : '',
            subject: 'No responder a este email'
        });
    }
}
exports.default = Mail;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYWlsL01haWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw0REFBbUM7QUFDbkMsZ0RBQWtEO0FBRWxELE1BQXFCLElBQUk7SUFFckIsS0FBSyxDQUFDLFFBQVEsQ0FBRSxLQUFhLEVBQUUsT0FBNkM7O1FBRXhFLElBQUksV0FBVyxHQUFHLG9CQUFVLENBQUMsZUFBZSxDQUFDO1lBQ3pDLElBQUksRUFBRSxnQkFBZ0I7WUFDdEIsSUFBSSxFQUFFLEdBQUc7WUFDVCxNQUFNLEVBQUUsSUFBSTtZQUNaLElBQUksRUFBRTtnQkFDRixJQUFJLEVBQUUsc0JBQVE7Z0JBQ2QsSUFBSSxFQUFFLHNCQUFRO2FBQ2pCO1NBQ0osQ0FBQyxDQUFDO1FBRUgsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBRSxHQUFHLEVBQUU7WUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO1FBQzNDLENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxXQUFXLENBQUMsUUFBUSxDQUFDO1lBQ3ZCLElBQUksRUFBRSxnQ0FBZ0M7WUFDdEMsRUFBRSxFQUFFLEtBQUs7WUFDVCx5QkFBeUI7WUFDekIsSUFBSSxFQUFDLE1BQUEsT0FBTyxDQUFDLE9BQU8sbUNBQUksRUFBRTtZQUMxQixPQUFPLEVBQUUsMkJBQTJCO1NBQ3ZDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjtBQTFCRCx1QkEwQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbm9kZW1haWxlciBmcm9tICdub2RlbWFpbGVyJ1xyXG5pbXBvcnQge3Bhc3NNYWlsLCB1c2VyTWFpbH0gZnJvbSAnLi4vY3JlZGVudGlhbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbCB7XHJcblxyXG4gICAgYXN5bmMgc2VuZE1haWwoIGVtYWlsOiBzdHJpbmcsIG9wdGlvbnM6IHttc2pIdG1sPzogc3RyaW5nLCBtc2pUZXh0Pzogc3RyaW5nfSAgKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xyXG4gICAgICAgICAgICBob3N0OiAnc210cC5nbWFpbC5jb20nLFxyXG4gICAgICAgICAgICBwb3J0OiA0NjUsIFxyXG4gICAgICAgICAgICBzZWN1cmU6IHRydWUsXHJcbiAgICAgICAgICAgIGF1dGg6IHtcclxuICAgICAgICAgICAgICAgIHVzZXI6IHVzZXJNYWlsLFxyXG4gICAgICAgICAgICAgICAgcGFzczogcGFzc01haWxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgdHJhbnNwb3J0ZXIudmVyaWZ5KCkudGhlbiggKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlYWR5IGZvciBzZW5kIGVtYWlsJylcclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgIGF3YWl0IHRyYW5zcG9ydGVyLnNlbmRNYWlsKHtcclxuICAgICAgICAgICAgZnJvbTogJ2F1dG9tYWlsLm5vcmVzcG9uZGVyQGdtYWlsLmNvbScsXHJcbiAgICAgICAgICAgIHRvOiBlbWFpbCxcclxuICAgICAgICAgICAgLy8gaHRtbDogb3B0aW9ucy5tc2pIdG1sLFxyXG4gICAgICAgICAgICB0ZXh0Om9wdGlvbnMubXNqVGV4dCA/PyAnJyxcclxuICAgICAgICAgICAgc3ViamVjdDogJ05vIHJlc3BvbmRlciBhIGVzdGUgZW1haWwnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=