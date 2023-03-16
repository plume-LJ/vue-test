type TupleToObject<T extends readonly any[]> = {
  [K in T[number]]: K
}


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
const tupleNumber = [1, 2, 3, 4] as const
const tupleMix = [1, '2', 3, '4'] as const

type case1 = TupleToObject<typeof tuple>
type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }>>,
  Expect<Equal<TupleToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4 }>>,
  Expect<Equal<TupleToObject<typeof tupleMix>, { 1: 1; '2': '2'; 3: 3; '4': '4' }>>,
]
const tuple2 = [[1, 2], {}] as const
type TupleToObject1<T extends readonly any[]> = Omit<T, keyof any[]>
type error1 = TupleToObject1<typeof tuple>
// @ts-expect-error
type error = TupleToObject<typeof tuple2>
type c = Readonly<typeof tuple2>
type cc =  {}
let c:cc = 2
let bb = typeof c