let pluralize = require('pluralize');

console.log(pluralize('test', 0)) //=> "tests"
console.log(pluralize('test', 1)) //=> "test"
console.log(pluralize('test')) //=> "tests"

