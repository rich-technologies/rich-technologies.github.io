function validateEmail(email) {
      var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      return emailReg.test( email );
    }
        var validates=0;
    
var isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
            },
            mob:function(){
                if($(window).width()<780){
                    return true;
                }
                else
                    return false;
            },
            any: function() {
                return (isMobile.mob() || isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
            }
        };
        $(document).ready(function() {
            $('input,textarea').keyup(function(){
                var okay=0,a=1;
                $('input').each(function(){
                    if($(this).val()==''){
                        okay=0;
                    }
                    else if(a){
                        okay=1;
                        a=0;
                    }
                });
                var val=$('input[type="tel"]').val();
                var email=$('input[name="mail"]').val();
                var isnum = /^\d+$/.test(val)&&val.length>=10;
                if(okay&&isnum && $('textarea').val()!=''&&validateEmail(email)){
                    $('.submit').removeAttr('hover');
                    validated=1;
                }
                else{
                    $('.submit').attr('hover','Check if everything is filled up properly.');
                    validated=0;
                }
            });
            $('.submit').click(function(){
                if(validated)
                $('form').submit();
            });
            var no = $('.slide').length;
            for (var i = 1; i <= no; i++)
                if (i == 1)
                    $('.coursel').append("<div no='" + i + "' class='active'></div>");
                else
                    $('.coursel').append("<div no='" + i + "' ></div>");
            var i = 1;
            $('.slide').each(function() {
                $(this).attr('no', i);
                i++;
            });
            $('.coursel > div').click(function() {
                var no = $(this).attr('no');
                if ($('.active').attr('no') != no)
                    $('.slide').fadeOut();
                $('.slide[no="' + no + '"]').fadeIn();
                $('.coursel > div').removeClass('active');
                $(this).addClass('active');
            });
            setInterval(function() {
                var currno = $('.active').attr('no');
                var nextno = parseInt(currno) + 1;
                if (nextno > no) nextno = 1;
                $('.coursel > div[no="' + nextno + '"]').trigger('click');
            }, 6500);
            var high=$('.testimonials').height();
            if($('.testimonials').height()>$('.popular>div>div:nth-child(1)').height())
                high=$('.testimonials').height();
            else
                high=$('.popular>div>div:nth-child(1)').height();
            $('.popular').height(high);
            var d = new Date();
            var n = d.getFullYear();
            $('.year').text(n);
            var pos=$('.prod_menu a').position().left;
            $('.prodmenu li a span').css({'max-width':$(window).width()-pos-15+'px'})
            $('.prodmenu').css({'left':pos+20+'px'});
            if(!isMobile.any()){
    			$('.prodmenu,.prod_menu').hover(function(){
    				$('.prodmenu').show();
    				$('.prod_menu a').css({'background':'#000'});
    			},function(){
    				$('.prodmenu').hide();
    				$('.prod_menu a').css({'background':'#333'});
    			});
            }
            else{
                var i=0;
                $('.trig').click(function(){
                    $('.menu').slideToggle();
                    if(i%2==0){
                        $('.trig').html('&uarr;');
                    }
                    else{
                        $('.trig').html('&equiv;');
                    }
                    i++;
                });
                $('.prodmenu').clone().insertAfter('.prod_menu').addClass('newmenu');
                $('.prod_menu').click(function(){
                    $('.newmenu').slideToggle();
                });
            }
            var h=[],i=0;
            $('.pro').each(function(){
                h[i]=$(this).height();
                i++;
            });
            Array.prototype.max = function() {
              return Math.max.apply(null, this);
            };
            $('.pro').height(h.max());
            $('.cat img').height($(window).height()/3);
        $('.proinfo p').html('<h2>Details :</h2><br>'+$('.proinfo p').html());
        });