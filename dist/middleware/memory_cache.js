"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cache = void 0;
const memory_cache_1 = __importDefault(require("memory-cache"));
const cache = (duration) => {
    return (req, res, next) => {
        let key = '__express__' + req.originalUrl || req.url;
        let cachedBody = memory_cache_1.default.get(key);
        if (cachedBody) {
            console.log('Cache');
            return res.send(cachedBody);
        }
        else {
            next();
        }
    };
};
exports.cache = cache;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtb3J5X2NhY2hlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21pZGRsZXdhcmUvbWVtb3J5X2NhY2hlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGdFQUFrQztBQUkzQixNQUFNLEtBQUssR0FBRyxDQUFDLFFBQWdCLEVBQUUsRUFBRTtJQUV0QyxPQUFPLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQixFQUFFLEVBQUU7UUFFdkQsSUFBSSxHQUFHLEdBQUcsYUFBYSxHQUFHLEdBQUcsQ0FBQyxXQUFXLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQTtRQUVwRCxJQUFJLFVBQVUsR0FBRyxzQkFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUVoQyxJQUFJLFVBQVUsRUFBRTtZQUVaLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFckIsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1NBRTlCO2FBQU07WUFFSCxJQUFJLEVBQUUsQ0FBQTtTQUNUO0lBRUwsQ0FBQyxDQUFBO0FBRUwsQ0FBQyxDQUFBO0FBckJZLFFBQUEsS0FBSyxTQXFCakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWNhY2hlIGZyb20gXCJtZW1vcnktY2FjaGVcIjtcclxuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIE5leHRGdW5jdGlvbiB9IGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBjYWNoZSA9IChkdXJhdGlvbjogbnVtYmVyKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBrZXkgPSAnX19leHByZXNzX18nICsgcmVxLm9yaWdpbmFsVXJsIHx8IHJlcS51cmxcclxuICAgICAgICBcclxuICAgICAgICBsZXQgY2FjaGVkQm9keSA9IG1jYWNoZS5nZXQoa2V5KVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChjYWNoZWRCb2R5KSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ2FjaGUnKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zZW5kKGNhY2hlZEJvZHkpXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBuZXh0KClcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIH1cclxuICAgIFxyXG59XHJcbiAgICBcclxuICAgICJdfQ==