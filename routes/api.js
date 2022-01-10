'use strict';

const Translator = require('../components/translator.js');

module.exports = function(app) {

	const translator = new Translator();
	var translatedString = ''
	app.route('/api/translate')
		.post((req, res) => {
			const { text, locale } = req.body

			if (!locale || text === undefined) {
				res.json({ error: 'Required field(s) missing' })
				return;
			}

			if (text === '') {
				res.json({ error: 'No text to translate' })
				return;
			}

			if (locale != 'american-to-british' && locale != 'british-to-american') {
				res.json({ error: 'Invalid value for locale field' })
				return;
			}

			if (locale === 'american-to-british') {
				translatedString = translator.toBritish(text)
			} else {
				translatedString = translator.toAmerican(text)
			}

			if (text === translatedString[0]) {
				res.json({ text, translation: 'Everything looks good to me!' })
				return;
			} else {
				res.json({ text, translation: translatedString[1] })
			}

		});
};
