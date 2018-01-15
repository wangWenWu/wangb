/**
 * -------------------------------------
 * 自动生成导航菜单
 * -------------------------------------
 * WangBin.2018.01.05.snow
*/
var menuLiHtml = '<li><a href="index.html"><span>首页</span></a></li>';
menuLiHtml += '<li><a href="timebar.html"><span>时间轴</span></a></li>';
menuLiHtml += '<li><a href="travel.html"><span>旅行</span></a></li>';
/*menuLiHtml += '<li><a href=""><span>相册</span></a></li>';*/
menuLiHtml += '<li><a href="contact.html"><span>我们的家</span></a></li>';

$(".menu_box_list ul,.dropdown-menu").html(menuLiHtml);