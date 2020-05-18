window.onload = function () {
  this.console.log('this is hello word.....')
  demo()
  demos()
  tabs(10)
}

function demo() {
  console.log('吃饭.....')
}

function demos() {
  setTimeout(function () {
    console.log('打豆豆。。。。。。')
  }, 2000)
}

function tabs(num) {
  for (var i = 0; i < num; i++) {
    console.log('输出结果：', i)
  }
}