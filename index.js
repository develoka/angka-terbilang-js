"use strict"

const units = ['', 'ribu', 'juta', 'milyar', 'triliun', 'quadriliun', 'quintiliun', 'sextiliun', 'septiliun', 'oktiliun', 'noniliun', 'desiliun', 'undesiliun', 'duodesiliun', 'tredesiliun', 'quattuordesiliun', 'quindesiliun', 'sexdesiliun', 'septendesiliun', 'oktodesiliun', 'novemdesiliun', 'vigintiliun']
const digitToUnit = (digit) => {
  const curIndex = Math.floor(digit / 3)
  const maxIndex = units.length - 1
  return curIndex > maxIndex ? units[maxIndex] : units[curIndex]
}

const numbers = ['satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan']
const numberToText = (index) => {
  return numbers[index - 1] || ''
}

const terbilang = (angka) => {
  let result = ''
  let printUnit = true
  let isBelasan = false

  for (let i = 0; i < angka.length; i++) {
    const length = angka.length - 1 - i
    if (length % 3 == 0) {
      const num = (angka[i] == 1 && (isBelasan || (digitToUnit(length) == 'ribu' && ((angka[i - 2] == undefined || angka[i - 2] == 0) && (angka[i - 1] == undefined || angka[i - 1] == 0))))) ? 'se' : `${numberToText(angka[i])} `
      result += ` ${num}`

      if ((angka[i - 2] && angka[i - 2] != 0) || (angka[i - 1] && angka[i - 1] != 0) || angka[i] != 0) {
        printUnit = true
      }
      if (printUnit) {
        printUnit = false
        result += ((isBelasan) ? 'belas ' : '') + digitToUnit(length)
        if (isBelasan) {
          isBelasan = false
        }
      }
    } else if (length % 3 == 2 && angka[i] != 0) {
      result += ` ${(angka[i] == 1) ? 'se' : numberToText(angka[i]) + ' '}ratus`
    } else if (length % 3 == 1 && angka[i] != 0) {
      if (angka[i] == 1) {
        if (angka[i + 1] == 0) {
          result += ' sepuluh'
        } else {
          isBelasan = true
        }
      } else {
        result += ` ${numberToText(angka[i])} puluh`
      }
    }
  }

  return result.trim().replace(/\s+/g, ' ')
}

const terbilangSatuSatu = (angka) => {
  return angka
    .split('')
    .map(angka => angka == 0 ? 'nol' : numberToText(angka))
    .join(' ')
}

module.exports = function angkaTerbilang(target, settings={decimal: '.'}) {
  if (typeof target !== "string") target = target.toString()
  target = target.split(settings.decimal)

  return target[1] 
    ? `${terbilang(target[0])} koma ${terbilangSatuSatu(target[1])}` 
    : terbilang(target[0])
}