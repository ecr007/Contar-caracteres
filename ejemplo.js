var contarCaracteres = function(){
    $('.ecr-text-comment').on('keyup',function(){
       var cc = $(this).val().replace(/\s/g, '').length;
        $('.ecr-count-letras').text(cc + " Caracteres");
    });
}
