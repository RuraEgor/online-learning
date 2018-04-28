/* common */
$(document).ready(function() {
	if($('.mask').length>0) {
		$(".mask").mask("+7 (999) 999-99-99");
	}
	$('.top-information1 select').styler();


	function ress() {
		if($(window).width()<1001) {
			$('.logo,.header__left,.content1__left,.left-menu1,.content1').removeClass('active');
			$('.menu-button1').addClass('active');
		}
		if($(window).width()<761) {
			$('.menu-button1').removeClass('active');
			$('.close-account-menu1').click();
		}
	}
	ress();
	$(window).resize(function() {
		ress();
	});
	$(window).load(function() {
		ress();
	});
	$('.left-menu1__link.sub').click(function(e) {
		e.preventDefault();
		if($(this).attr('data-dt')==0) {
			$(this).attr('data-dt','1').addClass('active').next().slideDown(200).parent().siblings().find('.left-menu1__link.sub').attr('data-dt','0').removeClass('active').next().slideUp(200);
		}
		else {
			$(this).attr('data-dt','0').removeClass('active').next().slideUp(200);
		}
	});
	$('.left-menu1__link.sub[data-dt=1]').addClass('active').next().slideDown(200);
	$(".scroll1").mCustomScrollbar({
	    axis:"x"
	});
	$('.menu-button1').click(function() {
		$(this).toggleClass('active');
		$('.logo,.header__left,.content1__left,.left-menu1,.content1').toggleClass('active');
	});
	$('.search-open1').click(function() {
		$(this).toggleClass('active');
		$('.search1').toggleClass('active').find('input[type=text]').focus();
	});
	var src1;
	$('.account-menu1__current').click(function() {
		$('.search-open1,.search1,.logo,.header__left,.content1__left,.left-menu1,.content1,.menu-button1').removeClass('active');
		$('.header__right').addClass('active');

		if($(window).width()<761) {
			src1=$(window).scrollTop();
			$('.content1').addClass('hide');
			$('.content-author1').addClass('active');
		}
		else {
			$('.content-author1').toggleClass('active');
		}
	});
	$('.close-account-menu1').click(function() {
		$('.header__right').removeClass('active');
		$('.content1').removeClass('hide');
		$('.content-author1').removeClass('active');
		$('body,html').scrollTop(src1);
	});
	$('.search1 input[type=text]').focus(function() {
		$('.close-account-menu1').click();
	});
	$(document).click(function(e){
	    if ($(e.target).closest(".content-author1,.account-menu1").length) return;
		if($(window).width()>760) {
			$('.close-account-menu1').click();
		}
	    e.stopPropagation();
	});
});







