let toggler = $(".navbar-toggler");
let hamburgerIcon = $(".icon-hamburger");
let closeIcon = $(".icon-close");
let navigationBar = $("#navigation");

let expanded = 0;

toggler.click(()=>	{

	if(!expanded){
		hamburgerIcon.css("display","none");
		closeIcon.css("display","initial");
		expanded = 1;
	}
	else {
		hamburgerIcon.css("display","initial");
		closeIcon.css("display","none");
		expanded = 0;
	}
})

//Animations
let windowWidth = $(window).innerWidth();

if(windowWidth >675){

	//pseudo-bar
	$("#intro-section h1").addClass("slide-pseudo");
	//opacity
	$(".text-wrapper p, .text-wrapper .custom-navlink, .img-wrapper").css("opacity","1")
	//bg pop-ups
	$(".intro-bg-left").animate({width: "195px", height: "504"});
	$(".intro-bg-right").css("transform","rotateZ(0) translate(0)");

	//Scroll Animations
	scrollAnimations();
}

//mobile animations
else{

	//opacity
	$(".img-wrapper").css("opacity","1");
	//bd pop-ups
	$(".intro-bg-left-mobile").css("height","165px");
	$(".intro-bg-right-mobile").css("height","330px");

	scrollAnimations();
}







function scrollAnimations() {

	let featuresH2 = $("#features-section h2");
	let featuresContainer = $(".features-container");
	let features = $(".feature-item");

	//featuresH2 pseudo
	if(isPartiallyVisible(featuresH2[0]))
		featuresH2.addClass("slide-pseudo");
	else	featuresH2.removeClass("slide-pseudo");

	//featuresContainer
	if(isPartiallyVisible(featuresContainer[0]))
		features.addClass("slide-into-view");
	else	features.removeClass("slide-into-view");


	// introTextWrapper pseudo (hidden on small screens)
	if(windowWidth>675){
		let introTextWrapper = $(".text-wrapper");
		
		if(isPartiallyVisible(introTextWrapper[0]))
			introTextWrapper.addClass("slide-pseudo");
		else	introTextWrapper.removeClass("slide-pseudo");
	}

	requestAnimationFrame(scrollAnimations);
}








function isPartiallyVisible(ele){

	let eleBoundary = ele.getBoundingClientRect();

	var top = eleBoundary.top;
    var bottom = eleBoundary.bottom;
    var height = eleBoundary.height;
 
    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}
