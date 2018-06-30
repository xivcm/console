/*
*Author: 爱吃醋的饺子 <i@xiv.cm>
*Site:https://xiv.cm
*/
function xivChrome() {
 var opened = false;
  var element = document.createElement('any');
    element.__defineGetter__('id', function() {
    opened = true;
  });
 console.log(element);
 console.clear && console.clear();
 return opened || false;
}
function xivFirefox() {
  const devTools = /./;
  devTools.toString = function() {
    this.opened = true;
  }
  console.log(devTools);
  console.clear && console.clear();
  return devTools.opened || false;
}

function xivconsole(){
  //此处破防各种模拟器navigator.platform来进行判断
  var ua = navigator.userAgent;
  var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
  isIphone =!ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
  isAndroid = ua.match(/(Android)\s+([\d.]+)/),
  isMobile = isIphone || isAndroid;
  var ic=['Win32','MacPPC','Linuxi586','Mac68K','Linux','FreeBSD','WinCE','Win16','Windows','Pocket PC','Nintendo','OpenBSD'];
  if(isMobile){
    for(i in ic){
      if(ic[i]==navigator.platform||navigator.platform.indexOf(ic[i])>-1||ic[i].indexOf(navigator.platform)>-1){
         window.location = 'about:blank';
          window.close();
      }
    }
  }
  var x = document.createElement('div');
  Object.defineProperty(x, 'id', {
        get:function(){
            window.location = 'about:blank';
            window.close();
        }
    });
  (function(){
    //当浏览器内宽和外宽的差大于20，或者内高和外高的差大于100的情况下
    if(window.outerWidth - window.innerWidth > 20||window.outerHeight - window.innerHeight > 140 ){
            window.location = 'about:blank';
            window.close();
    }
  })();
  if(xivFirefox()==true&&navigator.userAgent.indexOf("Firefox") > -1){
      window.location = 'about:blank';
      window.close();

  }
}
//调用方法
 window.setInterval(xivconsole,1000);

