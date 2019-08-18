// function getInfoText(name: string, age: number) : string {
//     const nameText = name.substr(0, 10)
//     const ageText = age >= 19 ? 'adult' : 'teen'
//     return `name: ${nameText}, age: ${ageText}`
// }

const getInfoText : (name: string, age: number) => string = (name, age) => `name: ${name}, age: ${age >= 19 ? 'adult' : 'teen'}`

const v1 : string = getInfoText('mike', 23)
//const v2 : string = getInfoText('mike', '23') -> type error
console.log(v1)

function getInfoText2(name: string, age: number, lang?: string) : string {
    const nameText = name.substr(0, 10)
    const ageText = age >= 19 ? 'adult' : 'teen'
    const langText = lang ? lang.substr(0, 10) : ''
    return `name: ${nameText}, age: ${ageText}, lang: ${langText}`
}

console.log(getInfoText2('money', 10, 'korean'))
console.log(getInfoText2('andy', 20))

// function errorMaker(name?: string, age: number) : string{ <- 선택 매개변수의 오른쪽에는 필수 매개변수가 오면 안됨.
//     return 'error!'
// }
function errorMaker(name: string | undefined, age: number) : string{  // <- 이렇게 해야함.
    return 'error!'
}

function getTextWithDefault (name: string, age: number = 20, lang: string = 'ko') : string { // 파라미터 기본값 설정 : argName: type = value
    return `name: ${name}, age: ${age}, lang: ${lang}`
}

console.log(getTextWithDefault('name'))
console.log(getTextWithDefault('name',10))
console.log(getTextWithDefault('name',30,'en'))

const func : (name: string, age?: number, lang?: string) => string = getTextWithDefault


function getInfoText3(name: string, ...rest: string[]) : string {
    return rest[0] || '나머지 매개변수가 없느니라.'
}

function getParam(index: number) : string {
    const params = this.split(',') // 기본적으로 this의 형은 any이기 때문에 에러가 안남
    if(index < 0 || params.length <= index) {
        return ''
    }
    return this.split(',')[index]
}

function getParam2(this: string, index: number) : string { //매개변수에서 this의 형을 정의 할 수 있다.
    const params = this.split(',') //this.splt으로 쓰면 에러가 뜸
    if(index < 0 || params.length <= index) {
        return ''
    }
    return this.split(',')[index]
}

interface String { //원시타입의 인터페이스
    getParam(this: string, index: number): string
}

String.prototype.getParam = getParam //이미 있는 String 객체에 함수 추가
console.log('asdf'.getParam(1)) // 함수 호출 가능

function add(x: number | string, y: number | string) : number | string {
    if(typeof x === 'number' && typeof y === 'number'){
        return x + y
    }else{
        return (Number(x) + Number(y)).toString()
    }
}

console.log(add('1',2))

function adding(x: number, y: number) : number
function adding(x: string, y: string) : string

function adding(x: number | string, y: number | string) : number | string {
    return typeof x === 'number' && typeof y === 'number' ? x + y : (Number(x) + Number(y)).toString()
}

console.log(adding('1','4'))
console.log(adding(1,4))
//console.log(adding(1,'2')) <- 이러면 에러

function getInfoText4({name, age = 15, language}: {name: string, age: number, language: string}) : string { //명명된 매개변수들의 타입정의 - 명명된 매개변수 ({arg2, arg2}) => arg1
    return `name: ${name.substr(0,10)}, age: ${age}, language: ${language}`
}

interface Param {
    name: string,
    age?: number,
    language? : string
}

function getInfoText5({name, age = 15, language}: Param) : string { // 명명 매개변수의 타입정의를 원하면 interface사용
    return `name: ${name.substr(0,10)}, age: ${age}, language: ${language}`
}