$(document).ready(function() {
    $(".navbar__menu-btn").click(function() {
        $(".navbar__links").toggleClass("active");
    });
    const slickHome = {
        autoplay: false,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>;',
        nextArrow: '<button type="button" class="slick-next slider__next-arrow">Previous</button>;',
    }

    const slickTestimony = {
        autoplay: true,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev testimony__prev-arrow">Previous</button>;',
        nextArrow: '<button type="button" class="slick-next testimony__next-arrow">Previous</button>;',
    }

    $('.slider').slick(slickHome);
    $('.testimony').slick(slickTestimony);

    $('.footer__form-button').on('click', () => {
        const email = $("#email").val();
        Email.send({
            Host: "smtp.yourisp.com",
            Username: "username",
            Password: "password",
            To: 'them@website.com',
            From: email,
            Subject: "Please add me to your newsletter",
            Body: `Olá, 
            Eu gostaria de ser adicionado a News Letter do site.
            Meu email é ${email}.
            Obrigado! `
        }).then(
            message => alert(message)
        );
    })

});