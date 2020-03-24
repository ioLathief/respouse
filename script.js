var lFollowX = 0, lFollowY = 0, x = 0, y = 0, friction = 1 /70;

function moveBackground() 
{ 
  //x has to equal to lFollow(but not immediate value change)
  //so it calculate the rest of the size to add that is (lFollowX - X)
  //I need to add this value bit by bit so, i devided that into a 30
	x = x + (lFollowX - x) * friction;
	y = y + (lFollowY - y) * friction;
  
  
  // css change
  $('.box').css({'transform': 'translateX(' + x + 'px) translateY(' + y +'px)'});
  //loop (this function runs every time but it handled by browser)
  //watch to understand  https://www.youtube.com/watch?v=rNsC1VI9388
	window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e)
{	
  if(!($('.box:hover').length > 0)) { // is mouse not hoverd ?
    //calculate mouse the x and y cordinate 
    /*
              ^ -y
              |  
              | 
      <______________>
      +x      |      -x
              |
              v +y      
    */
		var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX)),
				lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
	
    // 20 percent of mouse move equals to lFollowX and lFollowY 
    //lFollow is movement of box if lFollowX equals to 100 box moves 20px 
		lFollowX = (20 * lMouseX) / 100;
		lFollowY = (10 * lMouseY) / 100;
	}
});

moveBackground();