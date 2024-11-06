 
# 한 발자국도 걸을 수 없다
[![한발자국도걸을수없다](https://github.com/user-attachments/assets/e954930e-58cf-4382-884e-263f4b15cdea)](https://www.youtube.com/watch?v=syRB6I2_28w)
💡 이미지 클릭 시, 이번역 소개 영상 페이지로 이동합니다. _youtube_ <br>
💡 기능별 GIF가 있으니, 잠시 기다려주세요.

<br>

## < 기획 의도 >
* 한 발자국도 걸을 수 없다.
  * 현대인에게 지하철은 가장 중요한 교통 수단의 하나
  * 환자, 장애인을 비롯한 약자와 짐이 많은 관광객들의 지하철 이용 시 편의성 증가
  * 전국 모든 지하철 역의 **15가지 정보 제공**
     * **정확한 정보 제공을 위해 위, 경도를 비롯해 데이터 전처리 과정을 직접 설정하였음 (약 40,000건)**
  * 역 까지의 **길 찾기** 기능 및 **역 정차 시 해당 역 조회** 기능, **호선 별 채팅** 서비스 등으로 지하철과 관련된 <br>
    이야기를 나눌 수 있는 공간 제공

 <br>
 
 ## < 서비스 소개 >
* 회원 가입 및 로그인 기능
* 지하철 혼잡도를 비롯한 역 내 편의 시설 조회 기능
* 도보, 자전거를 활용한 길 찾기 기능
* 지하철 호선, 지역별 실시간 채팅 기능

<br>

## < 팀원 구성 및 프로젝트 기간 >
* 기간 : 2024.07.02 ~ 2024.11.07
* 팀원 구성
  
  |정은아|임혜연|김보민|권윤슬|
  |:---:|:---:|:---:|:---:|
  |팀장, BE|BE|FE|FE|

<br>

## < 기술 스택 >
### ✔️Frond-end
        * Library : React, react-kakao-maps-sdk, react-quill, dompurify, lodash
        * Styling : styled-components, react-icons
        * Data Fetching : axios
        * WebSocket : stompjs
        * State Management : redux js toolkit
        * State Form : React Hook Form
        * Module Bundler : Vite

### ✔️Back-end
        * Framework : Spring
        * Library : SpringBoot, Lombok, Spring Web, Validation, Nurigo SDK,
                    Spring Security, jwt, Oauth2.0, jbcrypt, AWS
        * Databse : MySql
        * Language : Java 17 
        
<br>

## < 아키텍쳐 >
<img src="https://github.com/None-Step/None-Step-BE/blob/main/Architecture.png" width="600" height="400"/>

<br>

---

# < 이번역 메인 기능 소개> 

## 🚇 01. 회원 가입 및 로그인

![member](https://github.com/user-attachments/assets/89776a24-4c20-4573-a373-a1bfac49c7bc)

   * 카카오, 네이버 소셜 로그인
   * 일반 로그인
     * 소셜, 일반 회원 구분을 위해 닉네임 & 숫자 태그 부여 → **다중 유니크** 적용
     * 회원 가입 시, 유효성 검사 진행
   * **JWT** 기반 Refresh Token, Access Token 사용
   * 회원 가입 시 비밀번호 Bcrypt화
   * 회원 가입 후 프로필 편집 가능

<br>

## 🚇 02. 지하철 탑승 후 정차시 역 조회

![bong](https://github.com/user-attachments/assets/f0e574cd-421c-4212-b6e6-95776fb18a6e)
![guro](https://github.com/user-attachments/assets/dedd063a-1c6d-42f8-b170-31b0483c1b0b)

   * **구형 좌표계**를 이용하여 사용자 위치에서 가장 가까운 역 1개 추출
   * **GeoLocation → WatchPosition**으로 변경하여 Android 및 IOS 휴대폰 에서도 역 조회 가능
     * 추적 시작 후 중지하지 않고 지속적으로 역 조회 가능
     * 추적 시작 → 추적 중지 버튼 반복적으로 누르며 역 조회 가능

  <br>
  
## 🚇 03. 지도(편의시설 바로가기)

![info](https://github.com/user-attachments/assets/bee205f5-4c86-4aa7-ad97-7107c52e1151)


* **구형 좌표계**를 이용하여 지도의 일정 반경 내 위치한 역 조회 가능
  * 지도에서 **마커 별 정보 조회 가능**
  * 조회 가능한 편의 시설
    * 역 정보 전체
    * 엘리베이터 위치
    * 출구별 에스컬레이터 위치
    * 화장실
    * 장애인 화장실
    * 휠체어 리프트 위치
    * 수유실
    * ATM
    * 제세동기
    * 전동 휠체어 충전 설비
    * 고객 센터
    * 이격 거리 및 추가 정보(계단, 엘리베이터, 에스컬레이터, 탑승 안전칸)
       * 추가 정보는 역 내 승강장 근처의 정보에 한함.
       * 탑승 안전칸이란, 이격 거리가 10 이하이면서 가장 좁은 칸을 뜻함 
    * 혼잡도
    * 기후 동행 카드 승, 하차 지원 여부
    * 침수 피해 여부(길 찾기 page에서 조회 가능)
      
<br>

## 🚇 03-1. 편의 시설 - 혼잡도 및 추가 정보

![congestion](https://github.com/user-attachments/assets/44830087-b0bc-4e61-9d73-eb563f342d38)

### 03.1.1 혼잡도 안내
📌 **지하철 칸 모양: 혼잡도** & **작은 직사각형: 이격거리**

  * 지도 page 내 혼잡도 마커 클릭 시 해당 역의 **30분 단위 혼잡도** 안내
  * 여유 - 보통 - 주의 - 혼잡 - 정보없음 5단계로 안내
  * **수도권 1~9호선, 수인분당선, 신분당선, 공항철도만 혼잡도 이용** 가능
  * 마커 클릭 시 상, 하행의 **혼잡도 칸 별로 확인 가능**

### 03.1.2 지하철 탑승 시 추가 정보 안내
  * 열차와 역 **이격 거리**(안전, 주의, 위험, 정보없음으로 안내)
    * _**엘리베이터** 위치_
    * _**에스컬레이터** 위치_
    * _**계단** 위치_
    * _**탑승 안전 칸**(이격거리 10 이하, 가장 좁은 칸) 안내_

<br>

## 🚇 04. 길 찾기

![roadroad](https://github.com/user-attachments/assets/eb7696cf-80d8-414f-8fb4-d686a6b9726a)

* 출발지, 도착지 입력 시 **최단 거리 + 계단 없는 경로**로 [SK API](https://openapi.sk.com/products/detail?svcSeq=4&menuSeq=45) 를 활용하여 **도보 길 안내**
  * **목적지가 역일 경우 가까운 엘리베이터, 에스컬레이터 출구로 안내**
  * 실시간 공공 자전거 대여 API [서울](https://data.seoul.go.kr/dataList/OA-15493/A/1/datasetView.do) , [대전](https://bike.tashu.or.kr/noticeDetail.do?seq=28) 지역 안내
  * 현재 위치 조회 가능
  * '가까운 역 바로가기' 버튼을 통해 **주변에 가장 가까운 역 도보 안내**
  * 출발지와 목적지 입력 시 길 안내 
 
<br>
 
## 🚇 04-1. 실시간 날씨 안내

![weather](https://github.com/user-attachments/assets/50fe6f38-d5a4-40f8-a79d-53e7e3c9ea09)

* 기상청 [초단기 예보 API 사용](https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15084084)
* 길 찾기 page에서 현재 위치를 반영하여 좌측 아래 현재 날씨를 그림으로 안내
   * _기온 (℃)_
   * _1시간 강수량 (mm)_
   * _하늘상태_
   * _강수형태_
   * _낙뢰 (kA / 킬로암페어)_
   * _풍속 (m/s)_
* 날씨 클릭 시, **현재 위치의** 현재 시간을 포함해 1시간 후, 2시간 후의 **날씨를 예측하여 안내**
* 길 찾기 - 도착지 입력 시, **도착지의 현재 시간 포함  및 1시간 후, 2시간 후 날씨 안내**
* 출발지, 목적지 둘 중 한 곳에 침수 피해가 있을 경우 **침수 피해 주의 문구 표시**
  * ex. _현재 위치 - 침수 피해가 있어 문구 표시O_
  * ex. _강릉 & 군자역 - 침수 피해가 없어 문구 표시X_

<br>

## 🚇 04-2. 지하철 경로 안내

![subwayPath](https://github.com/user-attachments/assets/5d3acd08-8a4a-4540-a4c5-dcbec2c6dd2a)

* [ODsay 경로 안내 API](https://lab.odsay.com/) 사용 
* 출발지와 도착지에 역이 존재할 경우 가까운 지하철 역의 경로를 함께 제공
* **최단거리 경로**로 안내

<br>
  
## 🚇 05. 채팅(WebSocket STOMP)

![chat](https://github.com/user-attachments/assets/0273bd1f-0a1d-464c-b5cd-b7de3f9953c0)

* 메인 화면에서 해당 지역을 클릭하여 **실시간 채팅 참여 가능** 
  * 지역 별 전체 탭에서는 **지역** 내 모든 호선의 실시간 채팅 조회 가능
  * 각 호선 별로 채팅방이 제공되어 원하는 **호선**에서 실시간 채팅 가능
  * 송신한 메시지 **실시간 삭제 가능**
  * 채팅 메시지 복사 가능
  * 메뉴 바에서 원하는 지역 혹은 호선 클릭 시, 대화 참여 가능
  * 조회는 비회원도 가능, 송신 및 삭제는 회원만 가능함
    
<br>
       
## 🚇 06. 공지 게시판

![notice](https://github.com/user-attachments/assets/75a3732a-7910-4733-814a-1a2d1f4b7e3a)

* 공지게시글 조회 및 검색 모든 회원이 가능
* 공지게시글 **작성, 수정, 삭제는 관리자만** 가능
   * 게시글 내 다중 이미지 등록 가능
* 메인 화면에서 최신 공지 게시글 1개를 추출하여 게시

<br>

## 🚇 07. 즐겨 찾기

![path_bookmark](https://github.com/user-attachments/assets/5952edc5-854f-40e8-8752-913a292da9ea)

 ### 7-1. 길 찾기 - 장소 북마크
 
  * 즐겨 찾기하고 싶은 장소를 등록, 조회, 삭제
  * 경로 북마크와 함께 최대 5개 까지 등록 가능
  * 마이 페이지에서 조회 가능
  * 즐겨 찾기 등록 시 길 찾기 page 검색 하단에 노출
     
### 7-2. 길 찾기 - 경로 북마크

  * 자주 이용하는 길 찾기 경로 즐겨 찾기로 등록, 조회, 삭제
  * 장소 북마크와 함께 최대 5개 까지 등록 가능
  * 마이 페이지에서 조회 가능
  * 즐겨 찾기 등록 시 길 찾기 page 검색 하단에 노출

 ![subway-bookmark](https://github.com/user-attachments/assets/9e020c25-6464-469a-991f-b7d212e052a5)

 ### 7-3. 지하철 역 북마크
 
  * 자주 이용하는 지하철 역을 즐겨 찾기로 등록, 조회, 삭제
  * 5개 까지 등록 가능
  * 마이 페이지에서 조회 가능 및 선택 시 해당 역으로 이동
    
<br>

---

## 💻 설치 및 실행

### 1. 레포지토리 clone
```
git clone https://github.com/None-Step/None-Step-FE.git
```
### 2. 프로젝트 디렉토리로 이동
```
cd none-step
```
### 3. npm 패키지 다운로드
```
npm install
```
### 4. 애플리케이션 실행
```
npm run dev
```

<br>

---

## 💡 <ERD 다이어그램>
![image](https://github.com/user-attachments/assets/2a30832e-cc69-40b9-bc5a-52ed69598e6e)

<br>

## 💡 사용한 공공 데이터 목록

* 데이터의 경우, [공공데이터 포털](https://www.data.go.kr/) 및 [철도 데이터 포털](https://data.kric.go.kr/rips/) 에서 <br>
  제공하는 공공 데이터를 가공하여 사용하였음

<details>
<summary>📌 01. 기본 정보</summary>
 
<br>
✔ 해당 역의 호선, 역 명, 도로명 주소, 환승 가능 호선 등 참고 하였습니다.
<br>
 
* 표준데이터 역사정보(전체 기관) <br>
* 표준데이터 역사정보(서울교통공사 기관) <br>
* 표준데이터 역사정보(서울9호선 기관) <br>
* 표준데이터 역사정보(남양주도시공사 기관) <br>
* 표준데이터 역사정보(공항철도 기관) <br>
* 표준데이터 역사정보(인천국제공항공사 기관) <br>
* 표준데이터 역사정보(코레일 기관) <br>
* 표준데이터 역사정보(네오트랜스 기관) <br>
* 표준데이터 역사정보(용인경전철 기관) <br>
* 표준데이터 역사정보(의정부경전철 기관) <br>
* 표준데이터 역사정보(우이신설선 기관)
* 표준데이터 역사정보(김포골드라인 기관)
* 표준데이터 역사정보(인천교통공사 기관)
* 표준데이터 역사정보(로템에스알에스 기관)
* 표준데이터 역사정보(남서울경전철 기관)
* 표준데이터 역사정보(부산교통공사 기관)
* 표준데이터 역사정보(부산김해경전철 기관)
* 표준데이터 역사정보(대구도시철도공사 기관)
* 표준데이터 역사정보(광주도시철도공사 기관)
* 표준데이터 역사정보(대전교통공사 기관)
* 서울교통공사 역사정보
* 서울메트로9호선 역사정보
* 남양주도시공사 역사정보
* 공항철도 역사정보
* 인천국제공항공사 역사정보
* 코레일 역사정보
* 네오트랜스 역사정보
* 경기철도 역사정보
* 서해철도 역사정보
* 인천교통공사 역사정보
* 용인경량전철 역사정보
* 의정부경량전철 역사정보
* 우이신설경전철 역사정보
* 김포골드라인 역사정보
* 남서울경전철 역사정보
* GTX-A 역사정보
* 부산교통공사 역사정보
* 부산김해경전철 역사정보
* 대구교통공사 역사정보
* 광주교통공사 역사정보
* 대전교통공사 역사정보

</details>
<details>
<summary>📌 02. 엘리베이터</summary>
<br>
✔ 해당 역의 엘리베이터 위치를 참고했습니다. <br>
 
* 전국 도시광역철도 역사 엘리베이터 현황 <br>
* 서울교통공사 엘리베이터 <br>
* 수도권1호선 엘리베이터 <br>
* 수도권2호선 엘리베이터 <br>
* 수도권3호선 엘리베이터 <br>
* 수도권4호선 엘리베이터 <br>
* 수도권5호선 엘리베이터 <br>
* 수도권6호선 엘리베이터 <br>
* 수도권7호선 엘리베이터
* 수도권8호선 엘리베이터
* 서울메트로9호선 엘리베이터
* 남양주도시공사 엘리베이터
* 공항철도 엘리베이터
* 인천국제공항공사 엘리베이터
* 코레일 엘리베이터
* 네오트랜스 엘리베이터
* 경기철도 엘리베이터
* 서해철도 엘리베이터
* 인천교통공사 엘리베이터
* 인천교통공사 2호선 엘리베이터
* 용인경량전철 엘리베이터정보
* 의정부경량전철 엘리베이터
* 우이신설경전철 엘리베이터
* 김포골드라인 엘리베이터
* 남서울경전철 엘리베이터
* GTX-A 엘리베이터
* 부산교통공사 엘리베이터
* 부산1호선 엘리베이터
* 부산2호선 엘리베이터
* 부산3호선 엘리베이터
* 부산4호선 엘리베이터
* 부산김해경전철 엘리베이터정보
* 대구교통공사 엘리베이터
* 대구1호선 엘리베이터
* 대구2호선 엘리베이터
* 대구3호선 엘리베이터
* 광주교통공사 엘리베이터
* 대전교통공사 엘리베이터
</details>

<details>
<summary>📌 03. 에스컬레이터</summary>
 
<br>
✔ 해당 역의 에스컬레이터 위치를 참고했습니다. <br>

* 전국 도시광역철도 역사 에스컬레이터 현황 <br>
* 서울교통공사 에스컬레이터 <br>
* 수도권1호선 에스컬레이터 <br>
* 수도권2호선 에스컬레이터 <br>
* 수도권3호선 에스컬레이터 <br>
* 수도권4호선 에스컬레이터 <br>
* 수도권5호선 에스컬레이터 <br>
* 수도권6호선 에스컬레이터 <br>
* 수도권7호선 에스컬레이터 <br>
* 수도권8호선 에스컬레이터 <br>
* 서울메트로9호선 에스컬레이터 <br>
* 남양주도시공사 에스컬레이터 <br>
* 공항철도 에스컬레이터 <br>
* 인천국제공항공사 에스컬레이터
* 코레일 에스컬레이터
* 네오트랜스 에스컬레이터
* 경기철도 에스컬레이터
* 서해철도 에스컬레이터
* 인천교통공사 에스컬레이터
* 용인경량전철 에스컬레이터정보
* 의정부경량전철 에스컬레이터
* 우이신설경전철 에스컬레이터
* 김포골드라인 에스컬레이터
* 남서울경전철 에스컬레이터
* GTX-A 에스컬레이터
* 부산교통공사 에스컬레이터
* 부산1호선 에스컬레이터
* 부산2호선 에스컬레이터
* 부산3호선 에스컬레이터
* 부산4호선 에스컬레이터
* 부산김해경전철 에스컬레이터
* 대구교통공사 에스컬레이터
* 대구1호선 에스컬레이터
* 대구2호선 에스컬레이터
* 대구3호선 에스컬레이터
* 광주교통공사 에스컬레이터
* 대전교통공사 에스컬레이터

</details>

<details>
<summary>📌 04. 화장실</summary>
 <br>
✔ 해당 역의 화장실 위치를 참고했습니다. <br>

* 전국 도시광역철도 역사 화장실 현황 <br>
* 서울교통공사 화장실 <br>
* 수도권1호선 화장실 <br>
* 수도권2호선 화장실 <br>
* 수도권3호선 화장실 <br>
* 수도권4호선 화장실 <br>
* 수도권5호선 화장실 <br>
* 수도권6호선 화장실 <br>
* 수도권7호선 화장실 <br>
* 수도권8호선 화장실
* 수도권9호선 화장실
* 서울메트로9호선 화장실
* 남양주도시공사 화장실
* 공항철도 화장실
* 인천국제공항공사 화장실
* 코레일 화장실
* 경의중앙선 화장실
* 경춘선 화장실
* 수인선 화장실
* 분당선 화장실
* 네오트랜스 화장실
* 경기철도 화장실
* 서해철도 화장실
* 인천교통공사 화장실
* 인천1호선 화장실
* 인천2호선 화장실
* 용인경량전철 화장실
* 의정부경량전철 화장실
* 우이신설경전철 화장실
* 김포골드라인 화장실
* 남서울경전철 화장실
* GTX-A 화장실
* 부산교통공사 화장실
* 부산2호선 화장실
* 부산3호선 화장실
* 부산4호선 화장실
* 부산김해경전철 화장실
* 대구교통공사 화장실
* 대구1호선 화장실
* 대구2호선 화장실
* 대구3호선 화장실
* 광주교통공사 화장실
* 대전교통공사 화장실


</details>

<details>
<summary>📌 05. 장애인 화장실</summary>
 <br>
✔ 해당 역의 장애인 화장실 위치를 참고했습니다. <br>
 
* 서울도시철도공사 장애인화장실 <br>
* 서울메트로 장애인화장실 <br>
* 수도권1호선 장애인화장실 <br>
* 수도권2호선 장애인화장실 <br>
* 수도권3호선 장애인화장실 <br>
* 수도권4호선 장애인화장실 <br>
* 수도권5호선 장애인화장실
* 수도권6호선 장애인화장실 <br>
* 수도권7호선 장애인화장실
* 수도권8호선 장애인화장실
* 수도권9호선 장애인화장실
* 공항철도 장애인화장실
* 코레일 장애인화장실
* 경의중앙선 장애인화장실
* 경춘선 장애인화장실
* 수인선 장애인화장실
* 분당선 장애인화장실
* 인천교통공사 장애인화장실
* 인천1호선 장애인화장실
* 인천2호선 장애인화장실
* 의정부경전철 장애인화장실
* 부산교통공사 장애인화장실
* 부산1호선 장애인화장실
* 부산2호선 장애인화장실
* 부산3호선 장애인화장실
* 부산4호선 장애인화장실
* 부산김해경전철 장애인화장실
* 대구도시철도공사 장애인화장실
* 대구1호선 장애인화장실
* 대구2호선 장애인화장실
* 대구3호선 장애인화장실
* 광주도시철도공사 장애인화장실
* 대전도시철도공사 장애인화장실

</details>

<details>
<summary>📌 06. 휠체어 리프트</summary>
  <br>
 ✔ 해당 역의 휠체어 리프트의 위치, 높이, 길이, 중량 등을 참고했습니다. <br>
 
* 전국 도시광역철도 역사 휠체어리프트 현황 <br>
* 서울교통공사 휠체어리프트 <br>
* 수도권1호선 휠체어리프트 <br>
* 수도권2호선 휠체어리프트 <br>
* 수도권3호선 휠체어리프트 <br>
* 수도권4호선 휠체어리프트 <br>
* 수도권5호선 휠체어리프트 <br>
* 수도권6호선 휠체어리프트 <br>
* 수도권7호선 휠체어리프트 <br>
* 수도권8호선 휠체어리프트
* 서울메트로9호선 휠체어리프트
* 코레일 휠체어리프트
* 인천교통공사 휠체어리프트
* 부산교통공사 휠체어리프트
* 부산교통공사 2호선 휠체어리프트
* 대구교통공사 휠체어리프트
* 대구도시철도공사 1호선 휠체어리프트
* 광주교통공사 휠체어리프트
* 대전교통공사 휠체어리프트


</details>

<details>
<summary>📌 07. 전동 휠체어 충전 설비</summary>
  <br>
 ✔ 해당 역사 내에 위치한 전동 휠체어 충전 설비 위치를 참고했습니다. <br>
 
* 수도권1호선 전동휠체어 충전설비 <br>
* 수도권2호선 전동휠체어 충전설비 <br>
* 수도권3호선 전동휠체어 충전설비 <br>
* 수도권4호선 전동휠체어 충전설비 <br>
* 수도권5호선 전동휠체어 충전설비 <br>
* 수도권6호선 전동휠체어 충전설비
* 수도권7호선 전동휠체어 충전설비
* 수도권8호선 전동휠체어 충전설비
* 수도권9호선 전동휠체어 충전설비
* 부산1호선 전동휠체어 충전설비
* 부산2호선 전동휠체어 충전설비
* 부산3호선 전동휠체어 충전설비
* 부산4호선 전동휠체어 충전설비
* 대구교통공사 전동휠체어 충전설비
* 대구1호선 전동휠체어 충전설비
* 대구2호선 전동휠체어 충전설비
* 대구3호선 전동휠체어 충전설비


</details>

<details>
<summary>📌 08. ATM</summary>
  <br>
 ✔ 해당 역사 내의 ATM 위치를 참고했습니다. <br>
 
* 전국 도시광역철도 역사 ATM 현황 <br>
* 서울교통공사 ATM <br>
* 서울메트로9호선 ATM <br>
* 공항철도 ATM <br>
* 코레일 ATM <br>
* 네오트랜스 ATM <br>
* 경기철도 ATM <br>
* 서해철도 ATM <br>
* 인천교통공사 ATM
* 인천1호선 ATM
* GTX-A ATM
* 부산교통공사 ATM
* 부산1호선 ATM
* 부산2호선 ATM
* 부산3호선 ATM
* 부산4호선 ATM
* 대구교통공사 ATM
* 대구1호선 ATM
* 대구2호선 ATM
* 대전교통공사 ATM

</details>

<details>
<summary>📌 09. 제세동기</summary>
  <br>
 ✔ 해당 역사 내 제세동기 위치를 참고했습니다. <br>
 
* 전국 도시광역철도 역사 제세동기 현황 <br>
* 서울교통공사 제세동기 <br>
* 서울메트로9호선 제세동기 <br>
* 남양주도시공사 제세동기 <br>
* 공항철도 제세동기 <br>
* 코레일 제세동기 <br>
* 네오트랜스 제세동기 <br>
* 경기철도 제세동기 <br>
* 서해철도 제세동기
* 인천교통공사 제세동기
* 인천교통공사1호선 제세동기
* 용인경량전철 제세동기 <br>
* 의정부경량전철 제세동기 <br>
* 우이신설경전철 제세동기 <br>
* 김포골드라인 제세동기 <br>
* 남서울경전철 제세동기 <br>
* GTX-A 제세동기 <br>
* 부산교통공사 제세동기 <br>
* 부산1호선 제세동기 <br>
* 부산2호선 제세동기 <br>
* 부산3호선 제세동기 <br>
* 부산4호선 제세동기 <br>
* 부산김해경전철 제세동기정보 <br>
* 대구교통공사 제세동기 <br>
* 대구1호선 제세동기 <br>
* 대구2호선 제세동기 <br>
* 대구3호선 제세동기 <br>
* 광주교통공사 제세동기 <br>
* 대전교통공사 제세동기 <br>
</details>

<details>
<summary>📌 10. 수유실</summary>
  <br>
 ✔ 해당 역사 내 수유실의 위치를 참고했습니다. <br>
 
* 전국 도시광역철도 역사 수유실 현황 <br>
* 서울교통공사 수유실 <br>
* 남양주도시공사 수유실 <br>
* 공항철도 수유실 <br>
* 인천국제공항공사 수유실 <br>
* 코레일 수유실 <br>
* 네오트랜스 수유실 <br>
* 경기철도 수유실 <br>
* 서해철도 수유실 <br>
* 인천교통공사 수유실 <br>
* 인천교통공사 1호선 수유실 <br>
* 용인경량전철 수유실 <br>
* 김포골드라인 수유실 <br>
* 남서울경전철 수유실 <br>
* GTX-A 수유실 <br>
* 부산교통공사 수유실 <br>
* 부산1호선 수유실 <br>
* 부산2호선 수유실 <br>
* 부산3호선 수유실 <br>
* 부산김해경전철 수유실 <br>
* 대구교통공사 수유실 <br>
* 대구1호선 수유실 <br>
* 대구2호선 수유실 <br>
* 대구3호선 수유실 <br>
* 광주교통공사 수유실 <br>
* 대전교통공사 수유실 <br>

</details>

<details>
<summary>📌 11. 고객 센터</summary>
  <br>
 ✔ 해당 역사 내 고객 센터의 위치를 참고했습니다. <br>
 
* 전국 도시광역철도 역사 고객센터 현황 <br>
* 서울교통공사 고객센터 <br>
* 수도권1호선 고객센터 <br>
* 수도권2호선 고객센터 <br>
* 수도권3호선 고객센터 <br>
* 수도권4호선 고객센터 <br>
* 수도권5호선 고객센터 <br>
* 수도권6호선 고객센터 <br>
* 수도권7호선 고객센터 <br>
* 수도권8호선 고객센터 <br>
* 수도권9호선 고객센터 <br>
* 서울메트로9호선 고객센터 <br>
* 남양주도시공사 고객센터 <br>
* 공항철도 고객센터 <br>
* 코레일 고객센터 <br>
* 네오트랜스 고객센터 <br>
* 경기철도 고객센터 <br>
* 서해철도 고객센터 <br>
* 인천교통공사 고객센터 <br>
* 인천교통공사1호선 고객센터 <br>
* 용인경량전철 고객센터 <br>
* 의정부경량전철 고객센터 <br>
* 우이신설 고객센터 <br>
* 김포골드라인 고객센터 <br>
* 부산교통공사 고객센터 <br>
* 부산1호선 고객센터 <br>
* 부산2호선 고객센터 <br>
* 부산3호선 고객센터 <br>
* 부산4호선 고객센터 <br>
* 부산김해경전철 고객센터 <br>
* 대구교통공사고객센터 <br>
* 대구1호선 고객센터 <br>
* 대구2호선 고객센터 <br>
* 대구3호선 고객센터 <br>
* 광주교통공사 고객센터 <br>
* 대전도시철도공사 고객센터 <br>
* 대전교통공사 고객센터 <br>

</details>

<details>
<summary>📌 12. 시간표</summary>
  <br>
 ✔ 해당 역의 첫 차, 막 차(평일, 토요일, 공휴일) 시간을 참고했습니다. <br>
 
* 서울도시철도공사 열차요일별시각 <br>
* 서울메트로 열차요일별시각 <br>
* 수도권1호선 열차요일별시각 <br>
* 수도권2호선 열차요일별시각 <br>
* 수도권3호선 열차요일별시각 <br>
* 수도권4호선 열차요일별시각 <br>
* 수도권5호선 열차요일별시각 <br>
* 수도권6호선 열차요일별시각 <br>
* 수도권7호선 열차요일별시각 <br>
* 수도권8호선 열차요일별시각 <br>
* 공항철도 열차요일별시각 <br>
* 공항철도_공항철도 열차요일별시각 <br>
* 공항철도_자기부상 열차요일별시각 <br>
* 코레일 열차요일별시각 <br>
* 경의중앙선 열차요일별시각 <br>
* 경춘선 열차요일별시각 <br>
* 수인선 열차요일별시각 <br>
* 분당선 열차요일별시각 <br>
* 경강선 열차요일별시각
* 인천교통공사 열차요일별시각
* 인천1호선 열차요일별시각
* 인천2호선 열차요일별시각
* 용인경전철 열차요일별시각
* 의정부경전철 열차요일별시각
* 신분당선 열차요일별시각
* 부산교통공사 열차요일별시각
* 부산1호선 열차요일별시각
* 부산2호선 열차요일별시각
* 부산3호선 열차요일별시각
* 부산4호선 열차요일별시각
* 부산동해선 열차요일별시각
* 부산김해경전철 열차요일별시각
* 대구도시철도공사 열차요일별시각
* 대구1호선 열차요일별시각
* 대구2호선 열차요일별시각
* 대구3호선 열차요일별시각
* 광주도시철도공사 열차요일별시각
* 대전도시철도공사 열차요일별시각

</details>

<details>
<summary>📌 13. 이격 거리 및 추가 정보</summary>
  <br>
 ✔ 해당 역의 이격 거리 및 계단, 엘리베이터, 에스컬레이터, 탑승 안전칸에 대한 정보를 참고했습니다. <br>
 
* 서울도시철도공사 승강장이격거리 <br>
* 서울메트로 승강장이격거리 <br>
* 수도권1호선 승강장이격거리 <br>
* 수도권2호선 승강장이격거리 <br>
* 수도권3호선 승강장이격거리 <br>
* 수도권4호선 승강장이격거리 <br>
* 수도권5호선 승강장이격거리 <br>
* 수도권6호선 승강장이격거리 <br>
* 수도권7호선 승강장이격거리 <br>
* 수도권8호선 승강장이격거리 <br>
* 수도권9호선 승강장이격거리 <br>
* 공항철도 승강장이격거리 <br>
* 코레일 승강장이격거리 <br>
* 경의중앙선 승강장이격거리 <br>
* 경춘선 승강장이격거리 <br>
* 수인선 승강장이격거리 <br>
* 분당선 승강장이격거리 <br>
* 신분당선 승강장이격거리 <br>
* 인천교통공사 승강장이격거리 <br>
* 인천1호선 승강장이격거리 <br>
* 인천2호선 승강장이격거리 <br>
* 용인경전철 승강장이격거리 <br>
* 의정부경전철 승강장이격거리 <br>
* 부산교통공사 승강장이격거리 <br>
* 부산1호선 승강장이격거리 <br>
* 부산2호선 승강장이격거리 <br>
* 부산3호선 승강장이격거리 <br>
* 부산4호선 승강장이격거리 <br>
* 부산김해경전철 승강장이격거리 <br>
* 대구도시철도공사 승강장이격거리 <br>
* 대구1호선 승강장이격거리 <br>
* 대구2호선 승강장이격거리 <br>
* 대구3호선 승강장이격거리 <br>
* 광주도시철도공사 승강장이격거리 <br>
* 대전도시철도공사 승강장이격거리 <br>


</details>

<details>
<summary>📌 14. 혼잡도</summary>
<br>
✔ 해당 역의 시간 별 혼잡도 데이터를 참고했습니다. <br>
 
* 서울교통공사_지하철혼잡도정보  <br>
* 서울특별시_9호선혼잡도정보 <br>
* 경기도 의정부시_의정부경전철 혼잡도 <br>

</details>

<details>
<summary>📌 15. 기후 동행 카드</summary>
  <br>
 ✔ 해당 역의 기후 동행 카드 승, 하차 지원 여부를 참고했습니다. <br>
 
* 기후동행카드 서비스범위 검색 <br>

</details>

<details>
<summary>📌 16. 침수 피해</summary>
 <br>
 ✔ 2020년부터 해당 역의 침수 피해 여부에 대해 참고했습니다. 
 <br>
 
* 행정안전부_침수흔적도(2020년) <br>

</details>

<br>

## 📄 라이선스
* Apache License 2.0, Copyright (c) 2024 NONESTEP, see this [link](https://github.com/None-Step/None-Step-FE/blob/main/LICENSE) for more details
