//モジュール読み込み
const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

//スクレイピング関数
async function scraping(){
    const getData = axios.get("https://wikiwiki.jp/genshinwiki/")
        .then((data) => {
            console.log("取得に成功");
            console.log(data.data);
            console.log(data.status);

            console.log(typeof data.data);
            fs.writeFileSync('./getData.html', data.data, (err) =>{
                if(err){
                    console.log(err);
                }
            });
        })
        .catch((err) => {
            console.log(err);
        });
}

scraping();