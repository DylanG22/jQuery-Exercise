
$(document).on('DOMContentLoaded',function(){
    console.log("Let's get ready to party with jQuery!");
})  

$('article img').addClass('image-center');


$('p').last().remove();

let randFont = Math.floor(Math.random() * 101);
$('h1').css('font-size', randFont);

$('ol').append('<li>List item #5</li>');


$('ol').remove();
$('aside').append("<p>We sincerely apologise for that list's existence</p>");

$('input').on('change',function(){
    let r = $('input').val()
    let g = $('input').eq(1).val()
    let b = $('input').eq(2).val()
    $('body').css('background-color', `rgb(${r},${g},${b})`)
})




$('img').on('click',function(){
    $(this).remove();
})
