"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const md5_1 = __importDefault(require("crypto-js/md5"));
const sign = {
    /**
     * 生成签名
     * @param params 请求参数
     * @param secretKey 密钥
     * @param timestamp 时间戳
     * @returns 签名
     */
    generate(params, secretKey, timestamp) {
        if (!params) {
            return '';
        }
        // 对参数进行 key 排序
        const sortedParams = {};
        Object.keys(params)
            .sort()
            .forEach((key) => {
            if (typeof params[key] === 'number' || typeof params[key] === 'boolean') {
                sortedParams[key] = params[key];
            }
            if (typeof params[key] === 'string' && params[key].length > 0) {
                sortedParams[key] = params[key];
            }
        });
        // 生成签名
        const signature = Object.keys(sortedParams)
            .map((key) => `${key}=${sortedParams[key]}&`)
            .join('') + `secretKey=${secretKey}&timestamp=${timestamp}`;
        // 使用 MD5 算法对签名进行哈希计算
        return (0, md5_1.default)(signature).toString();
    }
};
exports.default = sign;
//# sourceMappingURL=index.js.map