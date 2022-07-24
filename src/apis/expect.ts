import * as jestUtils from "@jest/expect-utils";

/**
 * expect({ a: 123 }).toEqual({ a: 123 }) -> true
 * @param a 
 * @returns toEqual(b) -> boolean
 */
export default function (a: any) {
  try{
  const eq = jestUtils.equals;
    return {
      toEqual(b: any) {
        return eq(a, b);
      },
    };
  }catch(error){
    throw(error);
  }
}
