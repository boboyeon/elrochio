//$('.intro').hide();

/****** 인트로 ******/
setTimeout(function () {
    $('.intro').fadeOut(2000);
}, 4000);

$('.img_btn').click(function () {
    $('.intro').fadeOut(800);
});

/****** 풀페이지 ******/
$('.page li:eq(0)').addClass('sidecheck');

let nth = 0;
let pos = 0;
const MAX = $('section').length - 1;

/*** sidepage li 클릭 이벤트 ***/
$('.page li').click(function () {
    nth = $(this).index();
    $('.page li').removeClass('sidecheck').eq(nth).addClass('sidecheck');
    pos = -100 * nth + '%';
    $('main').animate({
        top: pos
    }, 600, function () {
        if (nth == 1) {
            $('.textBox').addClass('fadeIn');
        } else {
            $('.textBox').removeClass('fadeIn');
        }
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
    }, 600, function () {
        if (nth == 1) {
            $('.textBox').addClass('fadeIn');
        } else {
            $('.textBox').removeClass('fadeIn');
        }
    });
    console.log(parameter.originalEvent.deltaY);
    console.log('nth = ', nth);
});




/****** main_slide ******/

/*** autoplay ***/
$('.slide_btn>li').first().addClass('btnCheck');

const EQMAX = $('.slide_btn>li').length - 1;
let auto = 0;


function autoplay() {
    if (auto === 0) {
        auto = setInterval(function () {
            nth++;
            if (nth > EQMAX) nth = 0;
            $('.main_slide ul').animate({
                left: '-100%'
            }, 200, function () {
                $('.main_slide>ul').append($('.main_slide>ul>li:first')).css('left', 0);
                $('.slide_btn>li').removeClass('btnCheck').eq(nth).addClass('btnCheck');
            });
            console.log('nth=', nth);
        }, 5000);
    };
};
autoplay();

$('.slideBox').mouseover(function () {
    clearInterval(auto);
    auto = 0;
}).mouseout(function () {
    autoplay();
});

/*** check_btn ***/
$('.slide_btn>li').click(function () {
    let checkBtn = $(this).index();
    let result = checkBtn - nth;
    nth = checkBtn;
    $('.slide_btn>li').removeClass('btnCheck').eq(nth).addClass('btnCheck');
    if (result > 0) {
        pos = -100 * result + '%';
        $('.main_slide ul').animate({
            left: pos
        }, 200, function () {
            $('.main_slide>ul').append($('.main_slide>ul>li:lt(' + result + ')')).css('left', 0);
        });
    } else if (result < 0) {
        pos = 100 * result + '%';
        result = result + EQMAX;
        $('.main_slide>ul').prepend($('.main_slide>ul>li:gt(' + result + ')')).css('left', pos).animate({
            left: 0
        }, 200);
    } else return;
    console.log('nth=', nth);
});