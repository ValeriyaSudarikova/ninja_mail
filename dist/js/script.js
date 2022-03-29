'use strict'; 

$(document).ready(function() {

    //modal 

    $('#sign_up').on('click', function() {
        $('.overlay, .modal').fadeIn();
    });

    $('.modal__close').on('click', function() {
        $('.overlay, .modal').fadeOut()
    });

    //form 

    function validateForm(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone:'requered'
            },
            messages: {
                name: {
                    required: 'Please, enter your name',
                    minlength: jQuery.validator.format("enter more than {0} letters")
                },
                phone: 'Please, enter you phone number'
            }
        })
    }

    validateForm('#ordering-call');

    $('input[name=phone]').mask("+7 (999) 999 9999");

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#sign-up').fadeOut();
            $('form').trigger('reset');
        });
        return false;
    });

    //promo-form

    $('.personalities__form-submit').on('click', function() {
        $('.personalities__thanks').style.display = 'block';
    })

    // smooth scroll and page up

    $(window).scroll(() => {
        if ($(this).scrollTop() > 700) {
            $('.scroll-up').fadeIn();
        } else {
            $('.scroll-up').fadeOut();
        }
    });

});
