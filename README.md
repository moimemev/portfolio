## 리액트 포트폴리오 만들기

<pre>
1. 깃허브에 올리기
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/moimemev/portfolio.git
git push -u origin main

2. Settings
1) GitHub Pages 설정
- Pages
- Branch [main]선택
- [save]후 기다리세요

2) npm i gh-pages
package.json 파일열고 아래내용추가
"homepage": "https://moimeme.github.io/test/",
"scripts": "predeploy": "npm run build",
"deploy": "gh-pages -d build"
npm run deploy
GitHub Pages
Pages
Branch [gh-pages]선택
[save]후 기다리세요
“predeploy” : “npm run build”
npm run deploy 명령어를 입력했을 때 deploy 가 수행되기 전에 build를 한다.
predeploy는 deploy 전에 먼저 실행한다는 뜻이다.
이를 통해 build와 deploy를 한번에 실행할 수 있다.
“deploy” : gh-pages -d build
npm run deploy 명령을 수행했을 때 build directory를 배포
</pre>