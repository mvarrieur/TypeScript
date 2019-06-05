/// <reference path="fourslash.ts" />

// https://github.com/Microsoft/TypeScript/issues/15452

// @Filename: /a.ts
////[|export const [|{| "isWriteAccess": true, "isDefinition": true, "declarationRangeIndex": 0 |}x|] = 0;|]

// @Filename: /b.ts
////import "./a";

verify.singleReferenceGroup("const x: 0", "x");
