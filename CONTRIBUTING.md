# Contributing

This is a very simple project, so it is very easy to contribute or just to get it set up yourself.
It uses JavaScript to do thhe probability logic, and the workflow output/errors
are done using the JavaScript @actions/core library.

### Issues and PRs

Since the idea is really simple, I'm guessing the only type of bug report that could show up is
when the probability and the results doesn't match and is a bit "off". When this happens and if it is
unexpected, feel free to raise an issue, or a PR to fix it.

### Development

1. make sure you have Node, NPM, and Git installed
2. fork and clone this repo

```
git clone https://github.com/username/passibility
cd passibility
```

3. Run `npm install` to install all the dependencies
4. Switch to a new branch (optional): `git checkout -b branch-name`
5. Make the neccessary changes, the JavaScript code is in `index.js`, `index.test.js` and `pass.js`. 
   You don't need to change anything in `dist/`.
   It is recommended that you add tests when needed, and format your code properly.
6. Run linting and tests using `npm run lint` and `npm test`
7. Run `npm run prepare` to build the changes into `dist/`
8. stage and commit new changes: `git add . && git commit -m 'commit message here'
9. Push your changes `git push -u origin branch-name`
10. It is recommended that you test it yourself by creating a test repo, and use the workflow using
```yaml
- uses: username/passibility@branch-name
  with:
    percentage: 10
```
11. Open a PR when you are ready

### Scripts

**Testing (jest)**

```
npm test
```

**Linting (eslint)**

```
npm run lint
```

**Build**

```
npm run prepare
```
