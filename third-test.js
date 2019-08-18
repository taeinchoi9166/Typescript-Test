// function getInfoText(name: string, age: number) : string {
//     const nameText = name.substr(0, 10)
//     const ageText = age >= 19 ? 'adult' : 'teen'
//     return `name: ${nameText}, age: ${ageText}`
// }
var getInfoText = function (name, age) { return "name: " + name + ", age: " + (age >= 19 ? 'adult' : 'teen'); };
var v1 = getInfoText('mike', 23);
//const v2 : string = getInfoText('mike', '23') -> type error
console.log(v1);
function getInfoText2(name, age, lang) {
    var nameText = name.substr(0, 10);
    var ageText = age >= 19 ? 'adult' : 'teen';
    var langText = lang ? lang.substr(0, 10) : '';
    return "name: " + nameText + ", age: " + ageText + ", lang: " + langText;
}
console.log(getInfoText2('money', 10, 'korean'));
console.log(getInfoText2('andy', 20));
// function errorMaker(name?: string, age: number) : string{ <- 선택 매개변수의 오른쪽에는 필수 매개변수가 오면 안됨.
//     return 'error!'
// }
function errorMaker(name, age) {
    return 'error!';
}
function getTextWithDefault(name, age, lang) {
    if (age === void 0) { age = 20; }
    if (lang === void 0) { lang = 'ko'; }
    return "name: " + name + ", age: " + age + ", lang: " + lang;
}
console.log(getTextWithDefault('name'));
console.log(getTextWithDefault('name', 10));
console.log(getTextWithDefault('name', 30, 'en'));
var func = getTextWithDefault;
function getInfoText3(name) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return rest[0] || '나머지 매개변수가 없느니라.';
}
function getParam(index) {
    var params = this.split(','); // 기본적으로 this의 형은 any이기 때문에 에러가 안남
    if (index < 0 || params.length <= index) {
        return '';
    }
    return this.split(',')[index];
}
function getParam2(index) {
    var params = this.split(','); //this.splt으로 쓰면 에러가 뜸
    if (index < 0 || params.length <= index) {
        return '';
    }
    return this.split(',')[index];
}
String.prototype.getParam = getParam; //이미 있는 String 객체에 함수 추가
console.log('asdf'.getParam(1)); // 함수 호출 가능
function add(x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    else {
        return (Number(x) + Number(y)).toString();
    }
}
console.log(add('1', 2));
function adding(x, y) {
    return typeof x === 'number' && typeof y === 'number' ? x + y : (Number(x) + Number(y)).toString();
}
console.log(adding('1', '4'));
console.log(adding(1, 4));
//console.log(adding(1,'2')) <- 이러면 에러
