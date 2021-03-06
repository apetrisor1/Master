
$(domLoaded)

function domLoaded() {

	// Function that sends payload object to server for registering
	function register(payload){
			var user = new User();
			user.registerUser(payload).then(displayResponse);
		}
		
		function displayResponse(response){
			console.log(response.authenticated);
			console.log(response.accessToken);
		}
	
	// Click handler for REGISTER button, triggers function register()  : see above
	$('#submit').click(function(){
		let user,pass;
		if($('#username').val().length !== 0){
			user = $('#username').val();
		}
		if($('#password').val().length > 7){
			pass = $('#password').val();
		}
		let agree_gdpr = $('#gdpr-radio').prop("checked");
		console.log()
		if ((user != null && user !== undefined) && (pass != null && pass !== undefined) && (agree_gdpr))
			{
				let payload={
							username: user,
							password: pass
							};
				console.log(payload);
				register(payload);
			}
		else if ((user != null && user !== undefined) && (pass != null && pass !== undefined) && !(agree_gdpr))
		{
			moveArrow();
		}
	});

	// Various click handlers
	$('#info-logo').click(function(){
		$('info').css('display','inline-block');
	})
	$('.left-info').click(function(){
		$('info').css('display','inline-block');
		moveArrow();
	})
	$('.right-info').click(function(){
		// go to login page
		location.reload();
	})
	$('#gdpr-link').click(function(){
		// $('.cookieInfo').css('visibility','visible');
		// location.reload();
	})
	$('.uma').click(function(){
		alert("You will now be redirected to this page's related team project!"+"\n"+"To know about my tasks in this project see this app's 'about'");
		window.open("https://melaniasiit.github.io/frontend5-1/pages/home.html","_blank");
	})



	// CHANGE PAGE STYLE TO WHITE

	function changeCSS(cssFile, cssLinkIndex) {

	    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

	    var newlink = document.createElement("link");
	    newlink.setAttribute("rel", "stylesheet");
	    newlink.setAttribute("type", "text/css");
	    newlink.setAttribute("href", cssFile);

	    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
	}

	$('#yellow-style-picker').click(function(){
		changeCSS('../assets/css/register.css', 1);
	})

	$('#white-style-picker').click(function(){
		changeCSS('../assets/css/register_white.css', 1);
	})
	$('#home').click(function(){
		window.open("../../../../index.html","_self");
	})


	// Moves small arrow @gdpr to alert user
	function moveArrow(){
		$('#small-arrow').css('left','5%');
	}
}