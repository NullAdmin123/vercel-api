import type { VercelRequest, VercelResponse } from '@vercel/node';
import https from 'https';

export default function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  const url = 'https://c4.ysepan.com/f_ht/ajcx/wj.aspx?cz=dq&jsq=0&mlbh=1938934&wjpx=1&_dlmc=xdtool&_dlmm=';

  https.get(url, {
    headers: {
      Referer: 'http://c4.ysepan.com/f_ht/ajcx/000ht.html?bbh=1172'
    }
  }, (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      response.status(200).send(data);
    });

  }).on('error', (err) => {
    console.error('Error fetching data:', err);
    response.status(500).send('请求失败');
  });
}
