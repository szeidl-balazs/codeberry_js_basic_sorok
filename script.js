function pageLoaded () {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    let size = 50;
    let positionX = 15;
    let positionY = 15;
    let gap = 5;

    for (i = 0; i < 5; i++) { 
              
        for (k = 0; k <= i; k++) {
            context.fillStyle = 'rgba(255,165,0,.5)';
            context.fillRect(positionX + k*(size+gap), positionY + i*(size+gap),size,size);  
        }
        
    }

}

/*A külső ciklus adja hozzá a sorokat, a belső az oszlopokat. */

window.addEventListener("load", pageLoaded);