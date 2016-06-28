onload = function(){
    var ndiv = document.createElement('div');
    var divIdName = 'mycookie';
    ndiv.setAttribute('id',divIdName);
    ndiv.style.width = "40px";
	ndiv.style.height = "40px";
    ndiv.style.padding = "0px 0";
    ndiv.style.right = "0px";
    ndiv.style.top = "100px";
    ndiv.style.position = "fixed";
    ndiv.style.zIndex = "9999";
    ndiv.style.color = "#3f3f3f";
    ndiv.style.background = "transparent";
	ndiv.style.backgroundImage = "url('http://www.politykacookie.com.pl/f.gif')";
    ndiv.style.borderTop = "0px solid #444444";
    ndiv.style.boxShadow = "5px 0px 40px #000000";
	web=window.location.hostname;
	alert(flink);
    ndiv.innerHTML = '<a href="" style="width: 100%; height: 100%; display: block;"></a>';
	document.body.insertBefore(ndiv, document.body.lastChild);
}

