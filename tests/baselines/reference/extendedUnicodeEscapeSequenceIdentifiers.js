//// [tests/cases/compiler/extendedUnicodeEscapeSequenceIdentifiers.ts] ////

//// [extendedUnicodeEscapeSequenceIdentifiers.ts]
const \u{0061} = 12;
const a\u{0061} = 12;

console.log(a + aa);


//// [extendedUnicodeEscapeSequenceIdentifiers.js]
const \u{0061} = 12;
const a\u{0061} = 12;
console.log(a + aa);
