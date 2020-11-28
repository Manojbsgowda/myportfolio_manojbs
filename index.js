
$(document).ready(function(e){
$win=$(window);
$navbar=$("#header1");
$toggle1=$(".toggle");
var width=$navbar.width();
toggle_onclick($win,$navbar.width);

//resize event
	$win.resize(function(){
	toggle_onclick($win,$navbar.width);

});
	$toggle.click(function(e){
		$navbar.toggleClass("toggle-left");
	})


});


function toggle_onclick($win,$navbar,width){
	if ($win.width()<=768) {
		$navbar.css({left:`-${width}px`});
	}else{
		$navbar.css({left:'0px'});
	}
}


/* typed text */
var typed=new Typed('#typed',{
	strings:['web Developer','Graphic Designer','Android Developer','Blogger'],
	typeSpeed:30,
	backSpeed:50,
	loop: true,
});

/* typed text for about me*/
var typed_2=new Typed('#typed_2',{
	strings:['web Developer','Graphic Designer','Android Developer','Blogger'],
	typeSpeed:20,
	backSpeed:50,
	loop: true,
});

//smooth effect for scroll
/*document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
	anchor.addEventListner('click',function(e){
		e.preventDefault();

		document.querySelector(this.getAttribute('#')).scrollIntoView([
			behaviour:'smooth']);

	});
});*/

document.querySelectorAll('a[href="#"]').addEventListener("click", function(event) {
  event.preventDefault();
  document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
});
