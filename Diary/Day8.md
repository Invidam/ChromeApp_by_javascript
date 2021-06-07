# 바닐라 JS로 크롬 앱 만들기 Day8,9
+ 범위: 4.5 ~ 4.7

## 4.5, 4.6 Making a To Do List
### 구현할 것들

#### 불러오기
1. 저장된 것들을 불러온다.

#### 추가
1. html에서, form으로 text를 입력받는다.
2. 이를 ul->li에 추가한다.
3. 추가된 것은 저장된다.


#### 삭제
1. html에서의 삭제
2. localSorage에서의 삭제

### 구현과정-불러오기
+ 1번 과정
  + localStorage가 null이 아니라면 저장된 값들을 `paintToDo()` 로 보이게끔 한다.
    + localStorage에는 string밖에 저장이 안되므로 (js type은 저장X) JSON.stringify()로 string화 시킨다.
    + string->object는 `JSON.parse()`로 한다.
    + `배열.forEach(function(배열의 원소) {함수 내용})` : 배열의 각 원소에 대해 함수를 실행한다.


### 구현과정-추가
+ 1번 과정
  + addEventListener에 의해 입력받은 것은 `handleSubmit()` 로 간다.
  + 이를 `paintToDo()` 로 추가시킨다.

+ 2번 과정
  +` paintToDo()` 에서 `document.createElement() `로 각각 태그들을 변수에 저장시킨다.
  + `appendChild()` 를 통해 li의 자식에 해당 태그들을 추가시킨 후 `toDoList(ul)` 에 li를 추가시킨다.

+ 3번 과정
  + `paintToDo()` 에서 text를 toDoObj에 저장시켜 toDos에 push한 후 toDos를 localStorage에 갱신한다.

### 구현과정-삭제
+ `loadToDos() -> paintToDo() -> delBtn.addEnvetListener("click")` 로 감지한다.
  + 1번 과정- html에서의 삭제
    + `event.target`으로 해당 요소를 변수화한다.
    + `toDoList.removeChild(요소.parentNode)`로 삭제한다.
  + 2번 과정- localStorage에서의 삭제
    + `filter()` 로 새 배열을 만든 후 이를 save한다.
      + `배열.filter(function(배열의 원소) { 함수 내용 })` : 함수 내용이 참인 원소들만 따로 배열을 만듬
