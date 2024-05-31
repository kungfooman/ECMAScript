//// [tests/cases/compiler/declarationEmitCastReusesTypeNode5.ts] ////

//// [declarationEmitCastReusesTypeNode5.ts]
export const vNumberLiteral = null! as 1 | 1
export const vStringLiteral = null! as "1" | "1"
export const vLiteral = null! as "1" | "1"

type R = { foo: string }

export class C {
    // under !strictNullChecks all types can be reused from the assertion
    // under strictNullChecks we need to add undefined, and we can't always know we can
    // Can't know if references contain undefined, fall back to inference
    tsResolve? = null! as R | R;
    tsResolve2? = null! as R | R | string;
    // Simple type. we can add undefined
    reuseType? = null! as ((p: R) => void) | string | string;
    reuseType2? = null! as (new (p: R) => R) | string | string;
    reuseType3? = null! as string | number | bigint | symbol | unknown | any | never | symbol;
    reuseType4? = null! as [R, R, R] | [R, R, R];
    reuseType5? = null! as R[] | R[];
    reuseType6? = null! as 1 | "2" | 1n | 1n;
    reuseType7? = null! as `A` | `A`;
    reuseType8? = null! as `${string}-ok` | `${string}-ok`;
    reuseType9? = null! as this | this;
}



//// [declarationEmitCastReusesTypeNode5.d.ts]
export declare const vNumberLiteral: 1 | 1;
export declare const vStringLiteral: "1" | "1";
export declare const vLiteral: "1" | "1";
type R = {
    foo: string;
};
export declare class C {
    tsResolve?: R | R;
    tsResolve2?: R | R | string;
    reuseType?: ((p: R) => void) | string | string;
    reuseType2?: (new (p: R) => R) | string | string;
    reuseType3?: string | number | bigint | symbol | unknown | any | never | symbol;
    reuseType4?: [R, R, R] | [R, R, R];
    reuseType5?: R[] | R[];
    reuseType6?: 1 | "2" | 1n | 1n;
    reuseType7?: `A` | `A`;
    reuseType8?: `${string}-ok` | `${string}-ok`;
    reuseType9?: this | this;
}
export {};
