 /*  globle console alert*/
  function big(){
      myDiv2.style.width = '1000px';
      myDiv2.style.color = 'red';
 }
var myBtn1 =  document.getElementById("btn1"),
    myBtn2 =  document.getElementById("btn2"),
    myBtn3 =  document.getElementById("btn3"),
    myDiv1 =  document.getElementById("main1"),
    myDiv2 =  document.getElementById("main2");

    
     myBtn1.onclick = function(){
        'use strict';
        myDiv1.style.display = 'none';
     }

     myBtn2.onclick = function(){
        'use strict';
        myBtn1.addEventListener('click', function(){
            myDiv2.style.display = 'none';

        });
     };
       myBtn3.onclick = function(){
        'use strict';
        myBtn1.addEventListener('click', big);
     }
