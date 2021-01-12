'use strict';

const repeatedWords = require('../repeated-word.js');

it('repeatedWords function should exist', () => {
  expect(repeatedWords).toBeDefined;
})

it('should return the first word that occur more than once in that provided string', () => {
  const string = repeatedWords('Once upon a time, there was a brave princess who');

  expect(string).toBe('a');
})

it('should return the first word that occur more than once in that provided string when that repeated words occur many more times', () => {
  const string = repeatedWords('It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...');

  expect(string).toBe('it');
})

it('should return undefined when there is no repeated word in the string', () => {
  const string = repeatedWords('we had everything before us');

  expect(string).toBe(undefined);
})
