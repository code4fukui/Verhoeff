# Verhoeff

[Verhoeff Algorithm](https://ja.wikipedia.org/wiki/%E3%83%B4%E3%82%A1%E3%83%BC%E3%83%98%E3%83%95%E3%82%A2%E3%83%AB%E3%82%B4%E3%83%AA%E3%82%BA%E3%83%A0)を使ったチェックディジット計算ライブラリです。

## デモ
[Verhoeff.js test](https://code4fukui.github.io/Verhoeff/) で動作確認できます。

## 機能
- チェックディジットの計算
- チェックディジットの検証
- チェックディジットの付加

## 使い方
```js
import { Verhoeff } from "https://code4fukui.github.io/Verhoeff/Verhoeff.js";

console.log(Verhoeff.calc(236)); // 3
console.log(Verhoeff.check(2363)); // true
console.log(Verhoeff.addCheckDigit(236)); // 2363
```

## テスト
```
deno test
```

## ライセンス
MIT License