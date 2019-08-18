let v1 = 123
//v1 = 'abc' <- 타입에러

let v2 : number | string = 123
v2 = 'abc' // <- 됨

// ---- ts 타입 ----
const size : number = 123
const isBig : boolean = size >= 100
const msg : string = isBig ? '크다' : '작다'

const values : number[] = [1,2,3]
const values2 : Array<number> = [1,2,3]
values.push(4) //values.push('a') <- 타입 에러

const data : [string, number] = [msg, size]
data[0].substr(1)
// data[1].substr(0) <- 타입에러

let v3 : undefined = undefined
let v4 : null = null
//v3 = 123 <- type error
let v5 : undefined | number = undefined
v5 = 9999

// ---- 문자 및 숫자 리터럴
let v6 : 10 | 20 | 30
v6 = 10
//v6 = 100 <- type error

let v7 : '저그' | '테란'
v7 = '테란'
// v7 = '프로토스' <- type error

let v8 : any
v8 = 'all'
v8 = 13333
v8 = () => {}

// -- void, never

function f1() : void {
    console.log('void!')
}
function f2() : never { //함수가 비정상적 종료
    throw new Error('error!')
}
function f3() : never { // 함수가 종료되지 않음
    while(true){

    }
}

// -- object

let obj : object
obj = {k:'v'}
//console.log(obj.k) <- 에러. 인터페이스를 정의해야한다

// 합집합, 교집합 타입
let v9 : (1 | 3 | 5) & (3 | 5 | 9) // 교집합
v9 = 5
// v9 = 1 <- type error
let v10 : ('a' | 'b') | ('c') //합집합
v10 = 'c'
// v10 = 'd' <- type error

// 타입에 별칭주기
type Width = number | string
let wid : Width = '10px'
wid = 9
