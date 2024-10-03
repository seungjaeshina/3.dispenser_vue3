# vue-kiosk

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## electron 
npm install electron --save-dev
root 에 electron 폴드 생성
electron 폴드에 main.js 생성
yarn add electron-builder 

## 바코드
npm install vue-barcode-reader --save

## 우체국 사전접수
https://m.epost.go.kr/postal/mobile/mobile.RetrieveRn.postal

## sass에러시 설치
npm install -D sass-loader@^10 sass

## 카메라이슈
chrome://flags/#unsafely-treat-insecure-origin-as-secure
Navigate to chrome://flags/#unsafely-treat-insecure-origin-as-secure in Chrome.

Find and enable the Insecure origins treated as secure section (see below).

Add any addresses you want to ignore the secure origin policy for. Remember to include the port number too (if required).

Save and restart Chrome.

## 인증서이슈 https사용
1.chocolatey 설치
2.admin shell 에서 Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1')) 실행
3. choco --version
4. choco install mkcert
5. mkcert -install
6. mkcert localhost
7. localhost-key.pem 과 localhost.pem 2개파일을 프로젝트의 root에 복사
8. vue.config.js 파일수정
const fs = require('fs')
module.exports = {
  devServer: {
    https: {
      key: fs.readFileSync('.{디렉토리 경로}/localhost-key.pem'),
      cert: fs.readFileSync('.{디렉토리 경로}/localhost.pem'),
    },
  },
}
9. electron 폴드의 main.js에 추가
// SSL/TSL: this is the self signed certificate support
app.on('certificate-error', (event, webContents, url, error, certificate, callback) => {
    // On certificate error we disable default behaviour (stop loading the page)
    // and we then say "it is all fine - true" to the callback
    event.preventDefault();
    callback(true);
});


## yarn install

## npm list vue
postKiosk@0.1.0 D:\0610\1020_KoreaPost\2.Dispenser\02.Source\dispenser
├─┬ @vue/cli-plugin-babel@5.0.8
│ └─┬ @vue/babel-preset-app@5.0.8
│   ├─┬ @vue/babel-preset-jsx@1.4.0
│   │ └── vue@3.4.37 deduped
│   └── vue@3.4.37 deduped
├─┬ vue-router@4.4.3
│ └── vue@3.4.37 deduped
├─┬ vue@3.4.37
│ └─┬ @vue/server-renderer@3.4.37
│   └── vue@3.4.37 deduped
├─┬ vue3-carousel@0.3.3
│ └── vue@3.4.37 deduped
├─┬ vueperslides@3.5.1
│ └── vue@3.4.37 deduped
└─┬ vuex@4.1.0
  └── vue@3.4.37 deduped
  
## node : v18.20.4

## npm run serve
## npm run electron


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
