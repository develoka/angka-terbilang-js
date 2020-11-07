"use strict"

const units = ['', 'ribu', 'juta', 'milyar', 'triliun', 'quadriliun', 'quintiliun', 'sextiliun', 'septiliun', 'oktiliun', 'noniliun', 'desiliun', 'undesiliun', 'duodesiliun', 'tredesiliun', 'quattuordesiliun', 'quindesiliun', 'sexdesiliun', 'septendesiliun', 'oktodesiliun', 'novemdesiliun', 'vigintiliun']
const maxIndex = units.length - 1
function digitToUnit (digit) {
  const curIndex = digit / 3
  return curIndex <= maxIndex ? units[curIndex] : units[maxIndex]
}

const numbers = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan']
function numberToText (index) {
  return numbers[index] || ''
}

const terbilang = (angka) => {
  const length = angka.length - 1

  if (length === 0 && Number(angka[0]) === 0) {
    return 'nol'
  }

  let skipNextNumber = false
  let space = ''
  let result = ''
  let finalResult = ''

  let i = 0
  while (i <= length) {

    if (result !== '') {
      finalResult += space + result
      result = ''
      space = ' '
    }

    const digitCount = length - i
    const modGroup = digitCount % 3 // [2,1,0]
    const curAngka = Number(angka[i])

    let has00InPrev = false
    
    if (modGroup === 0) {
      has00InPrev = i === 0 || (
        Number(angka[i - 2]) === 0 && Number(angka[i - 1]) === 0
      )
    }

    if (curAngka !== 0) {
      if (modGroup === 0) {
        if (curAngka !== 1 || digitCount !== 3 || has00InPrev === false) {
          if (skipNextNumber === false) {
            result = numberToText(curAngka) + (i !== length ? ' ' : '')
          }
          if (has00InPrev === false || curAngka !== 0) {
            result += `${digitToUnit(digitCount)}`
          }
          skipNextNumber = false
        } else {
          result = 'seribu'
        }
      } else if (modGroup === 2) {
        if (curAngka === 1) {
          result = 'seratus'
        } else {
          result = `${numberToText(curAngka)} ratus`
        }
      } else {
        if (curAngka === 1) {
          const nextAngka = Number(angka[i + 1])
          if (nextAngka === 0) {
            result = 'sepuluh'
          } else if (nextAngka === 1) {
            result = 'sebelas'
          } else {
            result = `${numberToText(nextAngka)} belas`
          }
          skipNextNumber = true
        } else {
          result = `${numberToText(curAngka)} puluh`
        }
      }
    } else {
      if (modGroup === 0 && has00InPrev === false) {
        result += `${digitToUnit(digitCount)}`
      }
    }

    i++
  }

  return result ? (finalResult + space + result) : finalResult
}

const terbilangSatuSatu = (angka) => {
  return angka
    .split('')
    .map(angka => angka == 0 ? 'nol' : numberToText(angka))
    .join(' ')
}

module.exports = function angkaTerbilang(target, settings={decimal: '.'}) {
  if (typeof target !== "string") target = String(target)
  if (target.indexOf(settings.decimal) > -1) {
    target = target.split(settings.decimal)
    return `${terbilang(target[0])} koma ${terbilangSatuSatu(target[1])}`
  } else {
    return terbilang(target)
  }
}