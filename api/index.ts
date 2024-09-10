import type { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  try {
    const url = 'http://c4.ysepan.com/f_ht/ajcx/wj.aspx?cz=dq&jsq=0&mlbh=1938934&wjpx=1&_dlmc=xdtool&_dlmm=';
    const fetchResponse = await fetch(url, {
      headers: {
        Referer: 'http://c4.ysepan.com/f_ht/ajcx/000ht.html?bbh=1172'
      }
    });

    if (!fetchResponse.ok) {
      throw new Error(`HTTP error! status: ${fetchResponse.status}`);
    }

    const data = await fetchResponse.text();
    response.status(200).send(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    response.status(500).send('请求失败');
  }
}
