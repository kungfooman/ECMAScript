//// [tests/cases/conformance/decorators/invalid/decoratorOnFunctionExpression.ts] ////

//// [decoratorOnFunctionExpression.ts]
declare function dec<T>(target: T): T;

var F = @dec function () {
}

//// [decoratorOnFunctionExpression.js]
var F = ;
function () {
}
