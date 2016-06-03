/**
 * Created by Vugar on 5/20/2016.
 */
$(function(){

    /*============= Slider =================*/
    var slider = $('.product-slider'),
        list = slider.find('ul.slider-list'),
        length = list.find('li').length,
        width = slider.outerWidth(),
        totalWidth = width * length,
        index = 0,
        next = $('a.next', slider),
        prev= $('a.prev', slider);

    list.find('li').width(width).end().width(totalWidth);

    //responsive
    $(window).resize(function(){
        width = slider.outerWidth();
        totalWidth = width * length;
        list.find('li').width(width).end().width(totalWidth).css('margin-left', '-' + (index * width) + 'px');
    });

    //next button
    next.on('click', function (){
        if ( index < length - 1 ) index++;
        else index = 0;
        list.stop().animate({
            marginLeft: '-' + (index * width)
        }, 500);
        return false;
    });

    //prev button
    prev.on('click', function (){
        if ( index > 0 ) index--;
        else index = length - 1;
        list.stop().animate({
            marginLeft: '-' + (index * width)
        }, 500);
        return false;
    });
    /*============= Slider End =================*/
});