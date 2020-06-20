var gmap;
function initGMap(x,y) {
    gmap = new google.maps.Map(document.getElementById('gmap'), {
        zoom: 14,
        center: {lat: 10.790405, lng: 106.702661},
        // 關掉所有UI，詳情可見 http://google.com.tw/maps/@23.546162,120.6402133,8z?hl=zh-TW
        disableDefaultUI: true,
        // zoomControl: false
    });
    var infowindow = new google.maps.InfoWindow({
      	content: '<b class="text-small">GEM CENTER</b>'
    });
    var marker = new google.maps.Marker({
		position: {lat: 10.790405, lng: 106.702661},
		map: gmap,
		title:'GEM CENTER'
	});
	infowindow.open(gmap,marker);
	google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(gmap,marker);
    });
}

initGMap();
