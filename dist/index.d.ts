declare const sign: {
    /**
     * 生成签名
     * @param params 请求参数
     * @param secretKey 密钥
     * @param timestamp 时间戳
     * @returns 签名
     */
    generate(params: Record<string, any>, secretKey: string, timestamp: number): string;
};
export default sign;
//# sourceMappingURL=index.d.ts.map