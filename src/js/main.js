//= ../../bower_components/jquery/dist/jquery.min.js
//= ../../bower_components/owl.carousel/dist/owl.carousel.js



"use strict";

//= partials/lazyload.js

function owlCarouselSlider(owlSlider) {

    if ($(owlSlider).length > 0) {

        $(owlSlider).owlCarousel({
            loop: true,
            margin: 30,
            autoplay: false,
            nav: true,
            navContainer: '.promo__nav',
            dots: false,
            slideBy: 1,
            items: 1,
            lazyLoad: true,
            responsive: {
                310: {
                    items: 1
                },

                480: {
                    items: 1
                },

                767: {
                    items: 1
                },

                989: {
                    items: 1
                },

                1280: {
                    items: 1
                },

                1300: {
                    items: 1
                }
            }
        });

    }

}


function owlCarouselSliderProd(owlSlider) {

    if ($(owlSlider).length > 0) {

        $(owlSlider).owlCarousel({
            loop: true,
            margin: 30,
            autoplay: false,
            nav: true,
            dots: false,
            slideBy: 1,
            items: 1,
            lazyLoad: true,
            responsive: {
                310: {
                    items: 3
                },

                480: {
                    items: 3
                },

                767: {
                    items: 3
                },

                989: {
                    items: 3
                },

                1280: {
                    items: 3
                },

                1300: {
                    items: 3
                }
            }
        });

    }

}

function owlCarouselSliderGoods(owlSlider) {

    if ($(owlSlider).length > 0) {

        $(owlSlider).owlCarousel({
            loop: true,
            margin: 30,
            autoplay: false,
            nav: true,
            dots: false,
            slideBy: 1,
            items: 1,
            lazyLoad: true,
            responsive: {
                310: {
                    items: 1
                },

                480: {
                    items: 1
                },

                767: {
                    items: 1
                },

                989: {
                    items: 1
                },

                1280: {
                    items: 1
                },

                1300: {
                    items: 1
                }
            }
        });

    }

}
function owlCarouselSliderProduct(owlSlider) {

    if ($(owlSlider).length > 0) {

        $(owlSlider).owlCarousel({
            loop: true,
            margin: 30,
            autoplay: false,
            nav: true,
            dots: false,
            slideBy: 1,
            items: 1,
            lazyLoad: true,
            onInitialized : pagen,
            onChange: counter,
            
         

            responsive: {
                310: {
                    items: 1
                },

                480: {
                    items: 1
                },

                767: {
                    items: 1
                },

                989: {
                    items: 1
                },

                1280: {
                    items: 1
                },

                1300: {
                    items: 1
                }
            }
        });


        function pagen(event){
            
                $('.owl-prev').after("<div class='slider-pagen d-flex'>1/" + event.item.count+"</div>")
                
        }

        function counter(event) {
            
             var items     = event.item.count;     // Number of items
             var item      = event.item.index;     // Position of the current item
           
           // it loop is true then reset counter from 1
           if(item > items) {
            item = item - items;
          }
           $('.slider-pagen').html(item+"/"+items);
         }
    }

}




function setCaretPosition(e, t) {
    if (e.setSelectionRange) e.focus(), e.setSelectionRange(t, t);
    else if (e.createTextRange) {
        var i = e.createTextRange();
        i.collapse(!0), i.moveEnd("character", t), i.moveStart("character", t), i.select()
    }
}

function getCursorPosition(e) {
    var t = 0;
    if (document.selection) {
        e.focus();
        var i = document.selection.createRange();
        i.moveStart("character", -e.value.length), t = i.text.length
    } else(e.selectionStart || "0" == e.selectionStart) && (t = e.selectionStart);
    return t
}

function inputmask() {

    $('input[name="phone"]').focus(function() {
        if ($(this).val() == "") {
            $(this).val('+7 (');
        }

        setCaretPosition(this, 4);
    });

    $('input[name="phone"]').focusout(function() {
        $(this).mask("+7 (000) 000-00-00", {
            clearIfNotMatch: true
        });
    });

    $('input[name="phone"]').bind("change keyup input click", function() {

        if (getCursorPosition(this) < 4) {
            setCaretPosition(this, 4);
        }

        var num = $(this).val().replace(/\D+/g, "");

        if (num.indexOf("789") === 0 || num.indexOf("77") === 0 || num.indexOf("89") === 0 || num === "" || num === "7") {

            if (num.indexOf("789") === 0 || num.indexOf("77") === 0) {
                num = num.substr(2 - num.length, num.length - 2);
            }

            if (num.indexOf("89") === 0) {
                num = num.substr(1 - num.length, num.length - 1);
            }

            if (num === "7") {
                num = "";
            }

            num = "+7 (" + num;
            $(this).val(num);
            $(this).mask("+7 (000) 000-00-00", {
                clearIfNotMatch: true
            });
            var b = $(this).val();
            $(this).val(b);
        }


    });

    $('input[name="phone"]').mask("+7 (000) 000-00-00", {
        clearIfNotMatch: true
    });

}



$(function() {

    owlCarouselSlider('.promo-carousel-js');
    owlCarouselSliderProd('.prod-slider__carousel-js');
    owlCarouselSliderGoods('.goods__item-slider-js');
    owlCarouselSliderProduct('.product__item-slider-js');
    owlCarouselSliderGoods('.ideas-slider-js');
    
   

});


jQuery( document ).ready(function( $ ) {
    var
   
      $window = $( window ), 
 
      $target = $( "#fixed-scroll-js" ),
 
      $bottom = $( '#end-scroll-js' ), 
 
      $top = $target.offset().top, 
 
      $height = $target.outerHeight(), 

        $left = $('.product').offset().left + $('.product').outerWidth(),

       $bot = $bottom.offset().top + $bottom.outerHeight();
       
   
    $window.on('scroll', function() {
   
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > $top  && scrollTop + $height < $bot) {
   
        
        $target.css( {     
            position : 'fixed',
            top : '10px',     
            left : $left + 'px',
        } );
    } 

        else if ( scrollTop > $top && scrollTop + $height > $bot ) {
 
            // Координата верха: куда нельзя заходить - минус верх - минус высота блока
            var top = $bot - scrollTop - $height;
 
            $target.css( {
                
                top : top ,
            } );
        }
   
      // Иначе возвращаем всё назад
      else {     
   
        $target.css( {     
            position : 'relative',
            top : '',     
            left : '',
        } );
      }
    });
});   
