## 리액트 포트폴리오 만들기

<pre>
1. 깃허브에 올리기
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/moimemev/portfolio.git
git push -u origin main

2. GitHub Pages 배포
- 해당 Repository의 Settings > Pages 메뉴로 이동
- Branch 항목에서 [main], [/root] 선택
- [save] 클릭 후 10분정도 대기하기

3. 리액트 프로젝트 배포
1) package.json 파일 수정
vs code에서 package.json 파일열고  homepage, script추가
- 제일 상단 { 아래에 
"homepage": "https://moimemev.github.io/portfolio/", 추가
- scripts 안에 추가하기
"scripts": "predeploy": "npm run build",
            "deploy": "gh-pages -d build"


npm run deploy 명령어를 입력했을 때 deploy 가 수행되기 전에 build를 한다.
predeploy는 deploy 전에 먼저 실행한다는 뜻이다.

2) gh-pages 패키지 설치
npm install gh-pages

3) build directory를 배포
수정된 코드 repository에 업로드 후 npm run deploy 실행
[npm run deploy]
Published가 보일 때까지 대기
build폴더 생성됨(최종 서비스 파일-압축된 파일)

4) 추가 파일 다시 업로드
git add .
git commit -m "내용쓰기" : 작업 확인 메세지 커밋
git push -u origin main

5) GitHub Page 설정
새로운 gh-pages 브랜치 선택 후 Save 버튼 클릭하기

</pre>