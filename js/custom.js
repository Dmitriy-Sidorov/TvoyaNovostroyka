$(document).ready(function () {

  "use strict";

  var toggles = document.querySelectorAll(".toggle-hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  }
  ;

  function toggleHandler(toggle) {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }

  /*desktop*/
  // var $navigateMainDesctop = $('.menuBlockDesctop .menuList'),
 /* var $navigateMainDesctop = $('.headerFirstLineBlock'),
    yourClickDesctop = false;

  $('.menuBlockDesctop .openMenu').click(function (e) {
    e.preventDefault();
    $navigateMainDesctop.slideDown(300);
    yourClickDesctop = true;
    $(document).bind('click.myEvent', function (e) {
      if (!yourClickDesctop && $(e.target).closest($navigateMainDesctop).length == 0) {
        $navigateMainDesctop.slideUp(300);
        $(document).unbind('click.myEvent');
      }
      yourClickDesctop = false;
    });
  });*/

  /*mobile*/
  var $navigateMainMobile = $('.menuBlockMobile .menuList'),
    yourClickMobile = false;

  $('.menuBlockMobile .openMenu').click(function (e) {
    e.preventDefault();
    $navigateMainMobile.slideDown(300);
    yourClickMobile = true;
    $(document).bind('click.myEvent', function (e) {
      if (!yourClickMobile && $(e.target).closest($navigateMainMobile).length == 0) {
        $navigateMainMobile.slideUp(300);
        $(document).unbind('click.myEvent');
      }
      yourClickMobile = false;
    });
  });

  $(".modalbox").fancybox();
  $(".masked").mask("+7 (999) 999-99-99");
  $(".testiCarousel").owlCarousel({
    loop: false,
    margin: 15,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });
  $(".garCarousel").owlCarousel({
    loop: false,
    margin: 15,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });
  $(".partCarousel").owlCarousel({
    loop: false,
    margin: 15,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      767: {
        items: 3
      },
      992: {
        items: 4
      }
    }
  });

  if($(window).width() >= 992) {
    $('.headerFirstLineBlockFixed').sticky({
      topSpacing: 0,
      bottomSpacing: 380,
      zIndex: 99999
    });
    $(window).scroll(function () {
      var doc = document.documentElement;
      var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
      if (top > 300) {
        $("#sticky-wrapper").show();
        $(".headerFirstLineBlockFixed").show();
      } else {
        $("#sticky-wrapper").hide();
        $(".headerFirstLineBlockFixed").hide();
      }

    });
  }
  $('.headerFirstLine__element a').click( function(){ // ловим клик по ссылке с классом go_to
    var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
    if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000); // анимируем скроолинг к элементу scroll_el
    }
    return false; // выключаем стандартное действие
  });
  $('.menuItem a').click( function(){ // ловим клик по ссылке с классом go_to
    var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
    if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000); // анимируем скроолинг к элементу scroll_el
    }
    return false; // выключаем стандартное действие
  });
	
	function msgSuccess(text) {
		swal({title: "", text: text,   type: "success", confirmButtonText: "OK", confirmButtonColor: "#5db81e"});
	}
		
	function msgError(text) {
		swal({title: "", text: text,   type: "error", confirmButtonText: "OK", confirmButtonColor: "#5db81e"});
	}

	/*callback*/
	$("#callbackForm").submit(function() { //Change
        var th = $(this);
		var id = th.attr("id");

		$.ajax({
			type: 'POST',
			url : '/ajax/callback.php',
			data: th.serialize(),
			cache: false,
			
			complete: function(data){	
				var str = $.parseJSON(data.responseText);
				if(str.err == 1)
				{
					msgError(str.text);
				} 
				else
				{	
					msgSuccess(str.text);
					setTimeout(function() {
						th.trigger("reset");
						$.fancybox.close();
					}, 1000);
				}
			}
						
		});
	
        return false;
    });
		
	/*action*/
	$("#actionForm").submit(function() { //Change
        var th = $(this);
		var id = th.attr("id");

		$.ajax({
			type: 'POST',
			url : '/ajax/action.php',
			data: th.serialize(),
			cache: false,
			
			complete: function(data){	
				var str = $.parseJSON(data.responseText);
				if(str.err == 1)
				{
					msgError(str.text);
				} 
				else
				{	
					msgSuccess(str.text);
					setTimeout(function() {
						th.trigger("reset");
						$.fancybox.close();
					}, 1000);
				}
			}
						
		});
	
        return false;
    });
	
	/*details*/
	$("#detailsForm").submit(function() { //Change
        var th = $(this);
		var id = th.attr("id");

		$.ajax({
			type: 'POST',
			url : '/ajax/details.php',
			data: th.serialize(),
			cache: false,
			
			complete: function(data){	
				var str = $.parseJSON(data.responseText);
				if(str.err == 1)
				{
					msgError(str.text);
				} 
				else
				{	
					msgSuccess(str.text);
					setTimeout(function() {
						th.trigger("reset");
						$.fancybox.close();
					}, 1000);
				}
			}
						
		});
	
        return false;
    });
    
    /*strah*/
    $("#strahForm").submit(function() { //Change
        var th = $(this);
		var id = th.attr("id");

		$.ajax({
			type: 'POST',
			url : '/ajax/strahForm.php',
			data: th.serialize(),
			cache: false,
			
			complete: function(data){	
				var str = $.parseJSON(data.responseText);
				if(str.err == 1)
				{
					msgError(str.text);
				} 
				else
				{	
					msgSuccess(str.text);
					setTimeout(function() {
						th.trigger("reset");
						$.fancybox.close();
					}, 1000);
				}
			}
						
		});
	
        return false;
    });
		
		/*форма первый экран*/
		$("#s1Form").submit(function() { //Change
        var th = $(this);
		var id = th.attr("id");

		$.ajax({
			type: 'POST',
			url : '/ajax/s1Form.php',
			data: th.serialize(),
			cache: false,
			
			complete: function(data){	
				var str = $.parseJSON(data.responseText);
				if(str.err == 1)
				{
					msgError(str.text);
				} 
				else
				{	
					msgSuccess(str.text);
					th.trigger("reset");
				}
			}
						
		});
	
        return false;
    });
		
		/*форма семья*/
		$("#familyForm").submit(function() { //Change
        var th = $(this);
		var id = th.attr("id");

		$.ajax({
			type: 'POST',
			url : '/ajax/family.php',
			data: th.serialize(),
			cache: false,
			
			complete: function(data){	
				var str = $.parseJSON(data.responseText);
				if(str.err == 1)
				{
					msgError(str.text);
				} 
				else
				{	
					msgSuccess(str.text);
					th.trigger("reset");
				}
			}
						
		});
	
        return false;
    });
		
		/*форма советы*/
		$("#s10Form").submit(function() { //Change
        var th = $(this);
		var id = th.attr("id");

		$.ajax({
			type: 'POST',
			url : '/ajax/s10Form.php',
			data: th.serialize(),
			cache: false,
			
			complete: function(data){	
				var str = $.parseJSON(data.responseText);
				if(str.err == 1)
				{
					msgError(str.text);
				} 
				else
				{
          $("#downloadPdf").click();
					msgSuccess(str.text);
					th.trigger("reset");
          $("#downloadPdf")[0].click();
				}
			}
						
		});
	
        return false;
    });

		/*форма задайте вопрос*/
		$("#s12Form").submit(function() { //Change
        var th = $(this);
		var id = th.attr("id");

		$.ajax({
			type: 'POST',
			url : '/ajax/s12Form.php',
			data: th.serialize(),
			cache: false,
			
			complete: function(data){	
				var str = $.parseJSON(data.responseText);
				if(str.err == 1)
				{
					msgError(str.text);
				} 
				else
				{	
					msgSuccess(str.text);
					th.trigger("reset");
				}
			}
						
		});
	
        return false;
    });
		
		$('iframe[allowfullscreen]:not([allowtransparency])').iframeTracker({
		blurCallback: function(){
			// При клике вызываем событие успешной цели
			// Вместо XXXXXX укажите ID счётчика метрики
			yaCounter46711665.reachGoal('YOUTUBE');
            gtag('event', 'clickdopyoutube', { 'event_category': 'YOUTUBE', 'event_action': 'Click', });
			return true;
		}
	});
	

});

