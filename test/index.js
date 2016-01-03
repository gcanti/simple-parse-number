var tape = require('tape');
var parseNumber = require('../.');

tape('parseNumber(s, options)', function (t) {

  t.test('should default to US format', function (assert) {
    assert.plan(5);
    assert.strictEqual(parseNumber('0.00'), 0);
    assert.strictEqual(parseNumber('0.12'), 0.12);
    assert.strictEqual(parseNumber('1,000.00'), 1000);
    assert.strictEqual(parseNumber('1,000.342'), 1000.342);
    assert.strictEqual(parseNumber('-1,000.342'), -1000.342);
  });

  t.test('should handle options.symbols', function (assert) {
    assert.plan(3);
    assert.strictEqual(parseNumber('1.000,342', { decimal: ',', grouping: '.' }), 1000.342);
    assert.strictEqual(parseNumber('-1.000,342', { decimal: ',', grouping: '.' }), -1000.342);
    assert.strictEqual(parseNumber('-1,000.342'), -1000.342);
  });

});

