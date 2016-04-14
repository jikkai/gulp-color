# gulp-color
Color your console.

## Install

Install with [npm](https://npmjs.org/package/gulp-color).

```
npm install --save-dev gulp-color
```

## Usage

```js
var gulp = require('gulp');
var color = require('gulp-color');

gulp.task('default', function () {
  console.log(color('Hello World!', 'RED'));
});
```

You can use this following color:
* BLACK
* RED
* GREEN
* YELLOW
* BLUE
* MAGENTA
* CYAN
* WHITE
