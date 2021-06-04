# 바닐라 JS로 크롬 앱 만들기 Day5
+ 범위: 4.0 ~ 4.1

## 4.0 Making a JS Clock part One
+ class 이름 방식
  + HTML에서는 js에서도, css에서도 활용하기 위해 `js-class`, `css-class` 처럼 짓는다.
  + JS에서는 `.js-class`로 받는다
  + CSS에서는 `.css-class`로 받는다.

+ 시간을 적용하는 방법
  + JS, Date 객체의 getHours,Minutes, Seconds 함수를 이용한후 리터럴로 표현한다.

+ 시간을 연속적으로 표현하는 방법
  + setInterval(func,ms);
    + fun은 ()을 붙이면 한번만 실행되므로 떼야한다.
    + 5s -> 05s로 바꾸는 방법은 `${}`안에 삼항연산자를 적용시켜 한다
      + ex) ``` `${second < 10 ? `0${seconds}` : seconds}` ```
