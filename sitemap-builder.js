/* eslint-disable import/order */
require('babel-register')({
  presets: ['es2015', 'react'],
});

const router = require('./src/router-for-sitemap').default;
const Sitemap = require('react-router-sitemap').default;

function generateSitemap() {
  return new Sitemap(router)
    .build('https://tierrapurses.com')
    .save('./public/sitemap.xml');
}

generateSitemap();
