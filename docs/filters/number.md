---
title: Numbers
order: 3
---

## isNumber

Checks if a value is classified as a [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) primitive or object.

Input

```njk
{% raw %}{{ 1801 | isNumber }}
{{ "1801" | isNumber }}{% endraw %}
```

Output

```html
true
false
```

## sterling

Convert a number into a string formatted as pound sterling. This can be useful for converting numbers into a human readable price.

Input

```njk
{% raw %}{{ 81932 | sterling }}{% endraw %}
```

Output

```html
£81,932
```
