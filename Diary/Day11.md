# 바닐라 JS로 크롬 앱 만들기 Day11
+ 범위: 4.7 ~ 4.10

## 4.7 Image Background
+ random함수를 이용해 여러 이미지 중 하나를 골라 배경으로 설정한다.
+ https://unsplash.com/
  + 무료 이미지 찾는 사이트
+ https://flatuicolors.com/
  + 색 고르는 사이트

```
const img = new Image();
img.src = '().jpg';

```
: 이미지 변수화

```
.bgImage {
  position : absolute;
  top : 0;
  left : 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  animation : fadeIn .5s linear;
}

@keyframes fadeIn {
  from {
    opacity : 0;
  }
  to {
    opacity : 1;
  }
}
```
: 이미지 fadeIn + 배경화면 설정


## 4.8, 4.9 Getting the Weather  Geolocation
+ API: 다른서버로부터 Data를 쉽게 가져오는 수단.
+ 날씨 정보 가져오기 위한 방법
  1. `navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);`으로 팝업창을 통해 위치좌표 요청을 한다.
  2. 가져온 좌표를 localStorage에 set한다.
  3. 좌표에 따른 날씨를 get한다.
    + 이때 API가 사용되는데, https://openweathermap.org/ 를 이용했다.
