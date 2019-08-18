let v1 = 123;
//v1 = 'abc' <- 타입에러
let v2 = 123;
v2 = 'abc'; // <- 됨
// ---- ts 타입 ----
const size = 123;
const isBig = size >= 100;
const msg = isBig ? '크다' : '작다';
const values = [1, 2, 3];
const values2 = [1, 2, 3];
values.push(4); //values.push('a') <- 타입 에러
const data = [msg, size];
data[0].substr(1);
// data[1].substr(0) <- 타입에러
let v3 = undefined;
let v4 = null;
//v3 = 123 <- type error
let v5 = undefined;
v5 = 9999;
// ---- 문자 및 숫자 리터럴
let v6;
v6 = 10;
//v6 = 100 <- type error
let v7;
v7 = '테란';
// v7 = '프로토스' <- type error
let v8;
v8 = 'all';
v8 = 13333;
v8 = () => { };
// -- void, never
function f1() {
    console.log('void!');
}
function f2() {
    throw new Error('error!');
}
function f3() {
    while (true) {
    }
}
// -- object
let obj;
obj = { k: 'v' };
//console.log(obj.k) <- 에러. 인터페이스를 정의해야한다
// 합집합, 교집합 타입
let v9; // 교집합
v9 = 5;
// v9 = 1 <- type error
let v10; //합집합
v10 = 'c';
let wid = '10px';
wid = 9;
//# sourceMappingURL=first-test.js.map