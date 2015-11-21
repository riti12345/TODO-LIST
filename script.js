$(document).ready(function()
{
 $('#save').click(function(){
     
     var title=$('#title').val();
     var date=$('#date').val();
     var detail=$('#detail').val();

     $('#title-of-todo').append($('#month-date-year').append("<li>" + "<b>"+ title + " 		"+ "<td>" + date + "</td>" +"</li>"));
    

     event.preventDefault();


 }),

 $('#detail-1').click(function(){
 	 var title=$('#title').val();
     var date=$('#date').val();
     var detail=$('#detail').val();

 	$('#footer').append($('#title-date-detail').append("<li>" + "<b>" + title + "</br>" + date + "</b>"+ "</br>" +detail + "</li>" ));
 	  $('#title').val('');
     $('#date').val('');
     $('#detail').val('');
 	event.preventDefault();

 }),
 $('#delete').click(function(){
 	 var title=$('#title').val();
     var date=$('#date').val();
     var detail=$('#detail').val();

    $("ol").remove();



 }),
   $('#date').datepicker();
 return;
});

