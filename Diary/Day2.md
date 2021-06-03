# 바닐라 JS로 크롬 앱 만들기 Day2
+ 범위: 2.6 ~ 2.10


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
