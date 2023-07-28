var outputbox=document.querySelector("#listbox");
var inputtask=document.getElementById("input");
 var arr=[];
inputtask.onkeydown=function(event)
{
    if(event.key=="Enter")
    {   
        if(inputtask.value==false)
        {
            alert("please enter your task");
        }
        else{
            
            addlist();
            inputtask.value="";
        }
     
    }
}
function addlist(){

    var newdata=document.getElementById("input").value;
    if(localStorage.getItem("taskdata")==null)
    {
      localStorage.setItem("taskdata",'[]');
    }
    var olddata=JSON.parse(localStorage.getItem('taskdata'));
    olddata.push(newdata);
    localStorage.setItem("taskdata",JSON.stringify(olddata));
    var mydata=JSON.parse(localStorage.getItem("taskdata"));
     var n=mydata.length;

    //creating listbox element
      var taskbox=document.createElement("div");
      var spantask=document.createElement("span");
    spantask.innerHTML=mydata[n-1];
    spantask.style.margin="5px";
    //alert(inputtask.value)
    var checkbox=document.createElement("input");
    checkbox.setAttribute("type","checkbox");
    checkbox.setAttribute("title","check for complete");
    //checkbox.style.margin="10px";
    var btn=document.createElement("input");
    btn.type="button";
    btn.value="X";
    var update=document.createElement("input");
    update.type="button";
    update.style.display="inline-block";
    update.value="edit";
    var hr=document.createElement("hr");
    taskbox.appendChild(spantask);
    taskbox.appendChild(checkbox);
    taskbox.appendChild(btn);
    taskbox.appendChild(update);
    taskbox.appendChild(hr);
    outputbox.appendChild(taskbox);
    outputbox.align="center";
    checkbox.style.marginLeft="300px";;
    btn.style.marginLeft="5px";
    taskbox.style.marginBottom="5px"
    
  
    
    
    //   btn.setAttribute("value","Delete button");
    
    checkbox.onclick=()=>{
      if(checkbox.checked==true)
      {
        spantask.style.textDecoration="line-through";
      }
      else{
        spantask.style.textDecoration="none";
      }
    }
  //updating element 
    update.onclick=()=>{
      var data=JSON.parse(localStorage.getItem("taskdata"));
      //alert(data);
      var parentdiv=(event.target.parentElement);
      // console.log(parentdiv);
      var child=parentdiv.children;
      var currtext=child[0].innerHTML;
      //alert(currtext);
     var updtext=prompt("enter text want to update");
     spantask.innerHTML=updtext;
     var ind=(data.findIndex(checkIndex));
     //alert(ind);
     data[ind]=updtext;
    // alert(data);
     function checkIndex(x){
         
      return x==data[n-1];
     }

    // update in the locastorage
    localStorage.removeItem("taskdata");
    localStorage.setItem("taskdata",JSON.stringify(data));
    }

//deleting element
    btn.onclick=(event)=>{
      var data=JSON.parse(localStorage.getItem("taskdata"));
      alert(data)
      var parentdiv=(event.target.parentElement);
      // console.log(parentdiv);
      var child=parentdiv.children;
      var currtext=child[0].innerHTML;
      var ind=(data.findIndex(checkIndex));
     //alert(ind);
   data.splice(ind,1);
    // alert(data);
     function checkIndex(x){
         
      return x==data[n-1];
     }
     //alert(data);      
    taskbox.remove();
     localStorage.removeItem("taskdata");
     localStorage.setItem("taskdata",JSON.stringify(data));
        
    }
}
const display=()=>{
  var mydata=JSON.parse(localStorage.getItem("taskdata"));
  var n=mydata.length;
  // alert(n);
 //creating listbox element
 for(var i=0;i<mydata.length;i++){

   var taskbox=document.createElement("div");
   var spantask=document.createElement("span");
   spantask.setAttribute("id","text");
   spantask.innerHTML=mydata[i];
   spantask.style.margin="0px";
   //alert(inputtask.value)
   var checkbox=document.createElement("input");
   checkbox.setAttribute("type","checkbox");
   checkbox.setAttribute("id","check");
   checkbox.setAttribute("title","check for complete");
   //checkbox.style.margin="10px";
   var btn=document.createElement("input");
   btn.type="button";
   
   btn.value="X";
   btn.style.marginLeft="8px";
   var hr=document.createElement("hr");
   var update=document.createElement("input");
   update.type="button";
   update.style.display="inline-block";
   update.value="edit";
   taskbox.appendChild(spantask);
   taskbox.appendChild(checkbox);
   taskbox.appendChild(btn);
   taskbox.appendChild(update);
   taskbox.appendChild(hr);
   outputbox.appendChild(taskbox);
   outputbox.align="center";
   checkbox.style.marginLeft="300px";;
   btn.style.marginRight="5px";
   taskbox.style.marginBottom="5px"
  
  checkbox.onclick=(event)=>{
    // alert("fdf");
     var parentdiv=(event.target.parentElement);
    // console.log(parentdiv);
    var child=parentdiv.children;
    
      console.log(child)
    
    if(child[1].checked==true)
    {
      
      
    child[0].style.textDecoration="line-through";
    }
    else{
      child[0].style.textDecoration="none";
    }
  }

  update.onclick=(event)=>{
    var data=JSON.parse(localStorage.getItem("taskdata"));
    //alert(data);
    var parentdiv=(event.target.parentElement);
    // console.log(parentdiv);
    var child=parentdiv.children;
    var currtext=child[0].innerHTML;
   // alert(currtext);
    var updtext=prompt("enter text want to update");
    child[0].innerHTML=updtext;
    console.log(child[3]);

   var ind=(data.findIndex(checkindex));
   data[ind]=updtext;
   //alert(data);
    function checkindex(x){
      return x==currtext;
    }

    // update in the locastorage
    localStorage.removeItem("taskdata");
    localStorage.setItem("taskdata",JSON.stringify(data));

    
  }
  //delete from localstorage
  btn.onclick=(event)=>{
    var data=JSON.parse(localStorage.getItem("taskdata"));
   // alert(data);
    var parentdiv=(event.target.parentElement);
    // console.log(parentdiv);
    var child=parentdiv.children;
    var currtext=child[0].innerHTML;
    console.log(child);
    parentdiv.remove();
    var ind=(data.findIndex(checkIndex));
   // alert(ind);
    data.splice(ind,1);
    // alert(data);
    function checkIndex(x){
      return x==currtext;
     }
    // alert(data);      
    parentdiv.remove();
     localStorage.removeItem("taskdata");
     localStorage.setItem("taskdata",JSON.stringify(data));
     
  }
}
}
display();