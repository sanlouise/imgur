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
