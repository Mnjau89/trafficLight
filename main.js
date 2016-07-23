function semafor(){
     
var boje1 =  $('.boje1');
var boje2 =  $('.boje2');
var boje3 =  $('.boje3');
var boje4 =  $('.boje4');

boje1.eq(0).css('background','red');
boje1.eq(1).css('background','gray');
boje1.eq(2).css('background','gray');

boje2.eq(0).css('background','red');
boje2.eq(1).css('background','gray');
boje2.eq(2).css('background','gray');

boje3.eq(0).css('background','red');
boje3.eq(1).css('background','gray');
boje3.eq(2).css('background','gray');

boje4.eq(0).css('background','red');
boje4.eq(1).css('background','gray');
boje4.eq(2).css('background','gray');

function changeToYellow(){
    boje1[1].style.background = 'yellow';
    boje4[1].style.background = 'yellow';  
}

function changeToGreen(){
    boje1[0].style.background = 'gray';
    boje1[1].style.background = 'gray';
    boje1[2].style.background = 'green';
    boje4[0].style.background = 'gray';
    boje4[1].style.background = 'gray';
    boje4[2].style.background = 'green';   
}

function changeToYellow1(){
    boje2[1].style.background = 'yellow';
    boje3[1].style.background = 'yellow';
    boje1[0].style.background = 'red';
    boje1[1].style.background = 'gray';
    boje1[2].style.background = 'gray';
    boje4[0].style.background = 'red';
    boje4[1].style.background = 'gray';
    boje4[2].style.background = 'gray';
}    

function changeToGreen1(){
    boje2[0].style.background = 'gray';
    boje2[1].style.background = 'gray';
    boje2[2].style.background = 'green';
    boje3[0].style.background = 'gray';
    boje3[1].style.background = 'gray';
    boje3[2].style.background = 'green';
    boje1[0].style.background = 'red';
    boje1[1].style.background = 'gray';
    boje1[2].style.background = 'gray';
    boje4[0].style.background = 'red';
    boje4[1].style.background = 'gray';
    boje4[2].style.background = 'gray';
}

function changeToRed(){
    boje2[0].style.background = 'red';
    boje2[1].style.background = 'gray';
    boje2[2].style.background = 'gray';
    boje3[0].style.background = 'red';
    boje3[1].style.background = 'gray';
    boje3[2].style.background = 'gray';
    boje1[0].style.background = 'red';
    boje1[1].style.background = 'gray';
    boje1[2].style.background = 'gray';
    boje4[0].style.background = 'red';
    boje4[1].style.background = 'gray';
    boje4[2].style.background = 'gray';
}

    setTimeout (changeToYellow,1000);
    setTimeout(changeToGreen,3000);
    setTimeout(changeToRed,7000);
    setTimeout(changeToYellow1,8000);
    setTimeout(changeToGreen1,10000);
    setInterval(semafor,14000);
}
semafor();