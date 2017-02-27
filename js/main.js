var active="mul";

function span(cls,txt){
  return "<span class=\"text "+cls+"\">"+txt+"</span>";
}
function red(txt){
  return span("text-danger",txt);
}

function green(txt){
  return span("text-success",txt);
}

function blue(txt){
  return span("text-primary",txt);
}

function yellow(txt){
  return span("text-warning",txt);
}

function colorText(txt){
  var seed = Math.floor(Math.random()*128)%4;
  switch(seed){
    case 0:return red(txt);
    case 1:return blue(txt);
    case 2:return green(txt);
    case 3: return yellow(txt);
  }
}
function animate_mul(x,y){
  var mul=(x*y);
  if(mul==0){
    $("#anim-mul").html("Anything Multiplied by 0 gives 0");
    return;
  }
  if(x==1 || y == 1){
    $("#anim-mul").html("Anything Multiplied by 1 gives the number itself<br>So the multiplication of "+red(x)+" and "+red(y)+" is "+red(mul));
    return;
  }
  var htmlString="For Multiplying "+red(x)+" and "+red(y)+" we will add "+red(x)+" repeteadly "+red(y)+" times<br>";
  for(var i=0;i<y;i++){
    if(i!=0)htmlString+=red(" + ");
    htmlString+=blue(x);
  }
  htmlString+=" = "+yellow(mul);
  htmlString+="<br>Thus, the multiplication of "+red(x)+" and "+red(y)+" gives "+red(mul);
  $("#anim-mul").html(htmlString);
}

function animate_add(x,y){
  var sum = x + y;
  if(x==0 || y==0){
    $("#anim-add").html("Anything added with "+blue(0)+" gives the number "+red("itself")+"<br>So the sum of "+red(x)+" and "+red(y)+" is "+red(sum));
    return;
  }
  var htmlString="To add "+red(x)+" and "+blue(y)+" we will take <br>";
  htmlString+=red(x)+" sticks : ";
  for(var i=0 ; i<x ;i++)htmlString+=red(" I ");
  htmlString+="<br>and<br>"+blue(y)+" sticks : ";
  for(var i=0 ; i<y ;i++)htmlString+=blue(" I ");
  htmlString+="<br>Mixing both groups : ";
  for(var i=0 ; i<x ;i++)htmlString+=red(" I ");
  for(var i=0 ; i<y ;i++)htmlString+=blue(" I ");
  htmlString+="<br>Thus, the addition of "+red(x)+" and "+blue(y)+" gives "+green(sum);
  $("#anim-add").html(htmlString);
}

function animate_sub(x,y){
  var dif = x - y;
  if(y==0){
    $("#anim-sub").html("Anything subtracted with "+blue(0)+" gives the number "+green("itself")+"<br>So the subtraction of "+red(x)+" and "+red(y)+" is "+red(dif));
    return;
  }
  if(y>x){
    $("#anim-sub").html("We cannot subtract a "+red("larger")+" number from a "+yellow("smaller")+" number.<br>");
    return;
  }
  var htmlString="";
  if(y==x){
    htmlString+="Anything subtracted with "+blue("itself")+" gives us "+green(0)+"<br>";
  }
  htmlString+="To subtract "+blue(y)+" from "+red(x)+" we will take <br>";
  htmlString+=red(x)+" sticks : ";
  for(var i=0 ; i<x ;i++)htmlString+=red(" I ");
  htmlString+="<br>and<br>"+blue(y)+" sticks : ";
  for(var i=0 ; i<y ;i++)htmlString+=blue(" I ");
  htmlString+="<br>removing as many red sticks as blue sticks : ";
  for(var i=0 ; i<dif ;i++)htmlString+=red(" I ");
  htmlString+="<strike>";
  for(var i=dif ; i<x ;i++)htmlString+=red(" I ");
  htmlString+="</strike>";
  htmlString+="<br>Thus, subtracting "+blue(y)+" from  "+red(x)+" gives "+green(dif);
  $("#anim-sub").html(htmlString);
}

