// 初始化 sponsor 的 script
// 用之前，先將所有sponsor logo 照順序以 0.png, 1.png ... 存放在img/sponsors/ 資料夾中。
// 須確保所有 logo 都是png檔，且必須從0開始，不能斷號
// 完成後將底下 num_of_sponsor 的值改成sponsors的總數
// 完成！！！
// PS. 原本 img/sponsors/ 內應該就有三張，請先刪掉，那是我測試用的

var num_of_sponsor=3; // 改這裡
for (var i = 0; i < num_of_sponsor; i++) {
    var img = $('<img>');
	img.attr('src', "img/sponsors/"+String(i)+".png");
	img.appendTo('#sponsor_list');
}

