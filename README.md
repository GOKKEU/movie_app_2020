# movie_app_2020

React JS Fundamentals Course(2020)
url:https://gokkeu.github.io/movie_app_2020/

### 참고

#### CSS

https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns
https://naradesign.github.io/article/flex-justify-align.html

#### GIT PAGE

https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f

(1) npm i gh-pages :웹사이트를 github의 github page 도메인에 나타나게 해줌
(2) package.JSON을 설정
(소문자로)
"homepage":"https://{github username}.github.io/{the name of your project}"
"scripts"에 추가
"deploy":"gh-pages" //입력 후
npm run build 실행 > build 폴더 생성됨 (이 안에 입력했던 js ,css를 최소화했음)
"deploy":"gh-pages -d build" //수정(생성된 다이렉토리 build)
"predeploy":"npm run build"
(3)
npm run build 입력시 ->//deploy를 호출할때 마다 자동으로 predeploy를 먼저 호출
(4) 코드 수정 후 npm run deploy 한번 입력하면 update됨

### Router
https://reacttraining.com/react-router/web/guides/quick-start
(1) npm install react-router-dom