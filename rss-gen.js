const RSS = require('rss');
const fs = require('fs');
const path = require('path');
const frontMatter = require('front-matter');

const blogPostDir = path.resolve(__dirname, 'content', 'posts');
const base_url = 'https://soundoftext.netlify.app/';

const feed = new RSS({
  title: 'Sound of text Netlify Blog',
  description: 'Welcome to Sound of Text, the intersection where text meets sound to create a dynamic and enriching communication experience',
  feed_url: base_url + `rss.xml`,
  site_url: base_url,
  author: 'Soundoftext',
  copyright: `2023 Sound of Text`,
  language: 'id',
  pubDate: new Date().toLocaleString(),
  ttl: '60',
});

fs.readdirSync(blogPostDir)
  .map(fileName => {
    const fullPath = path.join(blogPostDir, fileName);
    const file = fs.readFileSync(fullPath, 'utf8');
    const { attributes } = frontMatter(file);
    return { ...attributes, fileName };
  })

  .sort((a, b) => +new Date(b.date) - +new Date(a.date))
  .forEach(({ title, description, date, fileName }) => {

    feed.item({
      title,
      description,
      url: base_url + `posts/${fileName.replace('.mdx', '')}`,
      // author,
      date,
    });
  });

const xml = feed.xml();

console.log( path.resolve(__dirname, 'dist') + '/rss.xml' );
console.log(xml);

fs.writeFileSync(path.resolve(__dirname, 'dist') + '/rss.xml', xml);
