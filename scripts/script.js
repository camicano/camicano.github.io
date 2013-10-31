function offset(div){
    // $('body').scrollTop(div.top);
    $('body').animate({ scrollTop: div.top - 100 }, 700, "easeOutExpo");
}

$(function(){
	$("#Home").on('click', function(){
		$('body').animate({ scrollTop: 0 }, 700, "easeOutExpo");
	});

	$("#Projects").on('click', function(){
		offset($('#projects0').offset());
	});

	$("#Skills").on('click', function(){
		offset($('#skills0').offset());
	});

	$("#Contact").on('click', function(){
		offset($('#footer').offset());
	});
});

