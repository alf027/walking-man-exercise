(function init(){
    var imgObj = document.getElementById('image');
    imgObj.style.position= 'absolute';
    imgObj.style.left = '0px';
    var counter = 0;
    var direction = 'right';
    var width = window.innerWidth;

    window.setInterval(function(){

        if (direction === 'right'){
            counter += 2;
            imgObj.style.left = counter + 'px';

            if (counter >= width - 310) {
                direction = 'left';
                imgObj.style.transform = 'scaleX(-1)';
            }
        } else if (direction === 'left'){

            counter -= 2;
            imgObj.style.left = counter +'px';

            if (counter <= 0) {
                direction = 'right';
                imgObj.style.transform = 'scaleX(+1)';

            }
        }


    }, 20)

})();