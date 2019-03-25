window.onload = function() {
	var qrWrap = document.getElementById("qr");
	var title = document.querySelector(".desc_title");
	var url = document.querySelector(".desc_url");
	chrome.tabs.query(
		{
			active: true,
			currentWindow: true
		},
		function(tabs) {
            if (tabs && tabs[0]) {
                var qrnode = new AraleQRCode({
                    render: 'canvas',
                    text: tabs[0].url,
                    size: 160,
                });
                qrWrap.appendChild(qrnode);
				title.innerText = "标题：" + tabs[0].title;
				url.innerText = "地址：" + tabs[0].url;
			}
		}
	);
};
