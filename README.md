# Angka-terbilang-js [![NPM Version](https://img.shields.io/npm/v/@develoka/angka-terbilang-js.svg)](https://www.npmjs.com/package/@develoka/angka-terbilang-js) [![Minified Size](https://img.shields.io/bundlephobia/min/@develoka/angka-terbilang-js.svg)](https://www.npmjs.com/package/@develoka/angka-terbilang-js)
Mengkonversi angka ke dalam bilangan bahasa Indonesia

## Demo

[Link Demo](http://code.bakasyntax.com/gist/e41efb58b4b7fae2bfdfd0a1b0219ed7?default-pans=html,js,output)

## Instalasi dan Penggunaan

```
npm install @develoka/angka-terbilang-js
```
```js
import angkaTerbilang from '@develoka/angka-terbilang-js';
```

atau

```
<script src="https://unpkg.com/@develoka/angka-terbilang-js/index.min.js">
```

## Usage

```js
console.log(angkaTerbilang(777666555));
// tujuh ratus tujuh puluh tujuh juta enam ratus enam puluh enam ribu lima ratus lima puluh lima
console.log(angkaTerbilang('1002109381290'));
// satu triliun dua milyar seratus sembilan juta tiga ratus delapan puluh satu ribu dua ratus sembilan puluh
console.log(angkaTerbilang('3148112838011192391239213'));
// tiga septiliun seratus empat puluh delapan sextiliun seratus dua belas quintiliun delapan ratus tiga puluh delapan quadriliun sebelas triliun seratus sembilan puluh dua milyar tiga ratus sembilan puluh satu juta dua ratus tiga puluh sembilan ribu dua ratus tiga belas
```

## Fitur

Mendukung bilangan hingga 10<sup>63</sup>

| Angka           | Satuan           |
|:---------------:|:----------------:|
| 10<sup>1</sup>  | puluhan          |
| 10<sup>2</sup>  | ratusan          |
| 10<sup>3</sup>  | ribu             |
| 10<sup>6</sup>  | juta             |
| 10<sup>9</sup>  | milyar           |
| 10<sup>12</sup> | triliun          |
| 10<sup>15</sup> | quadriliun       |
| 10<sup>18</sup> | quintiliun       |
| 10<sup>21</sup> | sextiliun        |
| 10<sup>24</sup> | septiliun        |
| 10<sup>27</sup> | oktiliun         |
| 10<sup>30</sup> | noniliun         |
| 10<sup>33</sup> | desiliun         |
| 10<sup>36</sup> | undesiliun       |
| 10<sup>39</sup> | duodesiliun      |
| 10<sup>42</sup> | tredesiliun      |
| 10<sup>45</sup> | quattuordesiliun |
| 10<sup>48</sup> | quindesiliun     |
| 10<sup>51</sup> | sexdesiliun      |
| 10<sup>54</sup> | septendesiliun   |
| 10<sup>57</sup> | oktodesiliun     |
| 10<sup>60</sup> | novemdesiliun    |
| 10<sup>63</sup> | vigintiliun      |

Mendukung konversi angka di belakang koma. Default simbol koma adalah `"."`. Untuk mengubah gunakan parameter tambahan.

```js
console.log(angkaTerbilang(123.23));
// seratus dua puluh tiga koma dua tiga
console.log(angkaTerbilang('123.23'));
// seratus dua puluh tiga koma dua tiga
console.log(angkaTerbilang('123,23', {decimal: ','}));
// seratus dua puluh tiga koma dua tiga
```

## Testing

Testing menggunakan [jest](https://jestjs.io/). Lihat [file tests](https://github.com/develoka/angka-terbilang-js/blob/master/test/index.test.js).

```
npm install
npm run test
```

## Development

Edit `index.js` kemudian jalankan perintah:

```
npm run build
```

## Benchmark / Uji Performa

Benchmark dilakukan terhadap 2 package serupa lainnya. Dengan mengkonversi angka dengan besaran **ratusan ribu**, **ratusan juta**, **ratusan milyar**, **ratusan triliun**.

| Package                          | Angka Ratusan Ribu      | Angka Ratusan Juta      | Angka Ratusan Milyar    | Angka Ratusan Triliun   |
|----------------------------------|-------------------|-------------------|-------------------|-------------------|
| [@develoka/angka-terbilang-js](https://github.com/develoka/angka-terbilang-js)     | 473,566 ops/sec | 384,371 ops/sec | 289,601 ops/sec | 218,829 ops/sec |
| [dikyarga/angka-menjadi-terbilang](https://github.com/dikyarga/angka-menjadi-terbilang) | 113,633 ops/sec   | 104,313 ops/sec   | 86,764 ops/sec    | 75,704 ops/sec    |
| [BosNaufal/terbilang-js](https://github.com/BosNaufal/terbilang-js)           | 190,818 ops/sec   | 123,329 ops/sec   | 76,851 ops/sec    | 52,241 ops/sec    |

Detail benchmark dapat dilihat pada halaman [repository benchmark](https://github.com/develoka/angka-terbilang-js-benchmark).
