const express = require('express')
const app = express()
const port = 4000
const axios = require('axios')
const cheer = require('cheerio')

async function scrapper(url, clas) {
    axios(url).then((res) => {
        const html = res.data
        const $ = cheer.load(html)

        $('styles_categoryBusinessListWrapper__2H2X5',html).each()
    })

}

scrapper()

app.listen(port, () => console.log(""))