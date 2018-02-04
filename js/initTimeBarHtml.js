/**
 * -----------------------------------
 * javascript 创建时间轴Html元素
 * -----------------------------------
 * WangBin.2018.01.08 sunny
*/
var timeBarInfos = [
{"title":"太冷了，是时候窝家七火锅了","content":"真好七啊，第一次七火锅不拉肚子。","imgSrc":"./images/timebar/tb33.jpg","date":"6th Jan.,2018"},
{"title":"我与舒舒Web 今日发布","content":"我与舒舒Web发布于GitHub Page，目的是记录、展示、分享我们生活中的点点滴滴...<br/>我们享受当下的生活，并对我们的未来充满希望！爱父母，爱彼此，爱生活！配图《罗密欧与朱丽叶》","imgSrc":"./images/timebar/tb1.jpg","date":"3th Jan.,2018"},
{"title":"舒舒过生日咯 ^_^","content":"永远的18岁！么么哒！","imgSrc":"./images/timebar/tb8.jpg","date":"28th Dec.,2018"},
{"title":"云南游-昆明","content":"滇池、红嘴鸥","imgSrc":"./images/timebar/tb2.jpg","date":"17th Nov.,2017"},
{"title":"云南游-丽江","content":"玉龙雪山，海拔4680米","imgSrc":"./images/timebar/tb3.jpg","date":"14th Nov.,2017"},
{"title":"云南游-大理洱海","content":"苍山洱海旁，我在大理等着你","imgSrc":"./images/timebar/tb4.jpg","date":"12th Nov.,2017"},
{"title":"云南游-大理洱海","content":"苍山洱海旁，我在大理等着你","imgSrc":"./images/timebar/tb5.jpg","date":"12th Nov.,2017"},
{"title":"云南游-大理洱海","content":"苍山洱海旁，我在大理等着你","imgSrc":"./images/timebar/tb6.jpg","date":"12th Nov.,2017"},
{"title":"云南游-大理苍山","content":"风花雪月之苍山雪","imgSrc":"./images/timebar/tb7.jpg","date":"12th Nov.,2017"},
{"title":"我们结婚啦！","content":"我：舒舒你愿意嫁给我吗？<br>舒舒：Yes！I Do！","imgSrc":"./images/timebar/tb9.jpg","date":"5th Oct.,2017"},
{"title":"回石台咯","content":"老司机啊！带带我！","imgSrc":"./images/timebar/tb10.jpg","date":"30th Sep.,2017"},
{"title":"小三首保了","content":"0W20 日产全合成机油，4儿子送的...","imgSrc":"./images/timebar/tb11.jpg","date":"19th Aug.,2017"},
{"title":"最美背影","content":"平天湖畔不只有夫妻树还有这最美的背影","imgSrc":"./images/timebar/tb12.jpg","date":"22th July.,2017"},
{"title":"平天湖畔夫妻树","content":"有你就有我，我俩长相依！","imgSrc":"./images/timebar/tb13.jpg","date":"22th July.,2017"},
{"title":"提车咯！我们会善待你的，小骐达...","content":"2016款日产骐达智行版","imgSrc":"./images/timebar/tb15.jpg","date":"15th May,2017"},
{"title":"采茶","content":"舒舒：劳动最光荣！<br>我：行，媳妇最光荣！我就给你拍张照，晒死了，我回去了！","imgSrc":"./images/timebar/tb16.jpg","date":"3th Apr.,2017"},
{"title":"家乡的大学","content":"池州学院双人一日游，啊哟！鸡排不错哦！","imgSrc":"./images/timebar/tb17.jpg","date":"11th Mar.,2017"},
{"title":"我为昕动带盐","content":"4s店看车中、舒舒猥琐的笑了...","imgSrc":"./images/timebar/tb18.jpg","date":"25th Feb.,2017"},
{"title":"家常便饭","content":"真TM的好七啊！","imgSrc":"./images/timebar/tb19.jpg","date":"11th Feb.,2017"},
{"title":"贴对联过年咯","content":"我们的小家第一次贴上对联咯，万家灯火也有一盏是我们家的。","imgSrc":"./images/timebar/tb20.jpg","date":"11th Feb.,2017"},
{"title":"新家装修中...","content":"舒舒一手操持着装修各种事，辛苦了，媳妇！","imgSrc":"./images/timebar/tb21.jpg","date":"11th Feb.,2016"},
{"title":"新家装修中...","content":"舒舒一手操持着装修各种事，辛苦了，媳妇！","imgSrc":"./images/timebar/tb22.jpg","date":"11th Feb.,2016"},
{"title":"新家装修中...","content":"舒舒一手操持着装修各种事，辛苦了，媳妇！","imgSrc":"./images/timebar/tb23.jpg","date":"11th Feb.,2016"},
{"title":"婚纱照-外景拍摄","content":"^_^","imgSrc":"./images/timebar/tb24.jpg","date":"8th Oct.,2016"},
{"title":"房子今天开始装修啦！","content":"砸墙第一锤前，放鞭炮，摆成6字，寓意装修666，老铁没毛病！","imgSrc":"./images/timebar/tb25.jpg","date":"6th Oct.,2016"},
{"title":"婚纱照-内景","content":"^_^","imgSrc":"./images/timebar/tb26.jpg","date":"16th Sep.,2016"},
{"title":"试婚纱","content":"其实每一件婚纱穿在舒舒身上都很漂亮！都是最美新娘！","imgSrc":"./images/timebar/tb27.jpg","date":"15th Sep.,2016"},
{"title":"看房买房...","content":"买买买...","imgSrc":"./images/timebar/tb28.jpg","date":"8th May,2016"},
{"title":"我踩、我踩、我踩踩踩","content":"快点踩啊、《杏花村》庄稼地等着水灌溉呢","imgSrc":"./images/timebar/tb29.jpg","date":"12th Mar.,2016"},
{"title":"村里大坝水库","content":"倒影啊，倒影啊，我喜欢你啊！","imgSrc":"./images/timebar/tb30.jpg","date":"10th Feb.,2016"},
{"title":"化妆品收纳包","content":"多大个人了！连个化妆品包都没，来，小爷我赏你的...","imgSrc":"./images/timebar/tb31.jpg","date":"29th Jan.,2016"},
{"title":"正义使者","content":"我代表卡布达来保护你！","imgSrc":"./images/timebar/tb32.jpg","date":"22th Nov.,2015"}
];
var htmlStr = "";
for(i in timeBarInfos)
{
	var info = timeBarInfos[i];
	htmlStr += '<div class="cntl-state"><div class="cntl-content">';
	htmlStr += '<h4>'+info.title+'</h4>';
	htmlStr += '<p>'+info.content+'</p>';
	htmlStr += '</div>';
	htmlStr += '<div class="cntl-image"><img src="'+info.imgSrc+'"></div>';
	htmlStr += '<div class="cntl-icon cntl-center">'+info.date+'</div>';
	htmlStr += '</div>';
}

$(".cntl-states").append(htmlStr);
					
					
					