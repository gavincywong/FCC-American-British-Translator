const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

	swap(dict) {
		var ret = {}

		for (var key in dict) {
			ret[dict[key]] = key
		}
		return ret
	}

	capitalize(word) {
		return word.charAt(0).toUpperCase() + word.slice(1);
	}

	toAmerican(text) {
		var timeDict = {}
		var timeArr = []
		var regex = /[0-2]?\d[.][0-5]\d/g
		var textHighlight = ''
		var replaceDict = {}

		if (regex.test(text)) {
			timeArr = text.match(regex)
		}

		for (let i = 0; i < timeArr.length; i++) {
			timeDict[timeArr[i]] = timeArr[i].replace(".", ":")
		}

		const dict = { ...britishOnly, ...this.swap(americanToBritishSpelling), ...timeDict }

		for (const [key, value] of Object.entries(dict)) {
			var re = new RegExp("\\b" + (key) + "\\b", "i")
			if (text.match(re)) {
				replaceDict[key] = value;
				//textHighlight = text.replace(re, `<span class="highlight">${value}</span>`)
				//text = text.replace(re, value)
			}
		}

		for (const [key, value] of Object.entries({ ...this.swap(americanToBritishTitles) })) {
			var re = new RegExp("\\b" + key + "\\b", "i")
			if (text.match(re)) {
				//replaceDict[key] = value;
				textHighlight = text.replace(re, `<span class="highlight">${this.capitalize(value)}</span>`)
				text = text.replace(re, this.capitalize(value))
			}
		}

		for (const [key, value] of Object.entries({...replaceDict})) {
			var re = new RegExp("\\b" + key + "\\b", "i")
			textHighlight = text.replace(re, `<span class="highlight">${value}</span>`)
			text = text.replace(re, value)
		}

		console.log(replaceDict)

		return [text, textHighlight];
	}

	toBritish(text) {
		var timeDict = {}
		var timeArr = []
		var regex = /[0-2]?\d:[0-5]\d/g
		var textHighlight = ''
		var replaceDict = {}

		if (regex.test(text)) {
			timeArr = text.match(regex)
		}

		for (let i = 0; i < timeArr.length; i++) {
			timeDict[timeArr[i]] = timeArr[i].replace(":", ".")
		}

		const dict = { ...americanOnly, ...americanToBritishSpelling, ...timeDict }

		for (const [key, value] of Object.entries(dict)) {
			var re = new RegExp("\\b" + key + "\\b", "i")
			if (text.match(re)) {
				replaceDict[key] = value;
				//textHighlight = text.replace(key, `<span class="highlight">${value}</span>`)
				//text = text.replace(key, value)
			}
		}

		for (const [key, value] of Object.entries({ ...americanToBritishTitles })) {
			var re = new RegExp(key, "i")
			if (text.match(re)) {
				textHighlight = text.replace(re, `<span class="highlight">${this.capitalize(value)}</span>`)
				text = text.replace(re, this.capitalize(value))
			}
		}

		for (const [key, value] of Object.entries({...replaceDict})) {
			var re = new RegExp("\\b" + key + "\\b", "i")
			textHighlight = text.replace(re, `<span class="highlight">${value}</span>`)
			text = text.replace(re, value)
		}

		return [text, textHighlight];
	}

}

module.exports = Translator;