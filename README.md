//TODO: Add links to share in social media

- [upload to github](https://www.youtube.com/watch?v=Q9n2mLqXFpU&t=528s&ab_channel=PedroTech)
- `npm install gh-pages --save-dev `
- add `"homepage": "https://app-info.github.io/hagio-geo-info/"` to `package.json`
- add these `scripts` to `package.json`:

  - `"predeploy": "npm run build",`
  - `"deploy": "gh-pages -d build",`

- Just run `npm run deploy`

- [site is live here](https://app-info.github.io/hagio-geo-info/)
