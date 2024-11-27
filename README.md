# BuilderNet Docs & Blog

This repo contains docs and blog:

## Getting started

If you want to edit docs or blog, start the dev environment with Docker:

```bash
make docker-start
```

Now you can open the website on http://localhost:3000

See also the [`Makefile`](./Makefile) for more commands.

Note: you should really use Docker for these kinds of things, because `yarn` will install _a ton_ of dependencies that all have full access to your system and can run arbitrary
code on your machine during and after installation. Docker provides at least a somewhat isolated environment for this. But if you really want to live dangerously, you can also
run `npm install` and `npm start`.

---

To start a new blog entry:

- Create a new file in [`/blog`](./blog/) with the format `YYYY-MM-DD-title.md`
- See also
  - https://docusaurus.io/docs/blog for more options
  - [Guide in the flashbots-writings repo](https://github.com/flashbots/flashbots-writings-website/?tab=readme-ov-file#steps-to-publish-a-new-post)
- Make sure you have a good social preview image and description. Test it with https://www.opengraph.xyz!

---

Notes:

- The main index page is in [`/src/pages/index.js`](./src/pages/index.js)