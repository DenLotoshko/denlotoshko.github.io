$("document").ready(function(){
	function ToTop() {
		let button = $('.to-top');
	
	
		$(window).on('scroll', () =>{
			if ($(this).scrollTop() >= 50){
				button.fadeIn();
			} else{
				button.fadeOut();
			}
		});
	
	
		button.on('click', (e) => {
			e.preventDefault();
			$('html').animate({scrollTop: 0}, 1000);
		})
	}
	ToTop();

	var bunner = $(".name2");
	bunner.waypoint(function (direction){
		if (direction == 'down') {
			bunner.addClass("active")
		}
	},{offset:'60%'})
	// $('.name2').waypoint(function(){
	// 	$('.name2').addClass('animating zoomIn')	
	// }, {
	// 	offset: '5%'
	// });

	var img1 = $(".inblock-img.inblock-img1");
	img1.waypoint(function (direction){
		if (direction == 'down') {
			img1.addClass("active")
		}
	},{offset:'60%'})


	var img2 = $(".inblock-img.inblock-img2");
	img2.waypoint(function (direction){
		if (direction == 'down') {
			img2.addClass("active")
		}
	},{offset:'60%'})


	var img3 = $(".inblock-img.inblock-img3");
	img3.waypoint(function (direction){
		if (direction == 'down') {
			img3.addClass("active")
		}
	},{offset:'60%'})
});


