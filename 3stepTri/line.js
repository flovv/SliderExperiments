

/* from real value!*/
function getPercentagePosition(value){

	   return value/range *diff;	
}

function getPercentageRange(value){

	   return value/(max-min) *100;	
}

function triangularArea(a,b){
return a * b /2;
}

function trapezArea(x1, y1, x2, y2){

   var area = triangularArea(Math.max(y1,y2) - Math.min(y1, y2), Math.abs(x1 - x2) );
   
   area += Math.min(y1, y2) * Math.abs(x1 - x2);
   
   return area;
   
}

function normalizeArea(area, sum){

return Math.round(area / sum *100);

}

function adjustLine(){

   var LeftOutxPix = getPercentageRange(currentMin-min);   
   
   var LeftxPix = getPercentageRange(mid-currentMin);   
   var LeftArea = triangularArea(mid-currentMin,height);

   
   var RightxPix = getPercentageRange(currentMax - mid);      
   var RightArea =  triangularArea(currentMax - mid, height);
   
   var RightOutxPix = getPercentageRange(max-currentMax);
   
   var sumArea = RightArea + LeftArea;
   
   
   
    document.getElementById('left-out').style.width=LeftOutxPix + '%';   
	document.getElementById('left-out').innerHTML=Math.round(0) + '%'; 

    document.getElementById('left').style.width=LeftxPix + '%';   
	document.getElementById('left').innerHTML=normalizeArea(LeftArea, sumArea) + '%';  
	
	 
	 document.getElementById('right').style.width=RightxPix + '%';   
	 document.getElementById('right').innerHTML=normalizeArea(RightArea, sumArea) + '%';  	 
	
	document.getElementById('right-out').style.width=RightOutxPix + '%';   
	document.getElementById('right-out').innerHTML=Math.round(0) + '%';  	

}