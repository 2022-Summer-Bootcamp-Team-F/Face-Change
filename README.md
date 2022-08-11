# Face Change

- 셀카 한 장으로 원하는 만화 캐릭터가 되보시는건 어떠신가요?
- Face-Change에서 DualStyleGAN 인공 지능의 마법을 사용하여 자동으로 초상화를 만화 또는 벡터 스타일로 다시 그려줍니다.
- 제작하는 데 며칠이 걸리고 전문 아티스트에게만 주문할 수 있었던 작업을 이제 탭 한 번으로 사용할 수 있습니다.
- 자신의 다양한 스타일의 모습을 확인해 볼 수 있습니다.

## 프로젝트 실행을 위해 필요한 환경

Editor : vscode

Frontend : npm, yarn

Backend : Docker, Python

## 실행 방법

1. `git clone git@github.com:2022-Summer-Bootcamp-Team-F/Face-Change.git`
2. `cd frontend`
3. `yarn install`
4. `cd ..`
5. `docker compose -f docker-compose.prod.yml up --build`

## 시스템 아키텍처

![Screen Shot 2022-08-02 at 9 27 29 PM](https://user-images.githubusercontent.com/84794653/184146284-ae1787ac-ebda-43d2-9ae7-948cc83c2130.png)

## ⛏ 기술 스택

| 분류 | 기술 |
| --- | --- |
| **Frontend** | <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white"> <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=TailwindCSS&logoColor=white"> |
| **Backend** | <img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=Django&logoColor=white"> <img src="https://img.shields.io/badge/Gunicorn-499848?style=for-the-badge&logo=Gunicorn&logoColor=white"> <img src="https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=Nginx&logoColor=white"> <img src="https://img.shields.io/badge/RabbiMQ-FF6600?style=for-the-badge&logo=RabbiMQ&logoColor=white"> <img src="https://img.shields.io/badge/Celery-37814A?style=for-the-badge&logo=Celery&logoColor=white"> |
| **Develop environment** | <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white"> <img src="https://img.shields.io/badge/AmazonS3-db5141?style=for-the-badge&logo=AmazonS3&logoColor=white"> <img src="https://img.shields.io/badge/AmazonEC2-FF9900?style=for-the-badge&logo=AmazonEC2&logoColor=white"> <img src="https://img.shields.io/badge/AmazonAWS-ff9901?style=for-the-badge&logo=AmazonAWS&logoColor=white"> |
| **DataBase** | <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white"> |
| **Deep learning** | <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white"> <img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=PyTorch&logoColor=white"> <img src="https://img.shields.io/badge/GoogleColab-F9AB00?style=for-the-badge&logo=GoogleColab&logoColor=white"> <img src="https://img.shields.io/badge/OpenCV-5C3EE8?style=for-the-badge&logo=OpenCV&logoColor=white"> |
| **Etc** | <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white"> <img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white"> <img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=Slack&logoColor=white"> <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white">|

## 데모 영상 GIF

### 메인 페이지

![Main](https://user-images.githubusercontent.com/84794653/184158201-4bde8d94-2738-437d-8f04-b6fb782408b3.gif)

### 사진선택 페이지

![pick](https://user-images.githubusercontent.com/84794653/184158253-8d26b704-2972-4118-a5dc-56074c18baa5.gif)

### 화풍선택 페이지

![choose](https://user-images.githubusercontent.com/84794653/184158234-4b7e3f13-f23e-4cc5-87fa-e609b5c374f0.gif)

### 로딩 페이지

![loading](https://user-images.githubusercontent.com/84794653/184158266-830980d7-c500-4b28-b0e4-e28dc4ebdd8d.gif)

### 결과 페이지

![result](https://user-images.githubusercontent.com/84794653/184158283-e7bf75e4-b38a-468d-90d2-5831a5f81346.gif)

## 디렉터리

```bash
.
├── README.md
├── backend
│   ├── Dockerfile
│   ├── app
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── migrations
│   │   ├── model
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── tasks.py
│   │   ├── tests.py
│   │   ├── urls.py
│   │   ├── util.py
│   │   ├── utils.py
│   │   └── views.py
│   ├── config
│   │   ├── __init__.py
│   │   ├── asgi.py
│   │   ├── celery.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   ├── manage.py
│   ├── my_settings.py
│   ├── requirements.txt
│   ├── secrets.json
│   └── venv
│       ├── bin
│       ├── include
│       ├── lib
│       └── pyvenv.cfg
├── docker-compose.prod.yml
├── docker-compose.yml
├── frontend
│   ├── Dockerfile
│   ├── README.md
│   ├── build
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── public
│   │   ├── favicon.ico
│   │   ├── images
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── src
│   │   ├── App.css
│   │   ├── App.test.tsx
│   │   ├── App.tsx
│   │   ├── components
│   │   ├── index.css
│   │   ├── index.tsx
│   │   ├── logo.svg
│   │   ├── pages
│   │   ├── reportWebVitals.ts
│   │   ├── setupProxy.js
│   │   └── setupTests.ts
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   └── yarn.lock
└── nginx
    ├── Dockerfile
    └── nginx.conf
```

##  멤버

| 이름 | 개발분야 | github |
| --- | --- | --- |
| 동승현 | Frontend | [@Dong-Seung-hyeon](https://github.com/Dong-Seung-hyeon) |
| 최정훈 | Frontend | [@saa00123](https://github.com/saa00123) |
| 김민주 | Backend | [@minz-cha](https://github.com/minz-cha) |
| 최준영 | Backend | [@junyoungch](https://github.com/junyoungch) | 
| 오현택 | AI, Devops | [@hyeontack5](https://github.com/hyeontack5) |