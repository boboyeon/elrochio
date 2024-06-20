$('.page li:eq(0)').addClass('sidecheck');

let nth = 0;



$('.page li').click(function () {
    nth = $(this).index();
    console.log(nth);
    $('.page li').removeClass('sidecheck').eq(nth).addClass('sidecheck');
    pos = -100 * nth + '%';
    $('main').animate({
        top: pos
    }, 600);
});