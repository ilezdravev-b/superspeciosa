// Faq Accordions 
$('button.accordion__button').click(function(){
    $(this).parent(".accordion").find(".accordion--content").slideToggle();
    // $(this).parent(".accordion").siblings().find(".accordion--content").slideUp();
    $(this).parent(".accordion").toggleClass("active");
    // $(this).parent(".accordion").siblings().removeClass("active");
});