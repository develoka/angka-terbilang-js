const terbilang = require("../");

test('belasan', () => {
    expect(terbilang('11000')).toBe("sebelas ribu");
    expect(terbilang('10000')).toBe("sepuluh ribu");
    expect(terbilang('11001')).toBe("sebelas ribu satu");
    expect(terbilang('11011')).toBe("sebelas ribu sebelas");
    expect(terbilang('1011021')).toBe("satu juta sebelas ribu dua puluh satu");
    expect(terbilang('190118')).toBe("seratus sembilan puluh ribu seratus delapan belas");
    expect(terbilang('16915')).toBe("enam belas ribu sembilan ratus lima belas");
    expect(terbilang('1017911')).toBe("satu juta tujuh belas ribu sembilan ratus sebelas");
    expect(terbilang('110011')).toBe("seratus sepuluh ribu sebelas");
});

test('jutaan', () => {
    expect(terbilang('1000000')).toBe("satu juta");
    expect(terbilang('1001000')).toBe("satu juta seribu");
    expect(terbilang('1011000')).toBe("satu juta sebelas ribu");
    expect(terbilang('131021111')).toBe("seratus tiga puluh satu juta dua puluh satu ribu seratus sebelas");
    expect(terbilang('11021111')).toBe("sebelas juta dua puluh satu ribu seratus sebelas");
    expect(terbilang('212121212')).toBe("dua ratus dua belas juta seratus dua puluh satu ribu dua ratus dua belas");
    expect(terbilang('121212121')).toBe("seratus dua puluh satu juta dua ratus dua belas ribu seratus dua puluh satu");
});

test('big-number', () => {
    expect(terbilang('1000000001000000001')).toBe("satu quintiliun satu milyar satu");
    expect(terbilang('1000200001000000001')).toBe("satu quintiliun dua ratus triliun satu milyar satu");
});

test('all-zero', () => {
    expect(terbilang('1')).toBe("satu");
    expect(terbilang('10')).toBe("sepuluh");
    expect(terbilang('100')).toBe("seratus");
    expect(terbilang('1000')).toBe("seribu");
    expect(terbilang('10000')).toBe("sepuluh ribu");
    expect(terbilang('100000')).toBe("seratus ribu");
    expect(terbilang('1000000')).toBe("satu juta");
    expect(terbilang('10000000')).toBe("sepuluh juta");
    expect(terbilang('100000000')).toBe("seratus juta");
    expect(terbilang('1000000000')).toBe("satu milyar");
    expect(terbilang('10000000000')).toBe("sepuluh milyar");
    expect(terbilang('100000000000')).toBe("seratus milyar");
    expect(terbilang('1000000000000')).toBe("satu triliun");
    expect(terbilang('10000000000000')).toBe("sepuluh triliun");
    expect(terbilang('100000000000000')).toBe("seratus triliun");
    expect(terbilang('1000000000000000')).toBe("satu quadriliun");
    expect(terbilang('10000000000000000')).toBe("sepuluh quadriliun");
    expect(terbilang('100000000000000000')).toBe("seratus quadriliun");
    expect(terbilang('1000000000000000000')).toBe("satu quintiliun");
    expect(terbilang('10000000000000000000')).toBe("sepuluh quintiliun");
    expect(terbilang('100000000000000000000')).toBe("seratus quintiliun");
});