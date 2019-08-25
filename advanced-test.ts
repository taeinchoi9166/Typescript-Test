interface Person {
    name: string,
    age: number
}
interface PersonOptional{
    name?: string,
    age?: number
}

interface PersonReadOnly{
    readonly name: string,
    readonly age: number
}

type T1 = { [K in 'prop1' | 'prop2']: boolean} // 맵드 타입 각각 속성에게 타입을 지정한다
// ({prop1: boolean, prop2:boolean})

type MakeBoolean<T> = {[P in keyof T]?: boolean} // T타입의 키 각각을 boolean으로 변환
const pMap: MakeBoolean<Person> = {} //pMap : {name: str, age: num} => {name, age = boolean}
pMap.name = true;
pMap.age = false;

type T2 = Person['name'] // string
type RO<T> = {readonly [P in keyof T]: T[P]} //readonly타입 구현 - T타입안 P 속성을 읽기용 속성으로 만듬
type PT<T> = {[P in keyof  T]?: T[P]} //Partical 타입 구현 - T타입 안 P 속성을 선택속성으로 만들어준다
type T3 = PT<Person>
type T4 = RO<Person>

type MyPick<T, K extends keyof T> = {[P in K]: T[P]} //<- Pick타입 구현 :T 타입의 그안의 속성K들을 모두 골라 변수에 해당 타입을 선언한다
interface P extends Person{ //K extends keyof T : T타입 속성집합을 확장한 속성 집합 K
    name:string,
    lang: string
}
type New = Pick<P, 'name' | 'lang'>;

// type MyRecoard<K extends string, T> = {[P in K]: T} <- Record 타입 구현 : string을 확장한 타입 K의 요소 속성들 P를 T로 변환
type T5 = Record<'p1' | 'p2', Person> //{p1:Person, p2:Person}

type IsStringType<T> = T extends string ? 'yes' : 'no'; //조건부 타입 : T가 string타입의 확장이면 'yes',아니면 'no'타입이 됨
type T10 = IsStringType<string> //'yes'
type T11 = IsStringType<number> //'no'
type T12 = IsStringType<string | number> // 'yes' | 'no'
const c : T10 = 'yes'

type ExcludeType<T,U> = T extends U ? never : T; //Exclude구현 - T, U모두 유니언 타입일 때 T와 U에 서로 없는 타입만 묶어 둔 타입
type ExtractType<T,U> = T extends U ? T : never; //Extract구현 - T, U모두 유니언 타입일 때 T와 U에 서로 있는 타입만 묶어둔 타입s

type ReturnTypeImpl<T> = T extends (...args: any[]) => infer R ? R : any //리턴타입 구현 - 함수의 반환 타입 추출
type T13 = ReturnType<() => string> //string
function f1(s: string) : number {
    return s.length
}
type T14 = ReturnType<typeof f1> // number                     