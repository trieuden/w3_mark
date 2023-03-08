function login(e){
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var mb = localStorage.getItem("member");
  var member=JSON.parse(mb);
  var boole = -1;
  for(var i=0;i<member.length;i++){
    if ( username == member[i][0] && password == member[i][1] ) {
      alert("Đăng nhập thành công <3 ")
      var lg = localStorage.getItem("login");
      var login=JSON.parse(lg);
      login = document.getElementById("username").value;
      localStorage.removeItem("login");
      localStorage.setItem("login",JSON.stringify(login));
      var idex = member[i][2];
      boole =1;
      localStorage.setItem("idex",JSON.stringify(idex));
    }

   }
    if(boole==-1) {
      alert("Đăng nhập thất bại !!  ");
      var lg = localStorage.getItem("login");
      var login=JSON.parse(lg);
      login = false;
      localStorage.removeItem("login");
      localStorage.setItem("login",JSON.stringify(login));
    }
    else{
      window.location.href = "./idex.html";
    }
}
function logoutE(){
  var lg = localStorage.getItem("login");
  var login=JSON.parse(lg);
  login = false;
  localStorage.removeItem("login");
  localStorage.setItem("login",JSON.stringify(login));
  document.getElementsByClassName("login-btn")[0].children[0].children[0].innerHTML='<i class="user-icon ti-user"></i>'+
            '<h1>Login</h1>';
  document.getElementsByClassName("login-btn")[0].children[0].children[0].href="./login.html";
}

function profile(x){
  document.getElementById("profile").style.display="block";
  // document.getElementById("main").style.backgroundColor = "red";
  return false;
}
function outprofile(x){
  document.getElementById("profile").style.display="none";
  return false;
}
function loginE(){
  var lg = localStorage.getItem("login");
    var login=JSON.parse(lg);
    if(login!=false){
      document.getElementsByClassName("login-btn")[0].children[0].children[0].innerHTML='<i class="user-icon ti-user"></i>'+
                  '<h1>'+login+
                      '<ul class="subnav">'+
                        '<li onclick="return false"><a onclick ="profile()"> Profile </a></li>'+
                        '<li onclick="logoutE()" style="background-color: rgb(233, 227, 227);" ><a >Đăng Xuất</a></li>'+
                        '<li class="ftadmin" onclick=""><a  href="./thongke.html">Thống Kê</a></li>'+
                  '</h1>';
      document.getElementsByClassName("login-btn")[0].children[0].children[0].href="";
    }
    else{
      document.getElementsByClassName("login-btn")[0].children[0].children[0].innerHTML='<i class="user-icon ti-user"></i>'+
                  '<h1>Login</h1>';
      document.getElementsByClassName("login-btn")[0].children[0].children[0].href="./login.html";
    }
    document.getElementsByClassName("login-btn")[0].onclick=function(e){
      if(login!=false){
      }
      
    }
}
function idprofile(){
  var id = localStorage.getItem("idex");
  var mb = localStorage.getItem("member");
  var member=JSON.parse(mb);
  // document.getElementsByClassName("namepr")[0].innerHTML=member[id][0];
  document.getElementsByClassName("namepr")[0].innerHTML=member[id][0];
  document.getElementsByClassName("emailPr")[0].innerHTML='<i style="color: red; font-size: 17px;">Email:</i> '+member[id][3]+' <input style="position: fixed;right: 150px;display: none;" type="email" class="bemail"> ';
  document.getElementsByClassName("sdtPr")[0].innerHTML='<i style="color: red; font-size: 17px;">SDT:</i> '+member[id][4]+' <input style="position: fixed;right: 165px;display: none;"  class="bsdt"> ';
  document.getElementsByClassName("datePr")[0].innerHTML='<i style="color: red; font-size: 17px;">Ngày Sinh:</i> '+member[id][5]+' <input style="position: relative;right: 87px;display: none;" type="date" class="bday"> ';
}
function editPr(){
  var id = localStorage.getItem("idex");
}
function admin(){
  var id = localStorage.getItem("idex");
  if(id==0){
    console.log(document.getElementsByClassName("ftadmin")[0].style.display="block");
  }
  else{
    console.log(document.getElementsByClassName("ftadmin")[0].style.display="none");
  }
}
function ok(){
  document.getElementsByClassName("bday")[0].style.display="initial";
  document.getElementsByClassName("bemail")[0].style.display="initial";
  document.getElementsByClassName("bsdt")[0].style.display="initial";
  document.getElementsByClassName("edit")[0].style.display="none";
  document.getElementsByClassName("luu")[0].style.display="initial";

}
function luu(){
  var id = localStorage.getItem("idex");
  var mb = localStorage.getItem("member");
  var member=JSON.parse(mb);
  if(document.getElementsByClassName("bday")[0].value.length!=0){
    member[id][5]=document.getElementsByClassName("bday")[0].value;
    console.log(document.getElementsByClassName("bday")[0].value.length);

  }
  if(document.getElementsByClassName("bsdt")[0].value.length!=0){
    member[id][4]=document.getElementsByClassName("bsdt")[0].value;
    console.log(document.getElementsByClassName("bsdt")[0].value);
  }
  if(document.getElementsByClassName("bemail")[0].value.length!=0){
    member[id][3]=document.getElementsByClassName("bemail")[0].value;
  }
  localStorage.removeItem("member");
  localStorage.setItem("member",JSON.stringify(member));
  document.getElementsByClassName("emailPr")[0].innerHTML='<i style="color: red; font-size: 17px;">Email:</i> '+member[id][3]+' <input style="position: fixed;right: 150px;display: none;" type="email" class="bemail"> ';
  document.getElementsByClassName("sdtPr")[0].innerHTML='<i style="color: red; font-size: 17px;">SDT:</i> '+member[id][4]+' <input style="position: fixed;right: 165px;display: none;"  class="bsdt"> ';
  document.getElementsByClassName("datePr")[0].innerHTML='<i style="color: red; font-size: 17px;">Ngày Sinh:</i> '+member[id][5]+' <input style="position: relative;right: 87px;display: none;" type="date" class="bday"> ';
  document.getElementsByClassName("bday")[0].style.display="none";
  document.getElementsByClassName("bemail")[0].style.display="none";
  document.getElementsByClassName("bsdt")[0].style.display="none";
  document.getElementsByClassName("edit")[0].style.display="initial";
  document.getElementsByClassName("luu")[0].style.display="none";
}
