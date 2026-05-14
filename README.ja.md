# Verhoeff

チェックディジットアルゴリズムの [Verhoeff Algorithm](https://en.wikipedia.org/wiki/Verhoeff_algorithm) ([ja](https://ja.wikipedia.org/wiki/%E3%83%B4%E3%82%A1%E3%83%BC%E3%83%98%E3%83%95%E3%82%A2%E3%83%AB%E3%82%B4%E3%83%AA%E3%82%BA%E3%83%A0)) です。

## JavaScript (ESモジュール)

- [Verhoeff.js](Verhoeff.js)

### 使い方

```js
import { Verhoeff } from "https://code4fukui.github.io/Verhoeff/Verhoeff.js";

console.log(Verhoeff.calc(236)); // 3
console.log(Verhoeff.check(2363)); // true
console.log(Verhoeff.addCheckDigit(236)); // 2363
```

### テスト

```
deno test
```

### サンプルアプリ

[Verhoeff.js test](https://code4fukui.github.io/Verhoeff/)

## 関連プロジェクト

- [Damm](https://github.com/code4fukui/Damm)
- [Luhn](https://github.com/code4fukui/Luhn)
- [Modulus11](https://github.com/code4fukui/Modulus11)

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
