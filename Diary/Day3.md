# 바닐라 JS로 크롬 앱 만들기 Day3
+ 범위: 3.1 ~ 3.4

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

## 3.4

+ handleReszie() : 즉시 실행
+ handleReszie : 필요할 때 실행
  + 인자는 js함수에서 자동으로 부여한다.
