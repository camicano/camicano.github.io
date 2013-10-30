function offset(div){
    // $('body').scrollTop(div.top);
    $('body').animate({ scrollTop: div.top }, 1000, "easeOutExpo");
}

$(function(){
	$("#Home").on('click', function(){
		$('body').animate({ scrollTop: 0 }, 1000);
	});

	$("#Projects").on('click', function(){
		offset($('#projects').offset());
	});

	$("#Skills").on('click', function(){
		offset($('#skills').offset());
	});

	$("#Contact").on('click', function(){
		offset($('#footer').offset());
	});
});

