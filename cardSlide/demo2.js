$(function(){

	$('.card').on('click',function(){
		var card = $(this);
		card.addClass('show1');
		setTimeout(function(){
			card.addClass('show2');
		},400);
	})
});