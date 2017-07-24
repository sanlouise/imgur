const request = require('request');
const cheerio = require('cheerio');

exports.imgScrape = (url, cb) => {
  request(url, (error, response, body) => {
    if(error){
      cb({
        error: error
      });
    }

    const $ = cheerio.load(body);
    const $url = url;
    const $img = $('.post-image img').attr('src')
    const $title = $('.post-title').text();
    const $desc = $('[itemprop=description]').text();

    const image = {
      url: $url,
      img: "http:" + $img,
      title: $title,
      description: $desc,
    }

    console.log('scraped', image)
    cb(image);

  });
}

//Promise Example
exports.imgScrape2 = (url) => {
  return new Promise((resolve, reject) => {
    request(url, (error, resp, body) => {
      if(error) {
        reject(error);
      }
      const $ = cheerio.load(body);
      const $url = url;
      const $img = $('.post-image img').attr('src');
      const $title = $('.post-title').text();
      const $desc = $('[itemprop=description]').text();

      const image = {
        url: $url,
        img: "http:" + $img,
        title: $title,
        description: $desc
      }

      // respond with the final JSON
      console.log('scraped from scraper.js ', image);
      resolve(image);

    });
  })
}
