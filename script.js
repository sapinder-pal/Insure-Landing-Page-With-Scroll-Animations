let toggler = $(".navbar-toggler");
let hamburgerIcon = $(".fa-bars");
let closeIcon = $(".fa-times-circle");
let navigationBar = $("#navigation");

let expanded = 0;

toggler.click(()=>	{

	if(!expanded){
		hamburgerIcon.addClass("inactive");
		closeIcon.removeClass("inactive");
		expanded = 1;
	}
	else {
		hamburgerIcon.removeClass("inactive");
		closeIcon.addClass("inactive");
		expanded = 0;
	}
})




//Default Animations (Non-Scroll Animations)

let windowWidth = $(window).innerWidth();

//desktop animations
if(windowWidth >675){

	//#intro h1 appear
	$("#intro-section h1").addClass("slide-pseudo");
	//opacity
	$(".text-wrapper p, .text-wrapper .custom-navlink, .img-wrapper").css("opacity","1")
	//bg pop-ups
	$(".intro-bg-left").animate({width: "195px", height: "504"});
	$(".intro-bg-right").css("transform","rotateZ(0)");
}

//mobile animations
else{
	//opacity
	$(".img-wrapper").css("opacity","1");
	//bg pop-ups
	$(".intro-bg-left-mobile").css("height","165px");
	$(".intro-bg-right-mobile").css("height","330px");
}

//Scroll Animations

let isScrolling = false;
$(window).scroll((event)=> {
	
	//throttle "animations activation rate" down to requestAnimationFrame()
	if(!isScrolling){
		requestAnimationFrame(()=> {
			scrollAnimations();
			isScrolling = false;
		});
	}
	isScrolling = true;
})






function scrollAnimations() {

	let introTextWrapper = $(".text-wrapper");
	let featuresH2 = $("#features-section h2");
	let featuresContainer = $(".features-container");
	let features = $(".feature-item");

	//Features Container
	if(isScrollingDownToward(featuresContainer[0])){

		//featuresH2 slide-pseudo
		if(isPartiallyVisible(featuresH2[0]))
			featuresH2.addClass("slide-pseudo");

		else	featuresH2.removeClass("slide-pseudo");

		//features slide-into-view
		if(isPartiallyVisible(featuresContainer[0]))
			features.addClass("slide-into-view");

		else	features.removeClass("slide-into-view");
	}


	// introTextWrapper slide-pseudo (hidden on small screens)
	if(windowWidth>675 && isScrollingUpToward(introTextWrapper[0])){
		
		if(isPartiallyVisible(introTextWrapper[0]))
			introTextWrapper.addClass("slide-pseudo");
		else	introTextWrapper.removeClass("slide-pseudo");
	}
}







function isPartiallyVisible(ele){

	let eleBoundary = ele.getBoundingClientRect();

	let top = eleBoundary.top;
    let bottom = eleBoundary.bottom;
    let height = eleBoundary.height;

	return ((top + height >= 0) && (height + $(window).innerHeight() >= bottom));
}



//Detect Scroll Direction
let currentScrollPos = $(window).scrollTop();

function isScrollingDownToward(ele){
	let eleBoundary = ele.getBoundingClientRect();

	let scrollingDown = (currentScrollPos < eleBoundary.bottom) ? 1 : 0;

	return scrollingDown;
}

function isScrollingUpToward(ele){
	let eleBoundary = ele.getBoundingClientRect();

	let scrollingUp = (eleBoundary.top < currentScrollPos) ? 1 : 0;

	return scrollingUp;
}
