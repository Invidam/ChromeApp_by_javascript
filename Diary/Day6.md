# 바닐라 JS로 크롬 앱 만들기 Day6
+ 범위: 4.2 ~ 4.3

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
