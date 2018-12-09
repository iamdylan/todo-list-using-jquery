//Snippet for toggling the strikethrough of complete tasks
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Delete a task by clicking on X
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//Handling New task inputs
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();  //grab new todo from input
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>")  //create an li and add to ul
	}
});

//Toggle input field
$(".fa-pencil-alt").click(function(){
	$("input[type='text']").fadeToggle();
});
