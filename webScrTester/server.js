const PORT = 8000
const express = require('express')
const app = express()
const axios = require('axios')
const cheer = require('cheerio')

const url = 'https://www.reddit.com/r/webdev/'

axios(url).then(response => {
   const html = response.data
   const $ = cheer.load(html)
   const articles = []

   $('.rpBJOHq2PR60pnwJlUyP0', html).each(function () {
      articles.push($(this))
      console.log($(this).text())
   })

   
})

app.listen(PORT, () => console.log(`Listening to port: ${PORT}`))