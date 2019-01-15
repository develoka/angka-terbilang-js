"use strict"

var convertToUnit = function (digit) {
  if (digit >= 63) return 'Vigintiliun'
  else if (digit >= 60) return 'Novemdesiliun'
  else if (digit >= 57) return 'Octodesiliun'
  else if (digit >= 54) return 'Septendesiliun'
  else if (digit >= 51) return 'Sexdesiliun'
  else if (digit >= 48) return 'Quindesiliun'
  else if (digit >= 45) return 'Quattuordesiliun'
  else if (digit >= 42) return 'Tredesiliun'
  else if (digit >= 39) return 'Duodesiliun'
  else if (digit >= 36) return 'Undesiliun'
  else if (digit >= 33) return 'Desiliun'
  else if (digit >= 30) return 'Noniliun'
  else if (digit >= 27) return 'Octiliun'
  else if (digit >= 24) return 'Septiliun'
  else if (digit >= 21) return 'Sextiliun'
  else if (digit >= 18) return 'Quintiliun'
  else if (digit >= 15) return 'Quadriliun'
  else if (digit >= 12) return 'Triliun'
  else if (digit >= 9) return 'Milyar'
  else if (digit >= 6) return 'Juta'
  else if (digit >= 3) return 'Ribu'
  else return ''
}

var numbers = ['Satu', 'Dua', 'Tiga', 'Empat', 'Lima', 'Enam', 'Tujuh', 'Delapan', 'Sembilan']
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
      var num = (angka[i] == 1 && (isBelasan || (convertToUnit(length) == 'Ribu' && ((angka[i - 2] == undefined || angka[i - 2] == 0) && (angka[i - 1] == undefined || angka[i - 1] == 0))))) ? 'Se' : `${numberToString(angka[i])} `
      result += ` ${num}`

      if ((angka[i - 2] && angka[i - 2] != 0) || (angka[i - 1] && angka[i - 1] != 0) || angka[i] != 0) {
        printUnit = true
      }
      if (printUnit) {
        printUnit = false
        result += ((isBelasan) ? 'Belas ' : '') + convertToUnit(length)
        if (isBelasan) {
          isBelasan = false
        }
      }
    } else if (length % 3 == 2 && angka[i] != 0) {
      result += ` ${(angka[i] == 1) ? 'Se' : numberToString(angka[i]) + ' '}Ratus`
    } else if (length % 3 == 1 && angka[i] != 0) {
      if (angka[i] == 1) {
        if (angka[i + 1] == 0) {
          result += ' Sepuluh'
        } else {
          isBelasan = true
        }
      } else {
        result += ` ${numberToString(angka[i])} Puluh`
      }
    }
  }

  return result.trim().replace(/\s+/g, ' ')
}