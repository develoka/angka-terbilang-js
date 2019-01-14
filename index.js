"use strict"

var convertToUnit = function (digit) {
  if (digit >= 63) return 'vigintiliun'
  else if (digit >= 60) return 'novemdeciliun'
  else if (digit >= 57) return 'octodeciliun'
  else if (digit >= 54) return 'septendeciliun'
  else if (digit >= 51) return 'sexdeciliun'
  else if (digit >= 48) return 'quindeciliun'
  else if (digit >= 45) return 'quattuordeciliun'
  else if (digit >= 42) return 'tredeciliun'
  else if (digit >= 39) return 'duodeciliun'
  else if (digit >= 36) return 'undeciliun'
  else if (digit >= 33) return 'deciliun'
  else if (digit >= 30) return 'noniliun'
  else if (digit >= 27) return 'octiliun'
  else if (digit >= 24) return 'septiliun'
  else if (digit >= 21) return 'sextiliun'
  else if (digit >= 18) return 'quintiliun'
  else if (digit >= 15) return 'quadriliun'
  else if (digit >= 12) return 'triliun'
  else if (digit >= 9) return 'milyar'
  else if (digit >= 6) return 'juta'
  else if (digit >= 3) return 'ribu'
  else return ''
}

var numbers = ['satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan']
var numberToString = function (index) {
  return numbers[index - 1] || ''
}

module.exports = function terbilang(angka) {
  let result = ''
  let printUnit = true
  let isBelasan = false

  for (var i = 0; i < angka.length; i++) {
    var length = angka.length - 1 - i
    if (length % 3 == 0) {
      var num = (angka[i] == 1 && (isBelasan || (convertToUnit(length) == 'ribu' && ((angka[i - 2] == undefined || angka[i - 2] == 0) && (angka[i - 1] == undefined || angka[i - 1] == 0))))) ? 'se' : `${numberToString(angka[i])} `
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