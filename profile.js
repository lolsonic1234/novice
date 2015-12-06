console.log("Javascript loaded up!");

$(document).ready(function(){
    console.log("Jquery Opened Up!");
});

$('.rules').click(function(){
    
    $( '.bioOpener' ).css( "display", "none" );
    $( '.rulesOpener' ).css( "display", "block" );
    $( '.fafOpener' ).css( "display", "none" );
    
});

$('.bio').click(function(){
    
    $( '.rulesOpener' ).css( "display", "none" );
    $( '.bioOpener' ).css( "display", "block" );
    $( '.fafOpener' ).css( "display", "none" );
    
});

$('.faf').click(function(){
    
    $( '.rulesOpener' ).css( "display", "none" );
    $( '.fafOpener' ).css( "display", "block" );
    $( '.bioOpener' ).css( "display", "none" );
    
});
