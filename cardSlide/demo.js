$(function(){
	//more demo
	$('.card-box').append(function(){
		var cards = $(this).find('.card');
		for(var i=10 ;i>0;i--){
			$(this).append(cards.clone().addClass('style'+i%3).attr('style-type','style'+i%3));
		}
		return cards;
	});

	$('.card-box').on('click','.btn',function(){
		var closest = $(this).closest('.card');
		var btn = $(this).attr('disabled',true);
		if($(this).attr('data-type') == 'request'){
			closest.addClass('show-to-map');
			setTimeout(function(){
				closest.addClass('show-map');
				btn.removeAttr('disabled').attr('data-type','start').text('START');
				scrollToTop(closest);
			},300);
		}else{
			closest.addClass('close');

			setTimeout(function(){
				closest.find('.info').css('overflow','hidden');
			},180);

			setTimeout(function(){
				closest.attr('class','card '+closest.attr('style-type'));
				btn.removeAttr('disabled').attr('data-type','request').text('REQUEST');
				closest.find('.info').css('overflow','visible');
			},810);
		}

		return false;
	});

	//scroll to card top
	function scrollToTop(card,callback){
		var top  = card.offset().top-10;
		$('body').animate({scrollTop:top},200,callback);
	}

	$('.card-box').on('click','.card',function(){
		var card = $(this);
		scrollToTop(card,function(){
			card.addClass('show');
		});
	});

});