
// object with unicode compliant characters
var unicode = {
	// 0: 'ḏ', // _d

	1: 'ā', // _a
	2: 'ī', // _i
	3: 'ū', // _u
	4: 'ṛ', // .r
	5: 'ṝ', // _.r
	6: 'ṅ', // 'n
	7: 'ñ', // ~n
	8: 'ṭ', // .t
	9: 'ḍ', // .d
	10: 'ṇ', // .n
	11: 'ś', // 's
	12: 'ṣ', // .s
	13: 'ṁ', // 'm (anusvara)
	14: 'ḥ', // .h (visarga)
	15: 'ḷ', // .l
	16: 'ḹ', // _.l

	21: 'ẏ', // .y

	// 29: 'Ḏ', // _D

	30: 'Ā', // _a
	31: 'Ī', // _i
	32: 'Ū', // _u
	33: 'Ṛ', // .r
	34: 'Ṝ', // _.r
	35: 'Ṅ', // 'n
	36: 'Ñ', // ~n
	37: 'Ṭ', // .t
	38: 'Ḍ', // .d
	39: 'Ṇ', // .n
	40: 'Ś', // 's
	41: 'Ṣ', // .s
	42: 'Ṁ', // 'm (anusvara)
	43: 'Ḥ', // .h (visarga)
	44: 'Ḷ', // .l
	45: 'Ḹ', // _.l

	51: 'Ẏ', // .Y

	60: 'ɱ', // \-/ (candrabindu)
	61: '̮', // _ (ha_uk)
	62: '^', // ^ (ext. sandhi)
	63: "'", // avagraha
	64: 'ɱ', // \_/ (candra e)
	65: '/x', // \ (virama)
	66: '…', // abbreviation
	67: '’' // Latin apostrophe
}

// object with Balarama font characters
var balarama = {
	// 0: '.ò', // _d

	1: 'ä', // _a
	2: 'é', // _i
	3: 'ü', // _u
	4: 'å', // .r
	5: 'è', // _.r
	6: 'ì', // 'n
	7: 'ï', // ~n
	8: 'ö', // .t
	9: 'ò', // .d
	10: 'ë', // .n
	11: 'ç', // 's
	12: 'ñ', // .s
	13: 'à', // 'm (anusvara)
	14: 'ù', // .h (visarga)
	15: 'ÿ', // .l
	16: 'û', // _.l

	21: 'ý', // .y

	// 29: '.Ò', // _d

	30: 'Ä', // _a
	31: 'É', // _i
	32: 'Ü', // _u
	33: 'Å', // .r
	34: 'È', // _.r
	35: 'Ì', // 'n
	36: 'Ï', // ~n
	37: 'Ö', // .t
	38: 'Ò', // .d
	39: 'Ë', // .n
	40: 'Ç', // 's
	41: 'Ñ', // .s
	42: 'À', // 'm (anusvara)
	43: 'Ù', // .h (visarga)
	44: 'ß', // .l
	45: 'ß', // _.l

	51: 'Ý', // .y

	60: '~', // \-/ (candrabindu)
	61: '_', // _ (ha_uk)

	62: '^', // ^ (ext. sandhi)

	63: "'", // avagraha
	64: '~', // \_/ (candra e)
	65: '/x', // \ (virama)
	66: '…', // abbreviation
	67: '’' // Latin apostrophe
}

// loops through each key in the 'balarama' object above and replaces with corresponding 'unicode'
for (var key in balarama) { 

	var find = balarama[key];
	var replace = unicode[key];

	if (replace == 'ñ') { replace = 'NnT'}

    app.findGrepPreferences=app.changeGrepPreferences=null;
    app.findGrepPreferences.findWhat=find;
    app.changeGrepPreferences.changeTo=replace;
    app.activeDocument.changeGrep();

	if (key >= 67) {
		app.findGrepPreferences=app.changeGrepPreferences=null;
		app.findGrepPreferences.findWhat='NnT';
		app.changeGrepPreferences.changeTo='ñ';
		app.activeDocument.changeGrep();
	}
};
 