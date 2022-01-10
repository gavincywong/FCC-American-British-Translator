const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translate = new Translator();

suite('Unit Tests', () => {
	// Test 1
	test('Mangoes are my favorite fruit.', function(done) {
		assert.equal(translate.toBritish('Mangoes are my favorite fruit.')[0], 'Mangoes are my favourite fruit.')
		done()
	})
	// Test 2
	test('I ate yogurt for breakfast.', function(done) {
		assert.equal(translate.toBritish('I ate yogurt for breakfast.')[0], 'I ate yoghurt for breakfast.')
		done()
	})
	// Test 3
	test("We had a party at my friend's condo.", function(done) {
		assert.equal(translate.toBritish("We had a party at my friend's condo.")[0], 'We had a party at my friend\'s flat.')
		done()
	})
	// Test 4
	test('Can you toss this in the trashcan for me?', function(done) {
		assert.equal(translate.toBritish('Can you toss this in the trashcan for me?')[0], 'Can you toss this in the bin for me?')
		done()
	})
	// Test 5
	test('The parking lot was full.', function(done) {
		assert.equal(translate.toBritish('The parking lot was full.')[0], 'The car park was full.')
		done()
	})
	// Test 6
	test('Like a high tech Rube Goldberg machine.', function(done) {
		assert.equal(translate.toBritish('Like a high tech Rube Goldberg machine.')[0], 'Like a high tech Heath Robinson device.')
		done()
	})
	// Test 7
	test('To play hooky means to skip class or work.', function(done) {
		assert.equal(translate.toBritish('To play hooky means to skip class or work.')[0], 'To bunk off means to skip class or work.')
		done()
	})
	// Test 8
	test('No Mr. Bond, I expect you to die.', function(done) {
		assert.equal(translate.toBritish('No Mr. Bond, I expect you to die.')[0], 'No Mr Bond, I expect you to die.')
		done()
	})
	// Test 9
	test('Dr. Grosh will see you now.', function(done) {
		assert.equal(translate.toBritish('Dr. Grosh will see you now.')[0], 'Dr Grosh will see you now.')
		done()
	})
	// Test 10
	test('Lunch is at 12:15 today.', function(done) {
		assert.equal(translate.toBritish('Lunch is at 12:15 today.')[0], 'Lunch is at 12.15 today.')
		done()
	})
	// Test 11
	test('We watched the footie match for a while', function(done) {
		assert.equal(translate.toAmerican('We watched the footie match for a while')[0], 'We watched the soccer match for a while')
		done()
	})
	// Test 12
	test('Paracetamol takes up to an hour to work.', function(done) {
		assert.equal(translate.toAmerican('Paracetamol takes up to an hour to work.')[0], 'Tylenol takes up to an hour to work.')
		done()
	})
	// Test 13
	test('First, caramelise the onions.', function(done) {
		assert.equal(translate.toAmerican('First, caramelise the onions.')[0], 'First, caramelize the onions.')
		done()
	})
	// Test 14
	test('I spent the bank holiday at the funfair.', function(done) {
		assert.equal(translate.toAmerican('I spent the bank holiday at the funfair.')[0], 'I spent the public holiday at the carnival.')
		done()
	})
	// Test 15
	test('I had a bicky then went to the chippy.', function(done) {
		assert.equal(translate.toAmerican('I had a bicky then went to the chippy.')[0], "I had a cookie then went to the fish-and-chip shop.")
		done()
	})
	// Test 16
	test("I've just got bits and bobs in my bum bag.", function(done) {
		assert.equal(translate.toAmerican("I've just got bits and bobs in my bum bag.")[0], "I've just got odds and ends in my fanny pack.")
		done()
	})
	// Test 17
	test('The car boot sale at Boxted Airfield was called off.', function(done) {
		assert.equal(translate.toAmerican('The car boot sale at Boxted Airfield was called off.')[0], 'The swap meet at Boxted Airfield was called off.')
		done()
	})
	// Test 18
	test('Have you met Mrs Kalyani?', function(done) {
		assert.equal(translate.toAmerican('Have you met Mrs Kalyani?')[0], 'Have you met Mrs. Kalyani?')
		done()
	})
	// Test 19
	test("Prof Joyner of King's College, London.", function(done) {
		assert.equal(translate.toAmerican("Prof Joyner of King's College, London.")[0], "Prof. Joyner of King's College, London.")
		done()
	})
	// Test 20
	test('Tea time is usually around 4 or 4.30.', function(done) {
		assert.equal(translate.toAmerican('Tea time is usually around 4 or 4.30.')[0], 'Tea time is usually around 4 or 4:30.')
		done()
	})
	// Test 21
	test('Mangoes are my favorite fruit.', function(done) {
		assert.equal(translate.toBritish('Mangoes are my favorite fruit.')[1], 'Mangoes are my <span class="highlight">favourite</span> fruit.')
		done()
	})
	// Test 22
	test('I ate yogurt for breakfast.', function(done) {
		assert.equal(translate.toBritish('I ate yogurt for breakfast.')[1], 'I ate <span class="highlight">yoghurt</span> for breakfast.')
		done()
	})
	// Test 23
	test('We watched the footie match for a while.', function(done) {
		assert.equal(translate.toAmerican('We watched the footie match for a while.')[1], 'We watched the <span class="highlight">soccer</span> match for a while.')
		done()
	})
	// Test 24
	test('Paracetamol takes up to an hour to work.', function(done) {
		assert.equal(translate.toAmerican('Paracetamol takes up to an hour to work.')[1], '<span class="highlight">Tylenol</span> takes up to an hour to work.')
		done()
	})

});
