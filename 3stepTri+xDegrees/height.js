

function saveTheStart(){
 lastLeftConf =  currentLeftConfidence;
 lastMidConf =  currentMidConfidence;
 lastRightConf = currentRightConfidence;
 
 //console.log('lastLeftConf'+lastLeftConf); 
 
}

function updateProbabilities(){

				document.getElementById('amount').innerHTML='Probability: ' +Math.round(currentMidConfidence*100) + ' ' + unit2;
				document.getElementById('amount-left').innerHTML=Math.round(currentLeftConfidence*100)  + ' ' + unit2;
				//document.getElementById('amount-right').innerHTML=ui.value + ' ' + unit2;
				 console.log('lastLeftConf'+ currentLeftConfidence+ ' lastMidConf: '+currentMidConfidence + ' lastRightConf: '+currentRightConfidence); 
	}
	
	function updateProbabilitiesLeft() {
			var diff = currentLeftConfidence -  lastLeftConf;  //upward movement positive!
			 console.log('currentLeftConf'+ currentLeftConfidence); 
			  
			 if(currentRightConfidence - diff >= 0){
			 currentRightConfidence -= diff;
			 }
			 else{
				  currentMidConfidence -=diff;
			 }
	
	         $( "#slider-vertical" ).slider( "option", "value", ( currentMidConfidence *100) );
			  updateProbabilities();
		}
		
		/* moving the middle one!*/
		 function updateProbabilitiesMiddle() {
              var diff = currentMidConfidence -  lastMidConf;  //upward movement positive!
			  
			  if(currentLeftConfidence - diff >= 0){
			    currentLeftConfidence -= (diff) /2;
			  }
			  else{
			   currentRightConfidence -= (diff) /2;
			  }
		       
			 if(currentRightConfidence - diff >= 0){
			    currentRightConfidence -= (diff) /2;
			  }
			  else{
			   currentLeftConfidence -= (diff) /2;
			  }
		        			   
				
				
		        $( "#slider-left" ).slider( "option", "value", (currentLeftConfidence*100) );
				// the right side should adapt as well!-- slider moved...
			   updateProbabilities();
		 }
		 
		 
		 
		 
		 
		 
		 
		function updateProbabilitiesLeft_old() {
				var diff = currentLeftConfidence -  lastLeftConf;  //upward movement positive!
				
				if(currentRightConfidence - diff >= 0 & currentRightConfidence - diff <= 0.5){  // reduce the right
				currentRightConfidence -= diff; 
				}
				else{
				  currentMidConfidence =-diff;
				}
			  updateProbabilities();
		}

		 function updateProbabilitiesMiddle_old() {
				var diff = currentMidConfidence -  lastMidConf;  //upward movement positive!
			   
			   if(currentLeftConfidence - diff >= 0 & currentLeftConfidence - diff <= 0.5){  // reduce the right
				currentLeftConfidence -= diff/2; 
				}
				// the right side should adapt as well!-- slider moved...
			   updateProbabilities();
		 }

function getHighest(y1, y2){

  if(y1 >y2)
  return y1;
  else
  return y2;

}

function getY(y1, y2){  // get the lower value!

  if(y1 >y2)
  return y2;
  else
  return y1;

}

function getHeight2(x1, y1, x2, y2, x3, AreaTri){

  //var q = (x2-x1 )*Math.min(y1,y2)-(x3-x1 )* y1/2-(x2-x3) * y2/2 +(x2-x1 )*Math.abs(y1-y2) /2 + AreaTri - (x2-x1) + (x3-x1)/2 +(x2-x3)/2;
  var q = ( (x2-x1 )*Math.min(y1,y2)-(x3-x1 )* y1/2-(x2-x3) * y2/2 +(x2-x1 )*Math.abs(y1-y2) /2 + AreaTri)    /   ((x2-x1 )-(x3-x1 )/2-(x2-x3 )/2) ;           
  //{(x_2-x_1 )min(y_1,y_2 )-(x_3-x_1 ) y_1/2-(x_2-x_(3) ) y_2/2+(x_2-x_1 )|y_1-y_2 |/2+C_4 }/    {(x_2-x_1 )-(x_3-x_1 )/2-(x_2-x_3 )/2}
  return q;
  }

function getHeight(x1, y1, x2, y2, x3, AreaTri){
    
  var lowestY = Math.min(y1, y2);

  var numA = (x2-x1);
  var numB = (x3-x1);
  var numC = (x2-x3);
  
  var areaA =   numA * Math.abs(y1 - y2) /2 + AreaTri; //Math.sqrt( Math.pow((),2) + Math.pow(Math.abs(y1 - y2),2) ) + AreaTri;  //that what we have for sure!
 /*
 var all = numA * (Q-lowestY);  // (numA * Q -  numA * lowestY)
  var areaB = numB * (Q - y1) /2;   // (numB * Q -  numB * y1) /2  see error here!
  var areaC = numC * (Q - y2) /2;    //   (numC * Q -  numC * y2) /2
 
  // equation:
                        all = areaA +          areaB           + areaC;  // so what is Q?
  
  numA * Q -  numA * lowestY = areaA +  (numB * Q -  numB * y1) /2  +   (numC * Q -  numC * y2) /2  // +  numA * lowestY
  
  numA * Q  = areaA +  (numB * Q -  numB * y1) /2  +   (numC * Q -  numC * y2) /2  + numA * lowestY  // simplify
  
  numA * Q  = areaA +  numB * Q /2 -  (numB * y1) /2  +   numC * Q/2 -  numC * y2 /2  + numA * lowestY //  - numB * Q /2  & - numC * Q /2 
  
  numA * Q - numB * Q /2 -  numC * Q/2   = areaA  -  (numB * y1) /2   -  numC * y2 /2  + numA * lowestY // take Q out!
  
 Q * ( numA - numB/2 - numC/2 )   = areaA  -  (numB * y1) /2   -  numC * y2 /2  + numA * lowestY  // divide by ( numA - numB/2 - numC/2 )   */
  
 var  q =  (areaA  -  (numB * y1) /2   -  numC * y2 /2  + numA * lowestY) / ( numA - numB/2 - numC/2 ) ;
 return q;
}