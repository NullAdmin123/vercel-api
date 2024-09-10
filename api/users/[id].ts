import fetch from 'node-fetch'
import type { VercelRequest, VercelResponse } from '@vercel/node'
export default function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  const { id } = request.query
  var data = await run()
  return response.json({
    id,
    name: data
  })
}

async function run() {
  var url = 'http://c4.ysepan.com/f_ht/ajcx/wj.aspx?cz=dq&jsq=0&mlbh=1938934&wjpx=1&_dlmc=xdtool&_dlmm=';
  var referer = 'http://c4.ysepan.com/f_ht/ajcx/000ht.html?bbh=1172';
  try {
    var data = await fetchData(url, referer);
    console.log(data);
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
}
async function fetchData(url: string, referer: string): Promise<string> {
  var headers = {
    'Referer': referer
  };

  try {
    // 发送 GET 请求
    var res = await fetch(url, { headers });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    var data = await res.text();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
