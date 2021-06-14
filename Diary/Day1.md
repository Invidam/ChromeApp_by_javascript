# 바닐라 JS로 크롬 앱 만들기 Day1
+ 범위: 1.0 ~ 1.5


## 1.0 Why JS?
+ Javascript : 웹을 만드는 용도.
  + Backend: 여러 언어 있음.
  + Frontend: Javascript만 있음.

+ 90s, 이벤트 용도로만 쓰임.
+ 현재 웹 발전하며, 할 수 있는 것들이 많아짐.
  + 웹, 웹 앱, 어플, 프로그램(vscode, atom 등)


## 1.1 Super Powers of JS
+ 웹을 Interactive하게 만들 수 있음.

## 1.2 ES5, ES6 ES....!?!?!
+ ES: ECMASCripts : Specification(사용 설명서)에 대한 Update
  + 브라우저에 따라 실행방식은 다름, 결과는 같음
  + https://www.youtube.com/watch?v=wcsVjmHrUQg
    + js 역사 설명 영상

## 1.3 VanillaJS
+ VanillaJS는 브라우저를 통해 제공된 JS이다. (?)

+ 많은 사람들이 Library, Framework를 쓰느라, JS에 대한 지식은 부족하다.fv
  + 도구를 잘 쓰는게 아니라, 핵심을 잘 알아야 함.

## 1.4 Hello World with Javascript
+ alert, console.log를 이용해 출력

## 1.5 What are we learning


## 2.6 Your first JS Variable(변수!)
+ JS는 오류가 있어도 실행이 됨.
  + expresssion이 끝나는 자리에 ';'를 입력하는 것이다.
+ 변수: 바뀌거나 바뀔 수 있는 것
  + Create -> Initialize -> Use
  + let, var

## 2.7 let, const, var
+ const는 상수로 바꿀 수 없다.
  + (상수 변수에 할당했다는 오류)


+ var : 예전에 사용하던 변수
  + 값 변경가능
  + 다시 선언해도 에러가 안나오고 같은 변수임에도 다른 갑싱 출력됨
    + (재선언이 가능)

## 2.8 Data Types on JS
+ 주석처리 : // or /* */
+ 변수사용규칙: 첫 사용은 const를 사용

+ String: 모든걸 갖다 붙인 것, 처음과 끝이 있음.
  + '' (single quote) : 일반적 (문자, 문자열의 구분이 없기 때 ) [통계가 높음]
  + "" (double quote) : json요청 때문에 사용

## 2.9 Organizing Data with Arrays
+ camelCase (낙타) : 변수명의 시작은 소문자, 중간에 스페이스가 필요하면 대문자를 사용 (스페이스를 쓸 수 없으므로)

+ Array : []로 구분 (data, string 상관없이)
  + 출력도 array변수 자체 출력이 가능
  + 여러 dataType도 같이  저장이 가능

## 2.10 Organizing Data with Objects

+ Object : {variable : value, var: val }로 구분
  + 접근: Object.var = val


+ const임에도 객체안의 변수는 바꿀 수 있다. 단, 객체 자체를 바꾸지 못한다.

+ Array: idx구분이 직관적일 때
+ Object: idx구분에 변수(문자)가 필요할 때
+ 객체안에 배열을 넣을 수 있고, 배열안에 객체를 넣을 수도 있다.


## 3.0 Your first JS Function
+ `console.log`에서, console은 object이고, log는 function이다.

+ 많은 함수들은 built-in function (내장함수)이다.

+ 함수: 원하는 만큼 쓸 수 있는 코드

+ `function [함수이름](argument) {
  내용
}`
  +  argument에서, let, const는 사용하지 않아도 된다.
  + 내용, return ();

## 3.1 More Function Fun
+ backtick : `으로 만들어진 공간에 ${변수명}으로 변수를 입력할 수 있음.```
  + 가독성이 좋다.
  + 문자열에 변수를 줄 수 있다.
