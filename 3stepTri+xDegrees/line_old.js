

/* from real value!*/
function getPercentagePosition(value){

	   return value/range *diff;	
}

function getPercentageRange(value){

	   return value/range *100;	
}

function adjustLine(){

   var LeftOutxPix = getPercentageRange(currentMinX-min);    
     var LeftxPix = getPercentageRange(left-min);    
   var MidLeftxPix = getPercentageRange(currentMidX - left);   
   var MidRightxPix = getPercentageRange(right - currentMidX);   
   var RightxPix = getPercentageRange(currentMaxX-right);   
   var RightOutxPix = getPercentageRange(max-currentMaxX);
   
   
   
       document.getElementById('left-out').style.width=LeftOutxPix + '%';   
	document.getElementById('left-out').innerHTML=Math.round(0) + '%'; 

    document.getElementById('left').style.width=LeftxPix + '%';   
	//document.getElementById('left').innerHTML=Math.round(currentLeftConfidence*100) + '%';  
	
	 document.getElementById('mid-left').style.width=MidLeftxPix + '%';
	 //document.getElementById('mid-left').innerHTML=Math.round(currentMidConfidence*100) + '%';  
	 
	 document.getElementById('mid-right').style.width=MidRightxPix + '%';
	 //document.getElementById('mid-right').innerHTML=Math.round(currentMidConfidence*100) + '%';  
	 
	 document.getElementById('right').style.width=RightxPix + '%';   
	//document.getElementById('right').innerHTML=Math.round(currentRightConfidence*100) + '%';  	 
	
	document.getElementById('right-out').style.width=RightOutxPix + '%';   
	document.getElementById('right-out').innerHTML=Math.round(0) + '%';  	

}