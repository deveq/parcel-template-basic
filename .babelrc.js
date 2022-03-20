module.exports = {
    presets : [
        // @babel/preset-env를 preset에 넣어주면
        // 작성하는 모든 코드는 ES5로 변환됨
        '@babel/preset-env'
    ],
    plugins : [
        ['@babel/plugin-transform-runtime']
    ]
}

// autoprefixer할때 .postcssrc.js를 작성했던것처럼
// .babelrc.js작성 후 package.json에 아래의 내용 추가
// autoprefixer와 같은 의미임
// "browserslist": [
//     "> 1%",
//     "last 2 versions"
//   ]
