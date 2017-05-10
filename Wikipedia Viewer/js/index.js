$('#search-form').submit(function(e){
	e.preventDefault();
});

function search(){
$("#display").empty();

	sq = $('#src').val();

	$.getJSON("https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch="+sq+"&srnamespace=0&srwhat=text&titles=Main%20Page&callback=?", function(d) {

		$.each(d.query.search, function(i, item){
			//console.log(item.title);
			//console.log(item.snippet);
var wiki = '<div class="entry">'+
	'<div class="title">'+item.title+'</div>'+
	'<div class="snippet">'+item.snippet+'</div></div>';
			$("#display").append(wiki);
		});
	});
$('#src').val('');
}
<!-- Credit to David Petrey (https://codepen.io/davidpetrey/pen/XmZJea) -->