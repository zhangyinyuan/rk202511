// rep-test.js
const fs = require("fs");
const fetch = require("node-fetch");

// 请求地址
const url = "https://goods-circulation.metersbonwe.com/data-analysis/replenishment/forwardShareApi";

// 公共请求头
const headers = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:143.0) Gecko/20100101 Firefox/143.0",
  "Accept": "application/json, text/plain, */*",
  "Accept-Language": "zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2",
  "Accept-Encoding": "gzip, deflate, br, zstd",
  "Content-Type": "application/json;charset=UTF-8",
  "appId": "teyfpymgybezrckh",
  "sessionKey": "1009117a264d427e92221c9b25ce5262",
  "timestamp": "1759318110219",
  "sign": "233d6470893ea7846b8d9ff689c12c8f265b7170b9dcd3660398fd73ce38fd3b",
  "Origin": "https://goods-circulation.metersbonwe.com",
  "Referer": "https://goods-circulation.metersbonwe.com/autoReplenishDetail?taskId=6377&taskType=1",
  "Connection": "keep-alive"
};

// 固定 payload 模板
const basePayload = {
  apiPath: "/shareapi/prod-biz/replenishment/getReplenishmentDtl",
  data: {
    taskId: "6377",
    taskType: "1",
    newCategory: "针织长裤",
    pageNo: 1,
    pageSize: 4
  },
  userId: "25e45082669a4c628de2400d0ff54320"
};

// 输出文件
const outfile = "result.jsonl";

(async function main() {
  const f = fs.createWriteStream(outfile, { flags: "w", encoding: "utf-8" });

  for (let page = 1; page <= 4; page++) {
    const payload = { ...basePayload, data: { ...basePayload.data, pageNo: page } };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(payload)
      });

      const result = await res.json();

      const record = {
        request: payload,
        response: result
      };

      f.write(JSON.stringify(record, null, 2) + "\n");
      console.log(`✅ Page ${page} done`);
    } catch (err) {
      console.error(`❌ Page ${page} error:`, err);
    }
  }

  f.end();
  console.log(`\n所有结果已写入 ${outfile}`);
})();
