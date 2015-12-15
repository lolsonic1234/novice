console.log("Javascript loaded up!");

var hits = 5;

var clicks = 0;

var colors = []

colors["bodyColor"] = {red: 77, green: 0, blue: 31};

$(document).ready(function(){
    console.log("Jquery Opened Up!");
});

$('.BioButtonD').click(function(){
    clicks++;
    console.log(clicks);
    colors['bodyColor']['red'] = colors['bodyColor']['red'] - hits;
    
    colors['bodyColor']['blue'] = colors['bodyColor']['blue'] - hits;
    
    $( 'body' ).css( "background-color", "rgb(" + colors['bodyColor']['red'] + "," + colors['bodyColor']['green'] + ", " + colors['bodyColor']['blue']);
    
    if(clicks >= 15){
        $( '.mainBody' ).css("display", "none");
        $( '.demon' ).css("display", "block");
        $( '.demon' ).append("<iframe width='0' height='0' src='https://www.youtube.com/embed/9N5FBsM2-yY?start=39&autoplay=1' frameborder='0' allowfullscreen></iframe>");
    }
});

$('.rules').click(function(){
    
    $( '#slBack' ).css( "display", "none" );
    $( '#slBack' ).css( "height", "0px" );
    $( '#slBack' ).css( "margin-top", "-127.5px" );
    $( '#soullinker' ).css( "display", "none" );
    $( '#soullinker' ).css( "height", "0px" );
    $( '.bioOpener' ).css( "display", "none" );
    $( '.bioOpener' ).css( "height", "0px" );
    $( '.fafOpener' ).css( "height", "0px" );
    $( '.rulesOpener' ).css( "display", "block" );
    $( '.rulesOpener' ).animate({height: "600px"});
    $( '.fafOpener' ).css( "display", "none" );
    console.log(".rules was Clicked");
    
});

$('.bio').click(function(){
    
    $( '#slBack' ).css( "display", "none" );
    $( '#slBack' ).css( "height", "0px" );
    $( '#slBack' ).css( "margin-top", "-127.5px" );
    $( '#soullinker' ).css( "display", "none" );
    $( '#soullinker' ).css( "height", "0px" );
    $( '.rulesOpener' ).css( "display", "none" );
    $( '.rulesOpener' ).css( "height", "0px" );
    $( '.bioOpener' ).css( "display", "block" );
    $( '.bioOpener' ).animate({height: "600px"});
    $( '.fafOpener' ).css( "display", "none" );
    $( '.fafOpener' ).css( "height", "0px" );
    console.log(".bio was Clicked");
    
});

$('.faf').click(function(){
    
    $( '#slBack' ).css( "display", "none" );
    $( '#slBack' ).css( "height", "0px" );
    $( '#slBack' ).css( "margin-top", "-127.5px" );
    $( '.rulesOpener' ).css( "display", "none" );
    $( '.rulesOpener' ).css( "height", "0px" );
    $( '.fafOpener' ).css( "display", "block" );
    $( '.fafOpener' ).animate({height: "600px"});
    $( '.bioOpener' ).css( "display", "none" );
    $( '.bioOpener' ).css( "height", "0px" );
    console.log(".faf was Clicked");
    
});

$('.bioButtonTextN').click(function(){
    
    $( '#slBack' ).css( "display", "none" );
    $( '#slBack' ).css( "height", "0px" );
    $( '#slBack' ).css( "margin-top", "-127.5px" );
    $( '#soullinker' ).css( "display", "none" );
    $( '#soullinker' ).css( "height", "0px" );
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
    
    $( '#slBack' ).css( "display", "none" );
    $( '#slBack' ).css( "height", "0px" );
    $( '#slBack' ).css( "margin-top", "-127.5px" );
    $( '#soullinker' ).css( "display", "none" );
    $( '#soullinker' ).css( "height", "0px" );
    $( '#soullinker' ).css( "display", "none" );
    $( '#soullinker' ).css( "height", "0px" );
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

$('.bioButtonTextND').click(function(){
    
    $( '.bioTestSD' ).css( "display", "none" );
    $( '.bioTestSD' ).css( "height", "0px" );
    $( '.bioTestND' ).css( "display", "block" );
    $( '.bioTestND' ).animate({height: "600px"});
    console.log(".bioButtonND was Clicked");
    
});

$('.bioButtonTextSD').click(function(){
    
    $( '.bioTestND' ).css( "display", "none" );
    $( '.bioTestND' ).css( "height", "0px" );
    $( '.bioTestSD' ).css( "display", "block" );
    $( '.bioTestSD' ).animate({height: "600px"});
    console.log(".bioButtonSD was Clicked");
    
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

$('.d').click(function(){
    
    $( '#slBack' ).css( "display", "none" );
    $( '#slBack' ).css( "height", "0px" );
    $( '#slBack' ).css( "margin-top", "-127.5px" );
    $( '#soullinker' ).css( "display", "none" );
    $( '#soullinker' ).css( "height", "0px" );
    $( '.bioOpenerD' ).css( "display", "block" );
    $( '.bioOpenerD' ).animate({height: "600px"});
    console.log(".d was Clicked");
    
});
