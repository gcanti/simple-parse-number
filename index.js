function shallowCopy(a, b) {
  if (b) {
    for (var k in b) {
      if (b.hasOwnProperty(k)) {
        a[k] = b[k];
      }
    }
  }
  return a;
}

function getOptions(options) {
  var defaults = {
    grouping: ',',
    decimal: '.'
  };
  return shallowCopy(defaults, options);
}

var regexp = /([.*+?^${}()|[\]\/\\])/g;

function escapeRegexp(s) {
  return s.replace(regexp, '\\$1');
}

function stripSymbols(s, grouping, decimal) {
  s = s.replace(new RegExp(escapeRegexp(grouping), 'gm'), '');
  return s.replace(new RegExp(escapeRegexp(decimal), 'gm'), '.');
}

function parseNumber(s, options) {
  options = getOptions(options);
  return parseFloat(stripSymbols(s, options.grouping, options.decimal));
}

module.exports = parseNumber;