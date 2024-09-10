import type { VercelRequest， VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';

export 默认 async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  const { id } = request.query;

  try {
    // 目标 URL
    const url = 'http://c4.ysepan.com/f_ht/ajcx/wj.aspx?cz=dq&jsq=0&mlbh=1938934&wjpx=1&_dlmc=xdtool&_dlmm=';
    // 附加的 Referer 头
    const headers = {
      'Referer': 'http://c4.ysepan.com/f_ht/ajcx/000ht.html?bbh=1172'
    };

    // 发送 GET 请求
    const res = await fetch(url, { headers });
    const data = await res.text();

    // 返回请求结果
    return response.json({
      id，
      name: 'shanyue'，
      result: data
    });
  } catch (error) {
    // 错误处理
    return response.json({
      id，
      name: 'shanyue'，
      error: 'Failed to fetch data'
    });
  }
}
