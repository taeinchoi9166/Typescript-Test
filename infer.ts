interface Person{
    name:string,
    age: number
}
interface Korean extends Person{
    liveInSeoul: boolean
}
interface Japanese extends Person{
    liveInTokyo: boolean
}

let p1: Person = {name: 'master', age:10}
let p2: Korean = {name:'mentro', age:20, liveInSeoul:false}
let p3: Japanese = {name:'dcafrio', age:30, liveInTokyo:false}
const arr1 = [p1,p2,p3] // 배열중 다른 타입으로 할당 될 수 있는 타입을 없애고, 유니온타입으로 만듬. -> arr1: person[]
const arr2 = [p2,p3] // arr2 : (korean,japanese)[]

// 타입가드 : 조건문으로 타입범위를 좋비는 기능, typeof, instanceof(단, value instanceof [인터페이스] 형식으로 쓰면 안됨.),in