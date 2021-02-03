const fetch = require('node-fetch');
const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const scrape = async () => {
  const res = await fetch('https://ranking.rakuten.co.jp/?l-id=top_normal_grayheader02');
  const html = await res.text();
  const dom = new JSDOM(html);
  const document = dom.window.document;
  const nodes = document.querySelectorAll('#rnkRankingItemListBox dl:nth-child(1) dl dt dl dd.rnkTop_shop a');
  const tokyoWeathers = Array.from(nodes).map((dl) => dl.textContent.trim());
  console.log(tokyoWeathers);
};
scrape();