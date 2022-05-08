# Verhoeff.js

A checksums, [Verhoeff Algorithm](https://en.wikipedia.org/wiki/Verhoeff_algorithm) ([ja](https://ja.wikipedia.org/wiki/%E3%83%B4%E3%82%A1%E3%83%BC%E3%83%98%E3%83%95%E3%82%A2%E3%83%AB%E3%82%B4%E3%83%AA%E3%82%BA%E3%83%A0)) in JavaScript (ES module)

## how to use

```js
import { Verhoeff } from "https://code4fukui.github.io/Verhoeff.js/Verhoeff.js";

console.log(Verhoeff.calc(236)); // 3
console.log(Verhoeff.check(2363)); // true
console.log(Verhoeff.addCheckDigit(236)); // 2363
```

## test

```
deno test
```

## sample app

[Verhoeff.js test](https://code4fukui.github.io/Verhoeff.js/)

## related

- [Damm.js](https://github.com/code4fukui/Damm.js)
- [Luhn.js](https://github.com/code4fukui/Luhn.js)
