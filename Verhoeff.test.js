import * as t from "https://deno.land/std/testing/asserts.ts";
import { Verhoeff } from "./Verhoeff.js";

Deno.test("calc", () => {
  t.assertEquals(Verhoeff.calc(236), 3);
  t.assertEquals(Verhoeff.calc("236"), 3);
});
Deno.test("check", () => {
  t.assert(Verhoeff.check(2363));
  t.assert(Verhoeff.check("2363"));
});
Deno.test("addCheckDigit", () => {
  t.assertEquals(Verhoeff.addCheckDigit(236), 2363);
  t.assertEquals(Verhoeff.addCheckDigit("236"), "2363");
  t.assertEquals(Verhoeff.addCheckDigit("000236"), "0002365");
});
Deno.test("algorithm", () => {
  t.assertEquals(Verhoeff.calc("1"), 5);
  t.assertEquals(Verhoeff.calc("11"), 3);
  t.assertEquals(Verhoeff.calc("111"), 6);
  t.assertEquals(Verhoeff.calc("1111"), 7);
  t.assertEquals(Verhoeff.calc("00001111"), 1);
  t.assertEquals(Verhoeff.calc("11110"), 4);
});
