# gulp-color
Color your console.

## Install

Install with [npm](https://npmjs.org/package/gulp-color).

```
npm install --save-dev gulp-color
```

## Examples

```js
var gulp = require('gulp');
var color = require('gulp-color');

gulp.task('default', function () {
	console.log(color('Hello World!', 'RED'));
});
