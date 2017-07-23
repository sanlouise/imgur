const scraper = require('./scraper');
const url = 'http://imgur.com/gallery/kyLwY';

//Data can be called anything, it just contains what we get back.
scraper.imgScrape(url, (data) => {
  console.log('data received')
  console.log('data')
})
