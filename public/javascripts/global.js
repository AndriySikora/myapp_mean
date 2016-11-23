$(document).ready(function(){
	var server = 'http://localhost:3000';

	$('#button').on('click', function() {
		$.post(server +'/api/cars' , {number:2349, make:"Renault",
		owner:"Vasiliy Ivancev", phone:"+380504258324", arriveDate: '2016-11-01', departureDate: '2016-11-03'})
		.fail(function() {
			console.log("request is not send");
		});
	});
});
