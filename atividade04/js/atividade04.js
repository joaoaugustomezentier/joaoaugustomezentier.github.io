$(function(){
    
    $("#buscaEndereco").click(function(){
        var url = "https://viacep.com.br/ws/"
        var cep = ""
        url += cep + "/json/";

        $.get(url, function(data, status){
            console.log(data);
        })
    })
    
})