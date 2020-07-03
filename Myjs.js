function Fullsize(picture){
    p=document.getElementById('pic');

    p.style.backgroundImage = 'url('+picture.src+')';
        p.innerHTML=" ";

       	//p.style.color ="#2ECB03";
        p.style.backgroundSize= "100% 100%";
        fadein(p);
        setTimeout(fadeout,5000,p);
      }

      function undo(){
        var p=document.getElementById('pic');
      p.style.backgroundImage = 'url()';
      p.style.color = "#ffffff";
      p.innerHTML="Hover over another picture";
      fadeout(p);
	}

	function fadein(e) {
             
                	e.style.transition="opacity 2.0s linear 0s";
            e.style.opacity = 1; 
                    
	}

	function fadeout(e) {
		e.style.transition="opacity 2.0s linear 0s";
        	e.style.opacity=0.5;
	}