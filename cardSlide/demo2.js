$(function(){
	//more demo
	$('.card-box').append(function(){
		var cards = $(this).find('.card');
		for(var i=10 ;i>0;i--){
			$(this).append(cards.clone().addClass('style'+i%3).attr('style-type','style'+i%3));
		}
		return cards;
	});

	$('.card').on('click',function(){
		var card = $(this);
		card.addClass('show1 active');
		setTimeout(function(){
			card.addClass('show2');
			setTimeout(function(){
				card.addClass('show3');
			},200);
		},300);
	})
});