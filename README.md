## blockchain_wallet

Node.js는 chrome V8 JavaScript엔진으로 빌드 된 JavaScript 런타임입니다.  Node.js는 이벤트 기반, Non 블로킹 I/O모델을 사용해 가볍고 효율적입니다. Node.js 의 패키지 생태계인 npm은 세계에서 가장 큰 오픈 소스 라이브러리 생태계이기도 합니다. Npm은 Node Package Modules라고도 합니다. 

이번에 실행한 미니 월렛은 스마트 컨트랙트를 사용하지 않은 미니 이더리움 월렛입니다. 이더리움의 잔액 확인 및 이더를 송금하는 Mist의 기능을 html에서 작동되게 만들어 보는 게 목적입니다.

HTML파일에서 web3.js 라이브러리를 사용하려면 다운로드를 받아야 했습니다. 

>npm install web3 

이후에 미니 월렛을 만든 html 파일 위치에 lib 폴더를 생성하고 bignumber.min.js와 web3-light.min.js를 저장합니다. 

![image](https://user-images.githubusercontent.com/38427658/55115925-09b6e180-5129-11e9-869b-59dbca0f3d5b.png)

Html페이지에서는 채굴함에 따라 계속적으로 증가하는 ether를 볼 수 있습니다. 해당 파일에서 가장 중요한 부분은 
```html
web3,setProvider(new web3.providers.HttpProvider(http://localhost:8545)
```
입니다. 포트번호 8545는 별도로 지정하기 전에는 동일합니다. chrome창에서 F12를 누르면 사진의 우측과 같은 개발자 페이지가 뜨는데 이를 통해 트랙잭션이 이루어졌는지 혹은 어떤 오류가 발생하였는지 등의 결과를 확인 할 수 있습니다. 채굴한 후 각각의 송신처, 수신처, 금액 등을 넣고 송신처의 비밀번호까지 입력하게 되면 트랙잭션이 성공했다는 결과를 얻게 됩니다. 