function animate_div(x,y){
  if(y==0){
    $("#anim-div").html("Nothing can be divided by "+span("text-danger","0"));
    return;
  }else if(y==1){
    $("#anim-div").html("Anything divided by "+blue(1)+" is the number itself.<br> So "+green(x)+" divided by "+green(1)+" is "+yellow(x));
    return;
  }else if(y==x){
    $("#anim-div").html("Anything divided by "+blue("itself")+" is "+red("1")+".<br> So "+green(x)+" divided by "+green(x)+" is "+yellow(1));
    return;
  }if(x<y){
    $("#anim-div").html("Since "+blue(x)+" is less than "+blue(y)+" the quotient will be "+green(0)+" and remainder will be "+yellow(x));
    return;
  }
  var htmlString="We will repeatedly subtract "+blue(y)+" from "+blue(x);
  var quot=Math.floor(x/y),remainder=x%y;
  var i=0;
  while(x>=y){
    htmlString+="<br>"+green(++i)+" -> "+blue(x)+" "+red("-")+" "+blue(y)+" = "+red(x-y);
    x-=y;
  }
  htmlString+="<br> So the "+red("quotient")+" is "+green(quot)+" and the "+red("remainder")+" is "+red(remainder)+"."
  $("#anim-div").html(htmlString);
}

$(document).ready(function(){

  $("#playground-sub").modal("show");
$(".btn").click(function(){
  $("#playground-"+this.id).modal("show");
  active=this.id;
  $("input").val("1");
});
  $("#mul-inp1").keyup(function(e){
    var num=e.keyCode-48;
    console.log(num);
    if(num>=0 && num <=9){
      animate_mul(parseInt($("#mul-inp1").val()),parseInt($("#mul-inp2").val()));
      return;
    }
    if(e.keyCode!=8)
      $(this).val("1");
  });

  $("#mul-inp2").keyup(function(e){
    var num=e.keyCode-48;
    console.log(num);
    if(num>=0 && num <=9){
      animate_mul(parseInt($("#mul-inp1").val()),parseInt($("#mul-inp2").val()));
      return;
    }
    if(e.keyCode!=8)
      $(this).val("1");
  });

  $("#div-inp1").keyup(function(e){
    var num=e.keyCode-48;
    console.log(num);
    if(num>=0 && num <=9){
      animate_div(parseInt($("#div-inp1").val()),parseInt($("#div-inp2").val()));
      return;
    }
    if(e.keyCode!=8)
      $(this).val("1");
  });

  $("#div-inp2").keyup(function(e){
    var num=e.keyCode-48;
    console.log(num);
    if(num>=0 && num <=9){
      animate_div(parseInt($("#div-inp1").val()),parseInt($("#div-inp2").val()));
      return;
    }
    if(e.keyCode!=8)
      $(this).val("1");
  });

  $("#add-inp1").keyup(function(e){
    var num=e.keyCode-48;
    console.log(num);
    if(num>=0 && num <=9){
      animate_add(parseInt($("#add-inp1").val()),parseInt($("#add-inp2").val()));
      return;
    }
    if(e.keyCode!=8)
      $(this).val("1");
  });

  $("#add-inp2").keyup(function(e){
    var num=e.keyCode-48;
    console.log(num);
    if(num>=0 && num <=9){
      animate_add(parseInt($("#add-inp1").val()),parseInt($("#add-inp2").val()));
      return;
    }
    if(e.keyCode!=8)
      $(this).val("1");
  });

  $("#sub-inp1").keyup(function(e){
    var num=e.keyCode-48;
    console.log(num);
    if(num>=0 && num <=9){
      animate_sub(parseInt($("#sub-inp1").val()),parseInt($("#sub-inp2").val()));
      return;
    }
    if(e.keyCode!=8)
      $(this).val("1");
  });

  $("#sub-inp2").keyup(function(e){
    var num=e.keyCode-48;
    console.log(num);
    if(num>=0 && num <=9){
      animate_sub(parseInt($("#sub-inp1").val()),parseInt($("#sub-inp2").val()));
      return;
    }
    if(e.keyCode!=8)
      $(this).val("1");
  });

  $("input").focusout(function(){
    if($(this).val().length==0){
      $(this).val("1");
    }
  });
});
