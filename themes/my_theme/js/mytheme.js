Drupal.behaviors.your_module = {
  attach: function(context) {
    (function($) {
      // your code goes here ...
      $(document).ready(function() {
       // alert('Hello World.');
        $('#login').hide();
       $('#login .block').prepend('<div class="subtitle">LOG INTO EP</div>');
       $('#login .primary li:first-child a').prepend('<div class="newtothesite">NEW TO THE SITE?</div>');
       	$('#login .item-list ul li a').append("<input type='button' class ='facebook' name='questionSub' value='CONNECT WITH FACEBOOK'/>")
       	.mouseover(function () {
	        $(this).css();
    	}); 
    		$('#login .item-list ul').prepend('<div class="savetime">SAVE TIME WITH ONE CLICK</div>')
       	.mouseover(function () {
	        $(this).css();
    	}); 
    	$('#login .item-list ul li a img').hide();	 
                 //$('body').css("background-color:black");
        })
        
        $('#login .item-list').prepend('<div class="subtitle">CONNECT SOCIAL NETWORKS</div>');
        //Changing the title of social networks
        //$('#login #content.region h3').prepend('SOCIAL NETWORKS');
        //setTimeout(function(){$('#login #content.region #divGigyaLogin_p0 tbody tr td table tr td div div div').hide();}, 500);
         $('#login').fadeIn(1200,'swing');
         //
         
      	$('#homepage #branding').append('<div id="description">Event is a service that enables event planners and guests alike to pull feeds from social media such as Facebook, Twitter and Instagram to unify your event experience as it’s happening all in one place. Once it’s all over dont’t forget to come and relive the memories.</div>').hide().fadeIn(800,'swing');
      	$('#homepage #description').hide().fadeIn(1400,'swing');
      	$('#homepage #branding').append('<div id="home_main"></div>');
      	$('#homepage #home_main').hide().fadeIn(1400,'swing');
      	$('#homepage .menu-310 a').html('<div id="home_button"></div>').hide().fadeIn(1200,'swing');
    })(jQuery)
  }
}