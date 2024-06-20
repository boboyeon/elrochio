$('.page li:eq(0)').addClass('sidecheck');

let nth = 0;
let pos = 0;
const MAX = $('section').length - 1;


$('.page li').click(function () {
    nth = $(this).index();
    console.log(nth);
    $('.page li').removeClass('sidecheck').eq(nth).addClass('sidecheck');
    pos = -100 * nth + '%';
    $('main').animate({
        top: pos
    }, 600, function(){
        $('.textBox').removeClass('fadeIn');
        $('main>section').eq(nth).find('.textBox').addClass('fadeIn');
    });
});


/*** 스크롤 이벤트 ***/
$(window).on('wheel', function (parameter) {
    if (parameter.originalEvent.deltaY > 0) {
        if (nth >= MAX) return;
        nth++;
    } else {
        if (nth <= 0) return;
        nth--;
    };
    $('.page li').removeClass('sidecheck').eq(nth).addClass('sidecheck');
    pos = -100 * nth + '%';
    $('main').animate({
        top: pos
    }, 600, function (){
        $('.textBox').removeClass('fadeIn');
        $('main>section').eq(nth).find('.textBox').addClass('fadeIn');
    }
    );
    console.log(parameter.originalEvent.deltaY);
    console.log('nth = ', nth);
});