$(function(){

	$('.card').on('click',function(){
		var card = $(this);
		card.addClass('show1');
		var time = 200;
		setTimeout(function(){
			card.addClass('show2');
			setTimeout(function(){
				card.addClass('show3');
			},time);
		},time);
	})
});