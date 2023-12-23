$(document).ready(function(){
    $("header button").click(function(){
        $("#form").slideDown();
        e.preventDefault();
    })

    $("#cancel").click(function(){
        $("#form").slideUp();
    })

    $("form").on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $("#task").val();
        const novoItem = $('<li><h1 class="new_tesk">' + novaTarefa + '</h1></li>');
        $("ul").append(novoItem);
        
        $("#task").val(""); 
    })
    
    $("ul").on('click', 'li', function(){
        $(this).toggleClass('risco');
    })
})