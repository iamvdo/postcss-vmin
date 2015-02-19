var fs      = require('fs');
var postcss = require('postcss');
var expect  = require('chai').expect;

var plugin = require('../');

var test = function (name, opts) {
  var input  = read('test/fixtures/' + name + '.css');
  var output = read('test/fixtures/' + name + '.out.css');
  expect(postcss(plugin(opts)).process(input).css).to.eql(output);
};
var testString = function (input, output, opts) {
  expect(postcss(plugin(opts)).process(input).css).to.eql(output);
};
var read = function (path) {
  return fs.readFileSync(path, 'utf-8');
};

describe('postcss-vmin', function () {

  describe('adds fallback vm unit', function () {

    it('simple', function () {
      test('simple');
    });
    it('in MQs', function () {
      test('mq');
    });
    it('in functions (calc, linear-gradient)', function () {
      test('functions');
    });
    it('multiple times in same value', function () {
      test('multiple');
    });

  });

});
