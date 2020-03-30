# user-select: contain polyfill

Polyfills [`user-select: contain`](https://developer.mozilla.org/en-US/docs/Web/CSS/user-select) property value by implementing the behavior on a CSS class name `user-select-contain`.

This is only implemented in IE and Edge (under `element`) right now.

- [CSS Basic User Interface Module Level 4](https://drafts.csswg.org/css-ui-4/#propdef-user-select)
  - [Firefox bug](https://bugzilla.mozilla.org/show_bug.cgi?id=1036853)
  - [Chrome bug](https://bugs.chromium.org/p/chromium/issues/detail?id=658129)
  - [`wpt.fyi`](https://wpt.fyi/results/css/css-ui/parsing/user-select-valid.html?label=master&label=experimental&aligned&q=user-select)

## Installation

```sh
$ npm install user-select-contain-polyfill
```

## Usage

### JS

```js
import "user-select-contain-polyfill";
```

### CSS

```css
@import "user-select-contain-polyfill.css";
```

### HTML

```html
<span class="user-select-contain">
  50ce349853
</span>
```

## Development

```sh
$ npm install
$ npm run build
```

## License

Distributed under the MIT license. See LICENSE for details.
