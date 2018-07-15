/**
 * -----------------------------------
 * javascript 创建时间轴Html元素
 * -----------------------------------
 * WangBin.2018.01.08 sunny
 * Modifed By WangBin On 2018.07.14 sunny
*/
var c = 3;//一页显示5张照片
var cp = 1;//当前第一页
var timeBarInfos = [
{"title":"俄罗斯世界杯","content":"池州也疯狂！！！<img src='./images/emoji/clock_thumb.gif'>","imgSrc":"./images/timebar/tb48.jpg","date":"15th June.,2018"},
{"title":"过完端午节","content":"在家吃了，还不忘装一车子过来！","imgSrc":"./images/timebar/tb49.jpg","date":"18th June.,2018"},	
{"title":"回家过端午节","content":"-----","imgSrc":"./images/timebar/tb48.jpg","date":"15th June.,2018"},	
{"title":"家常菜","content":"确实好七，有进步！<img src='./images/emoji/panda_thumb.gif'>","imgSrc":"./images/timebar/tb47.jpg","date":"11th May.,2018"},
{"title":"电驴","content":"换了新电瓶，满血复活，没有肉车，只有肉人！","imgSrc":"./images/timebar/tb46.jpg","date":"2th May.,2018"},
{"title":"碗都是我洗！！！","content":"确认过眼神，我还是辣个洗碗的人！<img src='./images/emoji/wq_thumb.gif'><img src='./images/emoji/sada_thumb.gif'>","imgSrc":"./images/timebar/tb45.jpg","date":"1th May.,2018"},
{"title":"酒肉店","content":"大口吃肉，大口喝小米粥！","imgSrc":"./images/timebar/tb44.jpg","date":"9th Mar.,2018"},
{"title":"大雪中的骐达！","content":"雪太厚，车开不出去了！<img src='./images/emoji/laugh.gif'>","imgSrc":"./images/timebar/tb43.jpg","date":"26th Jan.,2018"},
{"title":"太冷了，是时候窝家七火锅了","content":"真好七啊，第一次七火锅不拉肚子。<img src='./images/emoji/laugh.gif'>","imgSrc":"./images/timebar/tb33.jpg","date":"6th Jan.,2018"},
{"title":"我与舒舒Web 今日发布","content":"我与舒舒Web发布于GitHub Page，目的是记录、展示、分享我们生活中的点点滴滴...<br/>我们享受当下的生活，并对我们的未来充满希望！<img src='./images/emoji/hearta_thumb.gif'>爱父母，<img src='./images/emoji/hearta_thumb.gif'>爱彼此，<img src='./images/emoji/hearta_thumb.gif'>爱生活！配图《罗密欧与朱丽叶》","imgSrc":"./images/timebar/tb1.jpg","date":"3th Jan.,2018"},
{"title":"舒舒过生日咯 ^_^","content":"永远的18岁！么么哒！<img src='./images/emoji/mb_thumb.gif'><img src='./images/emoji/cake.gif'>","imgSrc":"./images/timebar/tb8.jpg","date":"28th Dec.,2018"},
{"title":"云南游-昆明","content":"滇池、红嘴鸥.这么可爱的鸟，你竟然不敢喂！<img src='./images/emoji/h_thumb.gif'><img src='./images/emoji/bs2_thumb.gif'>","imgSrc":"./images/timebar/tb2.jpg","date":"17th Nov.,2017"},
{"title":"云南游-昆明","content":"米线<img src='./images/emoji/cza_thumb.gif'>","imgSrc":"./images/timebar/tb34.jpg","date":"17th Nov.,2017"},
{"title":"云南游-丽江","content":"玉龙雪山，海拔4680米<img src='./images/emoji/good_thumb.gif'>","imgSrc":"./images/timebar/tb3.jpg","date":"14th Nov.,2017"},
{"title":"云南游-丽江古城","content":"丽江古城","imgSrc":"./images/timebar/tb35.jpg","date":"14th Nov.,2017"},
{"title":"云南游-丽江古城","content":"丽江古城OFO单车女神!<img src='./images/emoji/ye_thumb.gif'>","imgSrc":"./images/timebar/tb36.jpg","date":"14th Nov.,2017"},
{"title":"云南游-丽江玉龙","content":"蓝月谷看雪山<img src='./images/emoji/hsa_thumb.gif'>","imgSrc":"./images/timebar/tb37.jpg","date":"14th Nov.,2017"},
{"title":"云南游-丽江","content":"除了人，没有其他生命的雪山山顶<img src='./images/emoji/cry.gif'>","imgSrc":"./images/timebar/tb38.jpg","date":"14th Nov.,2017"},
{"title":"云南游-丽江","content":"飞碟云，我要灰翔啦~<img src='./images/emoji/wg_thumb.gif'>","imgSrc":"./images/timebar/tb39.jpg","date":"14th Nov.,2017"},
{"title":"云南游-丽江","content":"玉龙雪山，飞碟云","imgSrc":"./images/timebar/tb40.jpg","date":"14th Nov.,2017"},
{"title":"云南游-丽江","content":"丽江站，回昆明罗！","imgSrc":"./images/timebar/tb41.jpg","date":"14th Nov.,2017"},
{"title":"云南游-丽江","content":"睡在我上铺的媳妇！晚安~<img src='./images/emoji/heia_thumb.gif'>","imgSrc":"./images/timebar/tb42.jpg","date":"14th Nov.,2017"},
{"title":"云南游-大理洱海","content":"苍山洱海旁，我在大理等着你","imgSrc":"./images/timebar/tb4.jpg","date":"12th Nov.,2017"},
{"title":"云南游-大理洱海","content":"苍山洱海旁，我在大理等着你<img src='./images/emoji/panda_thumb.gif'>","imgSrc":"./images/timebar/tb5.jpg","date":"12th Nov.,2017"},
{"title":"云南游-大理洱海","content":"苍山洱海旁，我在大理等着你","imgSrc":"./images/timebar/tb6.jpg","date":"12th Nov.,2017"},
{"title":"云南游-大理苍山","content":"风花雪月之苍山雪","imgSrc":"./images/timebar/tb7.jpg","date":"12th Nov.,2017"},
{"title":"我们结婚啦！","content":"我：舒舒你愿意嫁给我吗？<img src='./images/emoji/qq_thumb.gif'><br>舒舒：Yes！I Do！","imgSrc":"./images/timebar/tb9.jpg","date":"5th Oct.,2017"},
{"title":"回石台咯","content":"老司机啊！带带我！<img src='./images/emoji/z2_thumb.gif'>","imgSrc":"./images/timebar/tb10.jpg","date":"30th Sep.,2017"},
{"title":"小三首保了","content":"0W20 日产全合成机油，4儿子送的...","imgSrc":"./images/timebar/tb11.jpg","date":"19th Aug.,2017"},
{"title":"最美背影","content":"平天湖畔不只有夫妻树还有这最美的背影<img src='./images/emoji/hsa_thumb.gif'>","imgSrc":"./images/timebar/tb12.jpg","date":"22th July.,2017"},
{"title":"平天湖畔夫妻树","content":"有你就有我，我俩长相依！","imgSrc":"./images/timebar/tb13.jpg","date":"22th July.,2017"},
{"title":"麻辣小龙虾","content":"真好七啊！又麻又辣！<img src='./images/emoji/ye_thumb.gif'><img src='./images/emoji/cza_thumb.gif'>","imgSrc":"./images/timebar/tb14.jpg","date":"10th Jue.,2017"},
{"title":"提车咯！我们会善待你的，小骐达...","content":"2016款日产骐达智行版<img src='./images/emoji/ye_thumb.gif'>","imgSrc":"./images/timebar/tb15.jpg","date":"15th May,2017"},
{"title":"采茶","content":"舒舒：劳动最光荣！<br>我：行，媳妇最光荣！<img src='./images/emoji/tootha_thumb.gif'>我就给你拍张照，晒死了，我回去了！","imgSrc":"./images/timebar/tb16.jpg","date":"3th Apr.,2017"},
{"title":"家乡的大学","content":"池州学院双人一日游，啊哟！鸡排不错哦！","imgSrc":"./images/timebar/tb17.jpg","date":"11th Mar.,2017"},
{"title":"我为昕动带盐","content":"4s店看车中、舒舒猥琐的笑了...<img src='./images/emoji/kbsa_thumb.gif'>","imgSrc":"./images/timebar/tb18.jpg","date":"25th Feb.,2017"},
{"title":"家常便饭","content":"真TM的好七啊！","imgSrc":"./images/timebar/tb19.jpg","date":"11th Feb.,2017"},
{"title":"贴对联过年咯","content":"我们的小家第一次贴上对联咯，万家灯火也有一盏是我们家的。","imgSrc":"./images/timebar/tb20.jpg","date":"11th Feb.,2017"},
{"title":"新家装修中...","content":"舒舒一手操持着装修各种事，辛苦了，媳妇！<img src='./images/emoji/bba_thumb.gif'>","imgSrc":"./images/timebar/tb21.jpg","date":"11th Feb.,2016"},
{"title":"新家装修中...","content":"舒舒一手操持着装修各种事，辛苦了，媳妇！<img src='./images/emoji/bba_thumb.gif'>","imgSrc":"./images/timebar/tb22.jpg","date":"11th Feb.,2016"},
{"title":"新家装修中...","content":"舒舒一手操持着装修各种事，辛苦了，媳妇！<img src='./images/emoji/bba_thumb.gif'>","imgSrc":"./images/timebar/tb23.jpg","date":"11th Feb.,2016"},
{"title":"婚纱照-外景拍摄","content":"^_^","imgSrc":"./images/timebar/tb24.jpg","date":"8th Oct.,2016"},
{"title":"房子今天开始装修啦！","content":"砸墙第一锤前，放鞭炮，摆成6字，寓意装修666，老铁没毛病！<img src='./images/emoji/geili_thumb.gif'>","imgSrc":"./images/timebar/tb25.jpg","date":"6th Oct.,2016"},
{"title":"婚纱照-内景","content":"^_^","imgSrc":"./images/timebar/tb26.jpg","date":"16th Sep.,2016"},
{"title":"试婚纱","content":"其实每一件婚纱穿在舒舒身上都很漂亮！都是最美新娘！<img src='./images/emoji/heia_thumb.gif'>","imgSrc":"./images/timebar/tb27.jpg","date":"15th Sep.,2016"},
{"title":"看房买房...","content":"买买买...","imgSrc":"./images/timebar/tb28.jpg","date":"8th May,2016"},
{"title":"我踩、我踩、我踩踩踩","content":"快点踩啊、《杏花村》庄稼地等着水灌溉呢","imgSrc":"./images/timebar/tb29.jpg","date":"12th Mar.,2016"},
{"title":"村里大坝水库","content":"倒影啊，倒影啊，我喜欢你啊！","imgSrc":"./images/timebar/tb30.jpg","date":"10th Feb.,2016"},
{"title":"化妆品收纳包","content":"多大个人了！连个化妆品包都没，来，小爷我赏你的...<img src='./images/emoji/pig.gif'>","imgSrc":"./images/timebar/tb31.jpg","date":"29th Jan.,2016"},
{"title":"正义使者","content":"我代表卡布达来保护你！<img src='./images/emoji/wg_thumb.gif'>","imgSrc":"./images/timebar/tb32.jpg","date":"22th Nov.,2015"}
];
var len = timeBarInfos.length;
var p = Math.ceil(len/c);

