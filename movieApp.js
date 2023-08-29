

$('#submit').on('click',function(e){
if($('#title').val()==='' || $('#rating').val()===''){
    return
}
    if($('#title').val().length < 2){
        alert('title must be at least 2 characters');
    }
    else if($('#rating').val() > 10 || $('#rating').val() <0){
        alert('Rating must be between 0 and 10');
    }
    else {
        $('section').append(`<span><p>Title: ${$('#title').val()}</p><p>Rating: ${$('#rating').val()} </p><button class='remove'>X</button></span>`);
    }
    
})


$('section').on('click', '.remove',function(){
    $(this).parent().remove();
})