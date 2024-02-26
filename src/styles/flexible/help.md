```
// 移动端，响应式布局

var rate = 0.6,std; // 375/(1/.16) /100 = 0.6
var ret = [320, 360, 375, 400, 414, 440, 480, 520, 560, 600, 640, 680, 720, 750].map(i=>{
  var num = (i/0.6).toFixed(5).replace(/\.[0]+$/,'');
  if(i==375) std = num
  return ('@media (min-width:'+i+'px){html{font-size:'+ num +'% !important;}}')
 }
).join('\r\n') + '\r\n@media (min-width:768px){html{font-size:'+ std +'% !important;}}';
copy(ret);
console.log(ret);

// 768 以上作为电脑屏，同 iphone6 的 375。以 rem 为单位，每 rem 表示 100 像素

@media (max-width: 319px) {
  html {
    font-size: 533.33333% !important;
  }
}
@media (min-width: 320px) {
  html {
    font-size: 533.33333% !important;
  }
}

@media (min-width: 360px) {
  html {
    font-size: 600% !important;
  }
}

@media (min-width: 375px) {
  html {
    font-size: 625% !important;
  }
}

@media (min-width: 400px) {
  html {
    font-size: 666.66667% !important;
  }
}

@media (min-width: 414px) {
  html {
    font-size: 690% !important;
  }
}

@media (min-width: 440px) {
  html {
    font-size: 733.33333% !important;
  }
}

@media (min-width: 480px) {
  html {
    font-size: 800% !important;
  }
}

@media (min-width: 520px) {
  html {
    font-size: 866.66667% !important;
  }
}

@media (min-width: 560px) {
  html {
    font-size: 933.33333% !important;
  }
}

@media (min-width: 600px) {
  html {
    font-size: 1000% !important;
  }
}

@media (min-width: 640px) {
  html {
    font-size: 1066.66667% !important;
  }
}

@media (min-width: 680px) {
  html {
    font-size: 1133.33333% !important;
  }
}

@media (min-width: 720px) {
  html {
    font-size: 1200% !important;
  }
}

@media (min-width: 750px) {
  html {
    font-size: 1250% !important;
  }
}
```