const path = require('path');
const fs = require('fs');
const request = require('request');
let dataPath = path.join(__dirname, '../popular-articles.json');
let articleArray = []

request('https://reddit.com/r/popular.json', (err, res, body) => {

    if(err) console.log(err);

    JSON.parse(body).data.children.forEach( item => {
        let articleObject = {
            title: item.data.title,
            author: item.data.author,
            url: item.data.url
        }
        articleArray.push(articleObject)
    });
console.log(articleArray)


   fs.writeFile(dataPath, JSON.stringify(articleArray), err => {
      if(err) console.log(err);
    })

 
    
});
