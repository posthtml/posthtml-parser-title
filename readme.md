# posthtml-parser-title <img align="right" height="100" title="PostHTML logo" src="http://posthtml.github.io/posthtml/logo.svg">

[![Actions Status][action]][action-url]
[![NPM][npm]][npm-url]
[![Coverage][cover]][cover-badge]
[![XO code style][style]][style-url]

Provides parsing of the **`title`** of the element. htmlparsin2 does not provide item parsing `title`, `style`, `script` in mode [xmlMode](https://github.com/fb55/htmlparser2/wiki/Parser-options#option-xmlmode).

**`Related issue:`**
  - [xmlMode](https://github.com/fb55/htmlparser2/issues/642)
  - [Block in title results in unexpected block](https://github.com/posthtml/posthtml-parser/issues/53)

## Install

```bash
npm i posthtml-parser-title
```

## Usage

``` js
const fs = require('fs');
const posthtml = require('posthtml');
const prserTitle = require('posthtml-parser-title');

posthtml()
    .use(prserTitle({ /* options */ }))
    .process(html/*, options */)
    .then(result => fs.writeFileSync('./after.html', result.html));
```

### Contributing

See [PostHTML Guidelines](https://github.com/posthtml/posthtml/tree/master/docs) and [contribution guide](CONTRIBUTING.md).

[action]: https://github.com/posthtml/posthtml-parser-title/workflows/Actions%20Status/badge.svg
[action-url]: https://github.com/posthtml/posthtml-parser-title/actions?query=workflow%3A%22CI+tests%22

[npm]: https://img.shields.io/npm/v/posthtml-parser-title.svg
[npm-url]: https://npmjs.com/package/posthtml-parser-title

[style]: https://badgen.net/xo/status/chalk
[style-url]: https://github.com/xojs/xo

[cover]: https://coveralls.io/repos/posthtml/posthtml-parser-title/badge.svg?branch=master
[cover-badge]: https://coveralls.io/r/posthtml/posthtml-parser-title?branch=master
