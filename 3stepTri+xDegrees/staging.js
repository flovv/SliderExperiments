


	function staging () {
	   
	  if(stage ==0) {
	   document.getElementById('infoText').innerHTML='Realistically, what do you think the <b> lowest </b> value could be?';
	   
	   }
	    if(stage ==1){
 	   document.getElementById('infoText').innerHTML='Realistically,  what do you think the  <b> highest  </b>  value could be? ';
	    document.getElementById('sliderb_display_'+0).style.display='block';
		}	

	/*   if(stage ==2) {
	   document.getElementById('infoText').innerHTML=' What is the probability that the high temperature will fall between  <span id="lb"> </span>  and <span id="ub"> </span>  ';
	    document.getElementById('ConfSlider').style.display ='block';
	   }
	  */ 
	  if(stage ==2) {
	   document.getElementById('infoText').innerHTML=' Realistically, what is your most likely estimate? ';
	   // Click then move a third slider to show your best estimate within this range. If you want to choose the exact middle of the range, click the box below. 
	    document.getElementById('bestEstimate').style.display ='block';
		 document.getElementById('sliderb_display_'+2).style.display='block';
	 }
	   
	   if(stage == 3){
	   document.getElementById('container-chart').style.display ='block';
	  document.getElementById('ConfDisplay').style.display ='block';
	   document.getElementById('sliderb_display_'+1).style.display='block';
     
	   
	   document.getElementById('infoText').innerHTML= 'Above you see a graphical representation of your estimate, you can change the estimate by moving the sliders, the graph will adapt. Press submit when you are done.';
	   }
	   
	   stage++;
	
	}