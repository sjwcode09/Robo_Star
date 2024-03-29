$(function() {
	let winw;
	let isMobile;

	$(window).resize(function(){
		winw=$(window).width();

		if(winw > 1180){
			isMobile=false;

			if($("#mobile").hasClass("active")){
				$("#mobile").removeClass("active");
				$("body").removeClaszs("fixed");
			}
		}
		else{
			isMobile=true;

			if($("#sitemap").is(":visible")){
				$("#sitemap").removeAttr("style");
			}
		}
	});

	$(window).scroll(function(){
		wint=$(window).scrollTop();

		if(wint > 900){
			$("header").addClass("fixed");
		}
		else{
			$("header").removeClass("fixed");
		}
	});
//2차 네비게이션
	$("#main header .inner nav > ul > li").hover(
		function(){
			$(this).find("ul").addClass("active");
		},
		function(){
			$(this).find("ul").removeClass("active");
		}
	)
//sitemap(pc탭)
		$("#sitemap").click(function(e){
			e.preventDefault();

			$(this).find("ul").removeClass("on");
			$(this).find("ul").addClass("on");
		})
		$("#exit").click(function(e){
			e.preventDefault();
			$("#sitemap").slideUp(500).removeClass("on")
		});	

//moblie(모바일탭)
		$("#tab").click(function(e){
			e.preventDefault();

			if(isMobile){
				$("#mobile").removeClass("active")
				$("#mobile").addClass("active")
				$("body").addClass("fixed");
			}
			else{
				$("#sitemap").slideToggle(500);
			}
		});

		$("#mobile > ul > li").click(function(e){
			e.preventDefault()
			if($(this).hasClass("active") === false){
				$("#mobile > ul > li").removeClass("active")
				$(this).addClass("active")
				$("#mobile ul ul").slideUp(300)
				$(this).children("ul").slideDown(300)
			}
			else {
				$(this).removeClass("active")
				$(this).children("ul").slideUp(300)
			}	
		});
		$("#exit_1 ").click(function(e){
			e.preventDefault();
			$("#mobile").removeClass("active")
			$("body").removeClass("fixed");
		});
// video
	let video=document.getElementById("main_video");
	main_video.muted=true;

	video.addEventListener("loadeddata", function() {
		// console.log("loaded event");
		video.play();
	});

	video.addEventListener("ended", function(){
		// console.log("ended event");
		video.currentTime=0;
		video.play();
	});
});