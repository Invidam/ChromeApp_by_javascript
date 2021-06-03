# 바닐라 JS로 크롬 앱 만들기 Day4
+ 범위: 3.5 ~ 3.7

## 3.5 If, else, and, or
+ `if() {} else if {} else {}` : 조건문
  + 비교는 `===`으로
  + 피연산자 `&&`, `||`

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
