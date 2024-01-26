let items = document.querySelectorAll('.slider .item');
let active = 3;
items.forEach(item =>{
    let width=item.offsetWidth;
    console.log(width)
    console.log(item)
    item.style.left=`${width/2})`
    console.log("doing")

})
function loadShow(){
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    
    // Right part
    let image_no = 0;
    for(var i = active + 1; i < items.length; i ++){
        image_no++;
        // vals were changed
        items[i].style.transform = `translateX(${220*image_no}px) scale(${1 - 0.15*image_no}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -image_no;
        items[i].style.filter = image_no > 1 ? 'blur(5px)' : '';
        // items[i].style.opacity = image_no > 2 ? 0 : 0.6;
        items[i].style.opacity = image_no > 2 ? 0 : 0.9;
    }

    // left part
     image_no = 0;
    for(var i = (active - 1); i >= 0; i --){
        image_no++;
        // vals were changed
        items[i].style.transform = `translateX(${-220*image_no}px) scale(${1 - 0.15*image_no}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -image_no;
        // items[i].style.filter = 'blur(5px)';
        // items[i].style.opacity = image_no > 2 ? 0 : 0.6;
        items[i].style.filter = image_no > 1 ? 'blur(5px)' : '';
        items[i].style.opacity = image_no > 2 ? 0 : 0.9;
    }
}

loadShow();
let next = document.getElementById('next');
let prev = document.getElementById('prev');
// to show left part images
next.onclick = function(){
   active = active + 1 < items.length ?  active + 1 : active;
   loadShow();
}
// to show right part images
prev.onclick = function(){
    active = active - 1 >= 0 ? active -1 : active;
    loadShow();
}