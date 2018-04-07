/*
*Author: 爱吃醋的饺子 <i@xiv.cm>
*Site:https://xiv.cm
*/
function xivFirefox() {
  const devTools = /./;
  devTools.toString = function() {
    this.opened = true;
  }
  console.log(devTools);
  console.clear && console.clear();
  return devTools.opened || false;
}
function xivChrome(){
  var x = document.createElement('div');
  Object.defineProperty(x, 'id', {
        get:function(){
            window.location = 'about:blank';
            window.close();
        }
    });
}
(function(){//补充宽高对比方式
    if(window.outerWidth - window.innerWidth > 20||window.outerHeight - window.innerHeight > 140 ){
            window.location = 'about:blank';
            window.close();
    }
  })();
if(xivFirefox()==true&&navigator.userAgent.indexOf("Firefox") > -1){
  		window.location = 'about:blank';
    	window.close();
}
if(navigator.userAgent.indexOf("Chrome") > -1){
  xivChrome();
}
