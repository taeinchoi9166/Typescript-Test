// 열거형
enum Fruit {
    Apple,
    Banana,
    Orange
}

const var1 : Fruit = Fruit.Apple
const var2 : Fruit.Apple | Fruit.Orange = Fruit.Apple

enum Cafe {
    CafeBene, //미설정시 처음에 0 부터
    Starbucks= 10, //  다음 원소 값이 전 것의 +1, 원소값 변경해도 동일 하게 적용됨
    Ediya // Ediya = 10을 해 Starbucks와 겹쳐도 됨
}
//console.log(Cafe.CafeBene, Cafe.Starbucks, Cafe.Ediya) <- 0 10 11

console.log(Cafe.Starbucks === Cafe['Starbucks']) // true
console.log(Cafe[10]) //Starbucks
//열거형에서 각 원소는 이름과 값이 양방향 매핑이 되 value로 key를 찾을 수 있다

enum Phone {
    Samsung = "gallaxy",
    Apple = "iphone",
    LG = "v-series"
} // 여기선 iphone을 넣어 Apple을 찾을 수 없다. 문자열 값이 들어가면 key와 value가 같을 수 있기 때문.

function getEnumLength(enumObject: any) {
    const keys = Object.keys(enumObject)

    return keys.reduce(
        (acc, key) => (typeof enumObject[key] === "string" ? acc + 1 : acc), 0 // 0부터 시작해 열거 변수를 순회하며 string의 갯수 반환
    )
}

function isValidEnumValue(enumObject: any, value: number | string) {
    if(typeof value === 'number'){
        return !!enumObject[value] // undefined가 뜨면 false, 이름이 뜨면 true
    }else{
        return (Object.keys(enumObject)
            .filter(key => isNaN(Number(key)))
            .find(key => enumObject[key] === value ) != null); // 입력값이 열거변수에 존재하는지 검사
    }
}

console.log(getEnumLength(Fruit), getEnumLength(Phone))
console.log('1 in Fruit : ', isValidEnumValue(Fruit,1))
console.log('5 in Fruit : ', isValidEnumValue(Fruit, 10))
console.log('LG in Phone : ', isValidEnumValue(Phone, 'gallaxy'))
console.log('Window phone in Phone : ', isValidEnumValue(Phone, 'Window phone'))

const enum Space {
    Earth = "this is earth.",
    Mars = "this is mars",
    Sun = "this is sun."
}

const space : Space = Space.Earth
// console.log(getEnumLength(Space)) <- type error. Spcae

