// 열거형
var Fruit;
(function (Fruit) {
    Fruit[Fruit["Apple"] = 0] = "Apple";
    Fruit[Fruit["Banana"] = 1] = "Banana";
    Fruit[Fruit["Orange"] = 2] = "Orange";
})(Fruit || (Fruit = {}));
var var1 = Fruit.Apple;
var var2 = Fruit.Apple;
var Cafe;
(function (Cafe) {
    Cafe[Cafe["CafeBene"] = 0] = "CafeBene";
    Cafe[Cafe["Starbucks"] = 10] = "Starbucks";
    Cafe[Cafe["Ediya"] = 11] = "Ediya"; // Ediya = 10을 해 Starbucks와 겹쳐도 됨
})(Cafe || (Cafe = {}));
//console.log(Cafe.CafeBene, Cafe.Starbucks, Cafe.Ediya) <- 0 10 11
console.log(Cafe.Starbucks === Cafe['Starbucks']); // true
console.log(Cafe[10]); //Starbucks
//열거형에서 각 원소는 이름과 값이 양방향 매핑이 되 value로 key를 찾을 수 있다
var Phone;
(function (Phone) {
    Phone["Samsung"] = "gallaxy";
    Phone["Apple"] = "iphone";
    Phone["LG"] = "v-series";
})(Phone || (Phone = {})); // 여기선 iphone을 넣어 Apple을 찾을 수 없다. 문자열 값이 들어가면 key와 value가 같을 수 있기 때문.
function getEnumLength(enumObject) {
    var keys = Object.keys(enumObject);
    return keys.reduce(function (acc, key) { return (typeof enumObject[key] === "string" ? acc + 1 : acc); }, 0 // 0부터 시작해 열거 변수를 순회하며 string의 갯수 반환
    );
}
function isValidEnumValue(enumObject, value) {
    if (typeof value === 'number') {
        return !!enumObject[value]; // undefined가 뜨면 false, 이름이 뜨면 true
    }
    else {
        return (Object.keys(enumObject)
            .filter(function (key) { return isNaN(Number(key)); })
            .find(function (key) { return enumObject[key] === value; }) != null); // 입력값이 열거변수에 존재하는지 검사
    }
}
console.log(getEnumLength(Fruit), getEnumLength(Phone));
console.log('1 in Fruit : ', isValidEnumValue(Fruit, 1));
console.log('5 in Fruit : ', isValidEnumValue(Fruit, 10));
console.log('LG in Phone : ', isValidEnumValue(Phone, 'gallaxy'));
console.log('Window phone in Phone : ', isValidEnumValue(Phone, 'Window phone'));
var space = "this is earth." /* Earth */;
