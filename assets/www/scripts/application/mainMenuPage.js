	$("#idMainMenuPage").live('pageinit',function(){
		$('#idMakeReserv').live('touchstart',function(){
			$.mobile.changePage("makeReservationPage.html", { transition: "slide" });
		});
		
		$('#idEditBooking').live('touchstart',function(){
			$.mobile.changePage("makeReservationPage.html", { transition: "slide" });
		});
		
		$('#idCancleBooking').live('touchstart',function(){
			$.mobile.changePage("makeReservationPage.html", { transition: "slide" });
		});
		
		$('#idEditProfile').live('touchstart',function(){
			$.mobile.changePage("profilePage.html", { transition: "slide" });
		});		
		
	});