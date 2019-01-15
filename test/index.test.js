const angkaTerbilang = require("../");

test('belasan', () => {
    expect(angkaTerbilang('11000')).toBe("sebelas ribu");
    expect(angkaTerbilang('10000')).toBe("sepuluh ribu");
    expect(angkaTerbilang('11001')).toBe("sebelas ribu satu");
    expect(angkaTerbilang('11011')).toBe("sebelas ribu sebelas");
    expect(angkaTerbilang('1011021')).toBe("satu juta sebelas ribu dua puluh satu");
    expect(angkaTerbilang('190118')).toBe("seratus sembilan puluh ribu seratus delapan belas");
    expect(angkaTerbilang('16915')).toBe("enam belas ribu sembilan ratus lima belas");
    expect(angkaTerbilang('1017911')).toBe("satu juta tujuh belas ribu sembilan ratus sebelas");
    expect(angkaTerbilang('110011')).toBe("seratus sepuluh ribu sebelas");
});

test('jutaan', () => {
    expect(angkaTerbilang('1000000')).toBe("satu juta");
    expect(angkaTerbilang('1001000')).toBe("satu juta seribu");
    expect(angkaTerbilang('1011000')).toBe("satu juta sebelas ribu");
    expect(angkaTerbilang('131021111')).toBe("seratus tiga puluh satu juta dua puluh satu ribu seratus sebelas");
    expect(angkaTerbilang('11021111')).toBe("sebelas juta dua puluh satu ribu seratus sebelas");
    expect(angkaTerbilang('212121212')).toBe("dua ratus dua belas juta seratus dua puluh satu ribu dua ratus dua belas");
    expect(angkaTerbilang('121212121')).toBe("seratus dua puluh satu juta dua ratus dua belas ribu seratus dua puluh satu");
});

test('big-number', () => {
    expect(angkaTerbilang('1000000001000000001')).toBe("satu quintiliun satu milyar satu");
    expect(angkaTerbilang('1000200001000000001')).toBe("satu quintiliun dua ratus triliun satu milyar satu");
});

test('all-zero', () => {
    expect(angkaTerbilang('1')).toBe("satu");
    expect(angkaTerbilang('10')).toBe("sepuluh");
    expect(angkaTerbilang('100')).toBe("seratus");
    expect(angkaTerbilang('1000')).toBe("seribu");
    expect(angkaTerbilang('10000')).toBe("sepuluh ribu");
    expect(angkaTerbilang('100000')).toBe("seratus ribu");
    expect(angkaTerbilang('1000000')).toBe("satu juta");
    expect(angkaTerbilang('10000000')).toBe("sepuluh juta");
    expect(angkaTerbilang('100000000')).toBe("seratus juta");
    expect(angkaTerbilang('1000000000')).toBe("satu milyar");
    expect(angkaTerbilang('10000000000')).toBe("sepuluh milyar");
    expect(angkaTerbilang('100000000000')).toBe("seratus milyar");
    expect(angkaTerbilang('1000000000000')).toBe("satu triliun");
    expect(angkaTerbilang('10000000000000')).toBe("sepuluh triliun");
    expect(angkaTerbilang('100000000000000')).toBe("seratus triliun");
    expect(angkaTerbilang('1000000000000000')).toBe("satu quadriliun");
    expect(angkaTerbilang('10000000000000000')).toBe("sepuluh quadriliun");
    expect(angkaTerbilang('100000000000000000')).toBe("seratus quadriliun");
    expect(angkaTerbilang('1000000000000000000')).toBe("satu quintiliun");
    expect(angkaTerbilang('10000000000000000000')).toBe("sepuluh quintiliun");
    expect(angkaTerbilang('100000000000000000000')).toBe("seratus quintiliun");
});