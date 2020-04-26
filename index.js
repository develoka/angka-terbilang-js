"use strict"

function convertToUnit(digit) {
  const unit = [
    "",
    "ribu",
    "juta",
    "milyar",
    "triliun",
    "quadriliun",
    "quintiliun",
    "sextiliun",
    "septiliun",
    "oktiliun",
    "noniliun",
    "desiliun",
    "undesiliun",
    "tredesiliun",
    "quattuordesiliun",
    "quattuordesiliun",
    "quindesiliun",
    "sexdesiliun",
    "septendesiliun",
    "oktodesiliun",
    "novemdesiliun"
  ];
  const index = Math.floor(digit / 3);

  return index > 20 ? "vigintiliun" : unit[index];
}

function numberToString(index) {
  const numbers = [
    "satu",
    "dua",
    "tiga",
    "empat",
    "lima",
    "enam",
    "tujuh",
    "delapan",
    "sembilan"
  ];
  return numbers[index - 1] || "";
}

function terb_depan(angka) {
  let result = ''
  let printUnit = true
  let isBelasan = false

  for (let i = 0; i < angka.length; i++) {
    let length = angka.length - 1 - i
    if (length % 3 == 0) {
      let num = (angka[i] == 1 && (isBelasan || (convertToUnit(length) == 'ribu' && ((angka[i - 2] == undefined || angka[i - 2] == 0) && (angka[i - 1] == undefined || angka[i - 1] == 0))))) ? 'se' : `${numberToString(angka[i])} `
      result += ` ${num}`

      if ((angka[i - 2] && angka[i - 2] != 0) || (angka[i - 1] && angka[i - 1] != 0) || angka[i] != 0) {
        printUnit = true
      }
      if (printUnit) {
        printUnit = false
        result += ((isBelasan) ? 'belas ' : '') + convertToUnit(length)
        if (isBelasan) {
          isBelasan = false
        }
      }
    } else if (length % 3 == 2 && angka[i] != 0) {
      result += ` ${(angka[i] == 1) ? 'se' : numberToString(angka[i]) + ' '}ratus`
    } else if (length % 3 == 1 && angka[i] != 0) {
      if (angka[i] == 1) {
        if (angka[i + 1] == 0) {
          result += ' sepuluh'
        } else {
          isBelasan = true
        }
      } else {
        result += ` ${numberToString(angka[i])} puluh`
      }
    }
  }

  return result.trim().replace(/\s+/g, ' ')
}

function terb_belakang(t) {
  return t
    .split("")
    .map(angka => angka == 0 ? "nol" : numberToString(parseInt(angka)))
    .join(" ");
}

module.exports = function angkaTerbilang(angka, decimalSeparator = ".") {
  const target = !(typeof angka == "string") ? angka.toString() : angka;
  const parts = target.split(decimalSeparator);
  return (
    terb_depan(parts[0]) +
    (parseInt(parts[1]) > 0 ? " koma " + terb_belakang(parts[1]) : "")
  );
}