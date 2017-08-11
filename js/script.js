$(document).ready(function(){
var modal = document.getElementById('myModal');


    var img_1 = document.getElementById('showImg_1');
	var img_2 = document.getElementById('showImg_2');
	var img_3 = document.getElementById('showImg_3');
	var img_4 = document.getElementById('showImg_4');
	var img_5 = document.getElementById('showImg_5');
	var img_6 = document.getElementById('showImg_6');
	var img_7 = document.getElementById('showImg_7');
	var img_8 = document.getElementById('showImg_8');
	var img_9 = document.getElementById('showImg_9');
	var img_10 = document.getElementById('showImg_10');
	var img_11 = document.getElementById('showImg_11');
	var img_12 = document.getElementById('showImg_12');

var modalImg = document.getElementById('img')

img_1.onclick = function() {
	modal.style.display = "block";
	modalImg.src = this.src;
}
img_2.onclick = function() {
	modal.style.display = "block";
	modalImg.src = this.src;
}
img_3.onclick = function() {
	modal.style.display = "block";
	modalImg.src = this.src;
}
img_4.onclick = function() {
	modal.style.display = "block";
	modalImg.src = this.src;
}
img_5.onclick = function() {
	modal.style.display = "block";
	modalImg.src = this.src;
}
img_6.onclick = function() {
	modal.style.display = "block";
	modalImg.src = this.src;
}
img_7.onclick = function() {
	modal.style.display = "block";
	modalImg.src = this.src;
}
img_8.onclick = function() {
	modal.style.display = "block";
	modalImg.src = this.src;
}
img_9.onclick = function() {
	modal.style.display = "block";
	modalImg.src = this.src;
}
img_10.onclick = function() {
	modal.style.display = "block";
	modalImg.src = this.src;
}
img_11.onclick = function() {
	modal.style.display = "block";
	modalImg.src = this.src;
}
img_12.onclick = function() {
	modal.style.display = "block";
	modalImg.src = this.src;
}

});


$(document).ready(function(){
	try{
		var data = JSON.parse(localStorage.getItem('hide'));
	} catch(e) {}

	if(data && data.length) {
		data.forEach(function(src){
			$("img[src$='"+src+"']").parent().hide();
		});
	}

	$('.close_img').on('click', function(){
		$(this).closest('.delete-block').fadeOut(500);
		var img = $(this).prev('img');
		try{
			var data = JSON.parse(localStorage.getItem('hide')) || [];
		} catch(e) {}

		if (data && data.length) {
			data.push(img.attr('src'))
		}else{
			data = [img.attr('src')];
		}
		localStorage.setItem('hide', JSON.stringify(data));

		
	});

$('.button').on('click',function(){
		if(localStorage['hide'].length){		
			localStorage.removeItem("hide");
			$('.delete-block').fadeIn(500);
			}
			
		})
});

$(document).ready(function(){
var count = $("div.delete-block:visible").length;

function RealDate(date) {

  var days = date.getDate();
  if (days < 10) days = '0' + days;

  var month = date.getMonth() + 1;
  if (month < 10) month = '0' + month;

  var year = date.getFullYear();
  if (year < 10) year = '0' + year;

  var hours = date.getHours();
  if(hours < 10) hours = "0" + hours;
  
  var minutes = date.getMinutes();
  if(minutes < 10) minutes = "0" + minutes;

  return days + '.' + month + '.' + year + "  " + hours + ":" + minutes;
}

var d = new Date();
alert(count + " images on this web page " +  RealDate(d) ); 
});