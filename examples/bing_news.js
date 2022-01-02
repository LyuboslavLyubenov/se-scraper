const se_scraper = require('./../index.js');

(async () => {

    let kws = [
        'Top stories',
    ];

    let scrape_job = {
        search_engine: 'bing_news',
        keywords: kws,
        num_pages: 3,
        headless: false
    };

    var results = await se_scraper.scrape({}, scrape_job);

    console.dir(results, {depth: null, colors: true});
})();
