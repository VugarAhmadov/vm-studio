/**
 * Created by Vugar on 5/20/2016.
 */
$(function(){
    /*============= Top Panel =================*/
    // Expand Panel
    $("#open").click(function(e){
        $(".toppanel").slideDown("slow");
        e.preventDefault();
    });

    // Collapse Panel
    $("#close").click(function(e){
        $(".toppanel").slideUp("slow");
        e.preventDefault();
    });

    // Switch buttons from "Log In | Register" to "Close Panel" on click
    $("#toggle a").click(function (e) {
        $("#toggle a").toggle();
        e.preventDefault();
    });
    /*============= Top Panel End =================*/


    /*============= INDEX Slider =================*/
    var slider = $('.slider'),
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
    /*============= INDEX Slider End =================*/


    /*============= Dropdown Menu =================*/
    $.easing.def = "easeOutBounce"; //defoult effecti deyishir

    $('li.button a').click(function(e){
        var dropDown = $(this).parent().next();  //dropdown listi tapir

        $('.dropdown-menu').not(dropDown).slideUp('slow'); //acilan dropdown dan bashqa hamisini bagliyir
        dropDown.slideToggle('slow');

        e.preventDefault(); //click olunanda sehifenin deyiwmesinin qarwisini alir
    });
    /*============= Dropdown Menu End =================*/


    /*============= Hover Olanda =================*/
    $('.items').hover(function(){
        $('.item-hover', this).finish().fadeIn(500);
    }, function(){
        $('.item-hover', this).fadeOut(200);
    });
    /*============= Hover Olanda End =================*/


    /*============= Team Hover Olanda =================*/
    $('.team-persons ul li').hover(function(){
        $('.team2', this).finish().fadeIn(700);
    }, function(){
        $('.team2', this).fadeOut(700);
    });
    /*============= Team Hover Olanda End =================*/


    /*============= Isotope =================*/
    var content = $('.mehsullar'),
        tab = $('ul.tab >li');

    content.isotope({
        filter: '*',
        animationOptions: {
            duration: 1000
        }
    });

    tab.on('click', function(e){
        tab.removeClass('active').filter(this).addClass('active');
        var filter = $(this).data('filter');
        content.isotope({
            filter: filter,
            animationOptions: {
                duration: 1000
            }
        });

        e.preventDefault();
    });
    /*============= Isotope End =================*/



    /*

    //slider
    var slider_item = $('.slider-items ul.slider-item-container > li'),
        slider_buttons = $('.slider-button ul li');

    slider_item.filter(':not(:first)').hide();
    slider_buttons.filter(':first').addClass('active2');

    slider_buttons.on('click', function(e){

        var index = $(this).index();
        slider_item.fadeOut(500).filter(':eq(' + index + ')').fadeIn(500);
        slider_buttons.removeClass('active2');
        $(this).addClass('active2');

        e.preventDefault();
    });

    */
});