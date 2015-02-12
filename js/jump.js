function jump(id,url){
	document.getElementById(id).addEventListener('tap',function () {
		mui.openWindow({
		    url:url,
		    id: url
		});
	})
}
			
