var defaults = {
  grouping: ',',
  decimal: '.'
};
var regexp = /([.*+?^${}()|[\]\/\\])/g;

function escapeRegexp(s) {
  return s.replace(regexp, '\\$1');
}

function stripSymbols(s, grouping, decimal) {
  return s
    .replace(new RegExp(escapeRegexp(grouping), 'gm'), '')
    .replace(new RegExp(escapeRegexp(decimal), 'gm'), '.');
}

function parseNumber(s, options) {
  options = options || defaults;
  return parseFloat(stripSymbols(s, options.grouping, options.decimal));
}

module.exports = parseNumber;