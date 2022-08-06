<img src="https://user-images.githubusercontent.com/103565931/182819115-406a7a8d-cb0d-4e46-acd0-71c3ad3a1595.png" width="100%" align=left width=50>

`"Unanimous는 캐쥬얼한 디자인을 기반으로 편안한 분위기의 미팅룸을 개설하여 직원들(친구들)과 소통 할 수 있게끔 도와주고 회의를 진행하면서 그 즉시 안건에대한 내용을 정리 할 수 있게끔 도와주는 서비스입니다"`

<img src="https://user-images.githubusercontent.com/103565931/182823100-5fdea7ee-1447-438d-8511-6b443da80705.jpg" width="2%"> **[Unanimous 바로 가기](https://unanimous.co.kr/)**

🎬 **[서비스 시연 및 발표 영상](https://youtu.be/I2IMM6-4IaQ)**


<br />

## ❓ 기획의도
`"👩 기존의 타 플랫폼을 보면 답답한 화상회의 디자인으로 딱딱한 분위기에서 회의를 진행 하는거 같아요."`

`"👩‍🦱 회의 내용에 대해 다른 툴을 사용하여 계속해서 따로 정리해둬야하는 것에 대해 불편함을 느껴요"`

**"📣 캐쥬얼한 디자인을 기반으로 편안한 분위기의 미팅룸을 개설하여 직원들(친구들)과 소통 할 수 있게끔 도와주고
   회의를 진행하면서 그 즉시 안건에대한 내용을 정리 할 수 있게끔 도와주는 서비스
   이전 안건에대해 일목요연하게 정리하여 이전 안건에 대한 내용에 쉽게 접근 할수 있는 서비스를 기획하게 되었습니다.."**

<br />

## 👥 팀 소개
#### `Backend`
<a href="https://github.com/minjoo-kou" target="_blank"><img height="40"  src="https://img.shields.io/static/v1?label=Spring&message=양승훈 &color=08CE5D&style=for-the-badge&>"/></a>
<a href="https://github.com/sun-land" target="_blank"><img height="40"  src="https://img.shields.io/static/v1?label=Spring&message=곽동관 &color=08CE5D&style=for-the-badge&>"/></a>
<a href="https://github.com/devssk" target="_blank"><img height="40"  src="https://img.shields.io/static/v1?label=Spring&message=신상우 &color=08CE5D&style=for-the-badge&>"/></a>

#### `Frontend`
 <a href="https://github.com/nevergettingold" target="_blank"><img height="40"  src="https://img.shields.io/static/v1?label=React&message=강석우 &color=61dafb&style=for-the-badge&>"/></a>
 <a href="https://github.com/durukim" target="_blank"><img height="40"  src="https://img.shields.io/static/v1?label=React&message=임대균 &color=61dafb&style=for-the-badge&>"/></a>
 <a href="https://github.com/jeonghwanJay" target="_blank"><img height="40"  src="https://img.shields.io/static/v1?label=React&message=김용우 &color=61dafb&style=for-the-badge&>"/></a>

#### `Designer`
 <img width="180"  src="https://img.shields.io/static/v1?label=Design&message=조유진 &color=FF7F50&style=for-the-badge&>"/></a>
<br />

## 🗓 프로젝트 기간
- 2022년 6월 24일 ~ 2022년 8월 3일

- 배포 : 2022년 7월 30일

<br />

## 📜 기술스택
|분류|기술|
| :-: |:- |
|Language|<img src="https://img.shields.io/badge/JAVA-007396?style=for-the-badge&logo=java&logoColor=white">|
|Framework|<img src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=Spring&logoColor=white"> <img src="https://img.shields.io/badge/Springboot-6DB33F?style=for-the-badge&logo=Springboot&logoColor=white">|
|Build Tool|<img src="https://img.shields.io/badge/gradle-02303A?style=for-the-badge&logo=gradle&logoColor=white">|
|DB|<img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">|
|Server|<img src="https://img.shields.io/badge/aws-232F3E?style=for-the-badge&logo=AmazonAWS&logoColor=white"> <img src="https://img.shields.io/badge/Amazon S3-569A31?style=for-the-badge&logo=Amazon S3&logoColor=white">|
|CI/CD|<img src="https://img.shields.io/badge/GitHub Actions-2088FF?style=for-the-badge&logo=GitHub Actions&logoColor=white"> <img src="https://img.shields.io/badge/codedeploy-6DB33F?style=for-the-badge&logo=codedeploy&logoColor=white">|
|proxy, 무중단배포|<img src="https://img.shields.io/badge/NGINX-009639?style=for-the-badge&logo=NGINX&logoColor=white">|


<br />

## 🏰 아키텍쳐
<details>
<summary> <b>아키텍쳐 바로보기</b> </summary>
    <img src="https://user-images.githubusercontent.com/103565931/182825458-3906003e-f47b-4699-864e-dd0f4bdecf8e.png"> 
</details>

<br />

## 📕 ER 다이어그램     
    
<details>
<summary> <b>ERD 바로보기</b> </summary>
    <img src="https://user-images.githubusercontent.com/103565931/182826853-24fc3726-2a22-49dd-a826-dafef77c5e36.png"> 
</details>



<br />

## ✨ 기술적인 도전

1. WebRTC를 구현함에 있어 다대다간의 연결을 원활하게 하기 위해 미디어 서버로 openvidu 라이브러리를 이용해 사용하였다.

2. 실시간 채팅과 회의록 안건을 구현하는 데에 있어, 스프링과 리액트 협업 시 스톰프 메세지 브로커가 가장 적당하다고 판단하여 사용하였다.

3. nignx를 사용하여 웹페이지 보안강화를 위한 https적용하였으며 서버가 끊김없이 동작할 수있게끔 무중단 배포를 적용

4. Github actions + Codedeploy를 사용하여 자동화 배포 적용
<br />
