// const autoprefixer = require('autoprefixer')
// autoprefixer를 import한 후 plugins에 넣을 수도 있지만
// 바로 require를 넣어줄수도 있음

module.exports = {
    plugins: [
        require('autoprefixer'),
    ]
}

// css의 prefix후처리를 위해 package.json에 아래를 추가해야한다
// "browserslist": [
//     "> 1%",
//     "last 2 versions"
//   ]

// 사용률 1퍼센트 이상의 브라우저의 가장 마지막 2개 버전까지는 지원할 수 있도록 수정함