function GetTimeBarHtml()
{
	var htmlStr = "";
	var i = (cp-1)*c;
	for(i;i<cp*c;i++)
	{
		if(cp*c>=timeBarInfos.length)return '';
		
		var info = timeBarInfos[i];
		htmlStr += '<div class="cntl-state"><div class="cntl-content">';
		htmlStr += '<h4>'+info.title+'</h4>';
		htmlStr += '<p>'+info.content+'</p>';
		htmlStr += '</div>';
		htmlStr += '<div class="cntl-image"><img src="'+info.imgSrc+'"></div>';
		htmlStr += '<div class="cntl-icon cntl-center">'+info.date+'</div>';
		htmlStr += '</div>';
	}
	
	return htmlStr;
}

$(".cntl-states").append(GetTimeBarHtml());

$("#PageA").on("click touch",function(e){
	e.stopPropagation();
	e.preventDefault();
	DoPageA();
	initCntr();
});

$("#PageS").on("click touch",function(e){
	e.stopPropagation();
	e.preventDefault();
	//DoPageS();
});
					
function DoPageA()
{
	cp++;
	if(cp>p){alert('Sorry, there are no more photos.');return true;}
	$(".cntl-states").append(GetTimeBarHtml());
}

function DoPageS()
{
	cp--;
	if(cp<1){alert('Sorry, there are no more photos.');return true;}
	$(".cntl-states").append(GetTimeBarHtml());
}
					
function initCntr(op=null)
{
	if(op==null)op = {
		revealbefore: 300,
		anim_class: 'cntl-animate',
		onreveal: function(e){}};
	
	$('.cntl').cntl(op);
}
