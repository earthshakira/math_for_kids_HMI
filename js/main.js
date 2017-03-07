var page=1;
var data=[{
"Name":"yolo",
"Fuel":"full",
"img":"img/1.jpg"
},{
"Name":"golo",
"fuel":"half",
"img":"img/1.jpg"
}];

function renderpage(page){
	var index=page-1;
	$("#car_image").html("<img src=\""+data[index].img+"\"/>");
	var htmlString="";
	for(var key in data[index]) {
		if(key=="img")continue;
		console.log(key);
		 htmlString+="<p>"+key+":"+data[index][key]+"</p>";
	}
	$("#car_specs").html(htmlString);
}


function previous(){
	page--;
	if(page==0)page=1;
	renderpage(page);
}

function next(){
	page++;
	if(page>data.length)page=data.length;
	renderpage(page);
}

function make_nav_li(page,name){
	var li='<li onclick="renderpage('+(page)+')"><a href="#">'+name+'</a></li>';
	return li;
}
function createmodal(){
	//create nav bar
	var prev='<li onclick="previous()"><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>';
	var next='<li onclick="next()"><a href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>';
	var htmlString="";
	htmlString+=prev;
	for(var i=0;i<data.length;i++){
		htmlString+=make_nav_li((i+1),data[i].Name);	
	}
	htmlString+=next;
	$("#pag_nav").html(htmlString);
}

$(document).ready(function(){
	$("#cars").click(function(){
		$("#modal-cars").modal();
	});
	renderpage(1);
	createmodal();
});
