function hideURLbar()
{
	window.scrollTo(0,1);
}
function changeMenu()
{
	var winWidth;
	if (window.innerWidth) 
		winWidth = window.innerWidth; 
	else if ((document.body) && (document.body.clientWidth)) 
		winWidth = document.body.clientWidth;
	if(winWidth<1100)
	{
		$("#box").hide();
		$(".dropdown").show();
	}
	else
	{
		$(".dropdown").hide();
		$("#box").show();
	}
}			
addEventListener("load", function() {
	setTimeout(hideURLbar, 0);
	setTimeout(changeMenu, 0); }, false);
window.onresize = function(){changeMenu();}