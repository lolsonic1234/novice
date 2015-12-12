console.log("Javascript loaded up!");

$(document).ready(function(){
    console.log("Jquery Opened Up!");
});

$('.rules').click(function(){
    
    $( '.bioOpener' ).css( "display", "none" );
    $( '.bioOpener' ).css( "height", "0px" );
    $( '.fafOpener' ).css( "height", "0px" );
    $( '.rulesOpener' ).css( "display", "block" );
    $( '.rulesOpener' ).animate({height: "600px"});
    $( '.fafOpener' ).css( "display", "none" );
    console.log(".rules was Clicked");
    
});

$('.bio').click(function(){
    
    $( '.rulesOpener' ).css( "display", "none" );
    $( '.rulesOpener' ).css( "height", "0px" );
    $( '.bioOpener' ).css( "display", "block" );
    $( '.bioOpener' ).animate({height: "600px"});
    $( '.fafOpener' ).css( "display", "none" );
    $( '.fafOpener' ).css( "height", "0px" );
    console.log(".bio was Clicked");
    
});

$('.faf').click(function(){
    
    $( '.rulesOpener' ).css( "display", "none" );
    $( '.rulesOpener' ).css( "height", "0px" );
    $( '.fafOpener' ).css( "display", "block" );
    $( '.fafOpener' ).animate({height: "600px"});
    $( '.bioOpener' ).css( "display", "none" );
    $( '.bioOpener' ).css( "height", "0px" );
    console.log(".faf was Clicked");
    
});

$('.bioButtonTextN').click(function(){
    
    $( '#noviceBack' ).css( "display", "none" );
    $( '#noviceBack' ).css( "height", "0px" );
    $( '#soullinker' ).css( "display", "none" );
    $( '#slBack' ).css( "height", "0px" );
    $( '#slBack' ).css( "display", "none" );
    $( '#soullinker' ).css( "height", "0px" );
    $( '#novice' ).css( "display", "block" );
    $( '#novice' ).animate({height: "600px"});
    console.log(".bioButtonN was Clicked");
    
});

$('.bioButtonTextS').click(function(){
    
    $( '#noviceBack' ).css( "display", "none" );
    $( '#noviceBack' ).css( "height", "0px" );
    $( '#novice' ).css( "display", "none" );
    $( '#novice' ).css( "height", "0px" );
    $( '#slBack' ).css( "height", "0px" );
    $( '#slBack' ).css( "display", "none" );
    $( '#soullinker' ).css( "display", "block" );
    $( '#soullinker' ).animate({height: "600px"});
    console.log(".bioButtonS was Clicked");
    
});

$( '#backN' ).click(function(){
    $( '#novice' ).css( "display", "none" );
    $( '#novice' ).css( "height", "0px" );
    $( '#noviceBack' ).css( "display", "block" );
    $( '#noviceBack' ).animate({height: "600px"});
});

$( '#backNT' ).click(function(){
    $( '#noviceBack' ).css( "display", "none" );
    $( '#noviceBack' ).css( "height", "0px" );
    $( '#novice' ).css( "display", "block" );
    $( '#novice' ).animate({height: "600px"});
});

$( '#backS' ).click(function(){
    $( '#soullinker' ).css( "display", "none" );
    $( '#soullinker' ).css( "height", "0px" );
    $( '#slBack' ).css( "display", "block" );
    $( '#slBack' ).css( "margin-top", "-600px" );
    $( '#slBack' ).animate({height: "600px"});
});

$( '#backST' ).click(function(){
    $( '#slBack' ).css( "display", "none" );
    $( '#slBack' ).css( "height", "0px" );
    $( '#slBack' ).css( "margin-top", "-127.5px" );
    $( '#soullinker' ).css( "display", "block" );
    $( '#soullinker' ).animate({height: "600px"});
});