+ 객체안에 함수를 넣을 수도 있다.
  + 이는 객체.함수로 실행한다. ex) calc.plus(1,2);

## 3.2 JS DOM Functions
+ JS는 html의 태그를 객체로 갖는다.

+ DOM : documentObjectModule
  + 웹페이지를 조작할 수 있는 인터페이스
    + HTML, CSS, Event를 조작 가능


+ document : HTML을 대표하는 객체이다.
+ getElementById() : id에 해당하는 태그를 리턴한다.
  + dir: 태그의 정보를 보여준다.
  + innearHTML : js를 통해 태그안의 내용을 바꿀 수 있다.

## 3.3 Modifying the DOM with JS
+ querySelector : css와 같은 형식으로 태그를 가져옴.
  + ("tag"), ("#id"), (".class")처럼

## 3.4 Events and events handler

+ handleReszie() : 즉시 한번 실행
+ handleReszie : 필요할 때마다 실행
  + 인자는 js함수에서 자동으로 부여한다.

## 3.5 If, else, and, or
+ `if() {} else if {} else {}` : 조건문
  + 비교는 `===`으로
  + 피연산자 `&&`, `||`
+ 삼항연산자 사용은 가능하지만, 반복사용은 안된다.

## 3.6 DOM - If else - Function practice
+ js dom event mdn
  + event에 대한 검색이 됨
  + 클릭, 마우스 이동, 와이파이 작동여부 등


+ if문을 이용해 이벤트가 일어날 때 문자의 색깔을 바꿀 수 있다.

## 3.7 DOM - If else - Function practice Two
+ if문으로 문자의 색을 바꾸는 것은 css의 역할이므로 클릭시에 class를 설정하여(js-로직만을 설정) class에 따라 css에서 색상을 바꾸게 한다.

+ btn class의 설정을 유지하기 위 classList(메소드)를 이용해 add/ remove/ contains 함수를 사용한다.
  + contains가 참 -> 제거 / 거짓 -> 추가
  + 이를 압축한 함수가 toggle이다.


## 4.0, 4.1 Making a JS Clock
+ class 이름 방식
  + HTML에서는 js에서도, css에서도 활용하기 위해 `js-class` 처럼 짓는다.
  + JS에서는 `.js-class`로 받는다

+ 시간을 적용하는 방법
  + JS, Date 객체의 getHours,Minutes, Seconds 함수를 이용한후 리터럴로 표현한다.

+ 시간을 연속적으로 표현하는 방법
  + setInterval(func,ms);
    + fun은 ()을 붙이면 한번만 실행되므로 떼야한다.
    + 5s -> 05s로 바꾸는 방법은 `${}`안에 삼항연산자를 적용시켜 한다
      + ex) ``` `${second < 10 ? `0${seconds}` : seconds}` ```

## 4.2, 4.3 Saving the User Name
+ querySelectorAll 모든 el을 arr로 가져옴
+ Local storage : 내 컴퓨터에 정보를 저장함
  + `setItem(key, value)` : 추가
  + `getItem(key)` : key에 해당하는 value 가져오기


+ local stroage에 userName 저장하기
  + 입력창을 유저네임의 저장유무에 따라 보이게/보이지 않게 하기
    + `if(getItem() === null )`
      1. form을 보이게 한다. (classList설정 + css, display:block)
      2. form에 수를 입력하고 엔터를 누르면
      3. addEventListener에 의해 greeting part(`<h4>`)가 보이며, 이름이 localStorage에 저장된다.
    + `else`
      1. currentUser에 저장된 이름을 greeting part에서 보이게 한다.


+ addEventListener에서 event란?
  + 소문과 같은 것. 실행되었던 form -> document -> program까지 올라가며 여러 동작이 실시됨
    + ex) 웹페이지가 새로고침되는 것
    + preventDefault()로 해제 가능.
