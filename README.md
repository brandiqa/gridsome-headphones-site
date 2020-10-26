# GRIDSOME E-COMMERCE EXAMPLE SITE

This is an example E-Commerce JAMStack static website showcasing performance built using Storyblok, Gridsome and TailwindCSS. You can find the article on Sitepoint.com.

The live version of this project can be found [here](https://gridsome-headphones.netlify.app/). Clone or Fork-Clone the project to your hard-drive then execute the following instructions in order.

## 1. Storyblok Account Setup

1. [Register](https://app.storyblok.com/#!/signup) at Storyblok for free.
2. Create a new Space and copy the preview token from Dashboard > Settings > API Keys pages
3. Create an `.env` file and save the token key-value as : `STORYBLOK_API=<token>`

For detailed explanation on how things work, checkout the [Gatsby docs](https://www.gatsbyjs.com/) and for the whole Setup you can have a look at [our step by step guide for Gatsby and Storyblok](**https://www.storyblok.com/tp/gatsby-multilanguage-website-tutorial**)

## 2. Import Necessary components

You can import the example components through the file `seed.components.json` with the [Storyblok CLI](https://github.com/storyblok/storyblok#push-components). For this you will need your space ID, which you can find in your space **settings**.

First you need to install the Storyblok CLI

```bash
# Install Storyblok CLI if you have not already
npm install -g storyblok # or yarn global add storyblok
```

Then you can push the existing `seed.components.json` structure to Storyblok.

```bash
# how to use
storyblok push-components <SOURCE> --space <SPACE_ID>

# example
storyblok push-components ./seed.components.json --space 12345
```

After the import you will have all the components under `Components` in your left sidebar.

## Build Setup

```bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:8000
$ npm run develop # or yarn dev
```

## License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
