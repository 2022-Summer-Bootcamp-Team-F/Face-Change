# docker hub에서 image를 pull
FROM node:16.13.0-alpine

# set working directory
# 작업을 수행할 디렉토리를 지정
WORKDIR /frontend

# 현재 경로에 있는 것을 frontend로 복사
COPY . /frontend

# npm 버전 5 이후로 --force를 붙여줘야 한다.
# npm cache를 모조리 삭제
RUN npm cache clean --force

# yarn 설치
RUN npm isntall yarn

# 이미지가 빌드 될때 실행, 배포 환경에는 RUN yarn run build 사용
RUN yarn install