function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1.$2");
    return x;
}
var giohang = new Array();
function addProduct(){
    document.getElementById("confirm").style.display="block";
    setTimeout(function(){
        document.getElementById("confirm").style.display="none";
        deletecart(); 
    },1000)
    setTimeout(function(){
        location.reload();
    },1100)
}
function themvaogiohang1(x){
    var lg = localStorage.getItem("login");
    var login=JSON.parse(lg);
    var id = localStorage.getItem("idex");
    if(login!=false){
        if (localStorage.getItem('giohang') != null){
            var box = x.parentElement;
            var gh = localStorage.getItem("giohang");
            var giohang=JSON.parse(gh);
            var box = x.parentElement;
            var boxsp = box.parentElement.children;
            var hinh = document.getElementById("product-img-detail").children[0].src;
            var ten = document.getElementById("product-info-detail").getElementsByClassName("product-name")[0].innerHTML;
            var gia =document.getElementById("product-info-detail").getElementsByClassName("product-price")[0].innerHTML.replace(/[^0-9]/g, '');
            var soluong = boxsp[4].children[1].value;
            var index = id;
            var sp = new Array(hinh, ten, gia,soluong,index);
            var temp =-1;
            for(var i=0;i<giohang.length;i++){
                console.log(sp[1]);
                if(JSON.stringify(giohang[i][1]) == JSON.stringify(sp[1]) && id ==giohang[i][4]){
                    temp = i;
                    break;
                }
            }
            if(temp != -1){
                giohang[temp][3]=Number(giohang[temp][3])+Number(soluong);
                console.log(giohang[temp][3]);
                localStorage.removeItem("giohang");
                localStorage.setItem("giohang",JSON.stringify(giohang));
            }
            else{
                giohang.unshift(sp);
                localStorage.setItem("giohang",JSON.stringify(giohang));
            }
            
          } else {
            var box = x.parentElement;
            var boxsp = box.parentElement.children;
            var hinh = document.getElementById("product-img-detail").children[0].src;
            var ten = document.getElementById("product-info-detail").getElementsByClassName("product-name")[0].innerHTML;
            var gia =document.getElementById("product-info-detail").getElementsByClassName("product-price")[0].innerHTML.replace(/[^0-9]/g, '');
            console.log();
            var soluong = boxsp[4].children[1].value;
            var index = id;
            var sp = new Array(hinh, ten, gia,soluong,index);
            var giohang = new Array();
            giohang.push(sp);
            localStorage.setItem("giohang",JSON.stringify(giohang));
          }
        addProduct();
        
    }
    else{
        alert("Đăng nhập để tiếp tục");
    }
}

function showmycart(){
    var gh = localStorage.getItem("giohang");
    var giohang=JSON.parse(gh);
    var ttgh="";
    var id = localStorage.getItem("idex");
    for(var i = 0;i<giohang.length;i++){
        if(id==giohang[i][4]){
            var sotien=giohang[i][2].replace(/[^0-9]/g, '')*giohang[i][3];
            ttgh +=
            '<div class="item-children style="width: 50px;">'+
                '<h2 style="width: 2%;"><input onclick="totalAmount()" type="checkbox" class="check1sp[]" style="z-index: 1;"></h2>'+
                '<h2 style="width: 20%;position: relative;top: 23px;"  class="name">'+
                    '<i class="stt">'+i+'</i>'+
                    '<i class="img"><img src="'+giohang[i][0]+'" alt=""></i>'+
                    '<i  style="left: 11%;position: relative;">'+giohang[i][1]+'</i>'+
                '</h2>'+
                '<h1>'+numberWithCommas(giohang[i][2])+'</h1>'+
                '<h1 class="soluong">'+
                ' '+giohang[i][3]+' '+
                    '<button class=" ti-angle-up plus-btn" onclick="handlePlus(this)"></button>'+
                    '<button class="ti-angle-down min-btn" onclick="handleMin(this)"  ></button>'+
                '</h1>'+
                '<h1>'+numberWithCommas(sotien)+' đ'+'</h1>'+
                '<h1><button class="xoabtn" onclick="deleteitem(this)">Xóa</button></h1>'+
            '</div>';
        }
    }
    document.getElementById("item").innerHTML+=ttgh;
}
function showmycart2(){
    var gh = localStorage.getItem("giohang");
    var giohang=JSON.parse(gh);
    var ttgh="";
    var dem=0;
    var id = localStorage.getItem("idex");
    for(var i = 0;i<giohang.length;i++){
        if(giohang[i][4]==id){
            dem++;
        }
    }
        var dem1=0
        for(var i = 0;i<giohang.length;i++){
            if(id==giohang[i][4]){
                    ttgh += '<div style="height: 50px;">'+
                    '<h2 class="img"><img src="'+giohang[i][0]+'" alt=""></h2>'+
                    '<h2 class="name">'+giohang[i][1]+'</h2>'+
                    '<h2 class="value">'+numberWithCommas(giohang[i][2])+'đ'+'</h2>';
                    dem1++;
                    if(dem1==2){
                        document.getElementsByClassName("cart-list")[0].style.height='197px';
                        break;
                    }
                    if(dem1==1){
                        document.getElementsByClassName("cart-list")[0].style.height='112px';
                    }
            }
    }
    document.getElementById("item-header").innerHTML+=ttgh;

    }

function onchecked(){
    //input dưới
    document.getElementById('checksum').onclick = function(e){
        if (this.checked){
            item = document.getElementsByClassName("check1sp[]");
            for(var i = 0;i<item.length;i++){
                item[i].checked = true;
                document.getElementsByClassName("checkbox")[0].checked = true;
            }
            totalAmount();
            sumProduct();
        }
        else{
            item = document.getElementsByClassName("check1sp[]");
            for(var i = 0;i<item.length;i++){
                item[i].checked = false;
                document.getElementsByClassName("checkbox")[0].checked = false;
            }
            totalAmount();
            sumProduct();
        }
    };
    //input trên
    document.getElementsByClassName("checkbox")[0].onclick = function(e){
        if (this.checked){
            item = document.getElementsByClassName("check1sp[]");
            for(var i = 0;i<item.length;i++){
                item[i].checked = true;
                document.getElementById('checksum').checked = true;
            }
            totalAmount();
            sumProduct();
        }
        else{
            item = document.getElementsByClassName("check1sp[]");
            for(var i = 0;i<item.length;i++){
                item[i].checked = false;
                document.getElementById('checksum').checked = false;
            }
            totalAmount();
            sumProduct();
        }
    };
}
function onchecked2(){
    item = document.getElementsByClassName("check1sp[]");
    for(var i = 0;i<item.length;i++){
        item[i].checked = true;
        document.getElementById('checksum').checked = true;
        document.getElementsByClassName("checkbox")[0].checked = true;
    }
    totalAmount();
    sumProduct();
    
}
function deleteitem(x){
    var sp = x.parentElement;
    var vitri = sp.children[0].innerHTML;
    console.log(vitri);
    var gh = localStorage.getItem("giohang");
    var giohang=JSON.parse(gh);
    giohang.splice(vitri,1);
    localStorage.removeItem("giohang");
    localStorage.setItem("giohang",JSON.stringify(giohang));
    location.reload();
}

function deletecart(){
    item = document.getElementsByClassName("check1sp[]");
    var gh = localStorage.getItem("giohang");
    var giohang=JSON.parse(gh);
    var id = localStorage.getItem("idex");
    var dem=0;
    for(var i = 0;i<giohang.length;i++){
        if(giohang[i][4]==id){
            dem++;
        }
    }
    for(var i = dem-1;i>=0;i--){
        var dem0=0;
        if(item[i].checked){
            for( var j = 0;j<giohang.length;j++){
                if(giohang[j][4]==id){
                    dem0++;
                }
                if(dem0==i+1){
                    giohang.splice(j,1);
                    console.log(giohang);
                }
            }
        }
    }
    localStorage.removeItem("giohang");
    localStorage.setItem("giohang",JSON.stringify(giohang));
    location.reload();
}
function totalAmount(){
    var sumP = 0;
    console.log(sumP);
    var amount = document.getElementsByClassName("total-amount");
    item = document.getElementsByClassName("check1sp[]");
    for(var i = 0;i<item.length;i++){
        if(item[i].checked){
            sumP+=Number(item[i].parentElement.parentElement.children[2].innerHTML.replace(/[^0-9]/g, ''));        
        }
    }
    amount[0].innerHTML=numberWithCommas(sumP)+ ' ₫';
    sumProduct();
}
function pay(){
    document.getElementById("confirm").style.display="block";
    setTimeout(function(){
        document.getElementById("confirm").style.display="none";
        deletecart();
    },2500)
}

function nullcart(){
    var gh = localStorage.getItem("giohang");
    var giohang=JSON.parse(gh);
    var lg = localStorage.getItem("login");
    var login=JSON.parse(lg);
    // console.log(document.getElementsByClassName("top-nullcart")[0].style.display);
    var id = localStorage.getItem("idex");
    var dem=0;
    for(var i = 0;i<giohang.length;i++){
        if(giohang[i][4]==id){
            dem++;
        }
    }
    if (dem!=0 && login!=false ){
        document.getElementsByClassName("nullcart")[0].style.display="none";
        document.getElementsByClassName("title")[0].style.display="block";
        document.getElementsByClassName("top-nullcart")[0].style.display="none";
    }
    else{
        document.getElementsByClassName("nullcart")[0].style.display="block"; 
        document.getElementsByClassName("title")[0].style.display="none";
        document.getElementsByClassName("top-nullcart")[0].style.display="block";
    }

}

function sumProduct(){
    var sum = 0;
    item = document.getElementsByClassName("check1sp[]");
    for(var i = 0;i<item.length;i++){
        if(item[i].checked){
            sum +=1;
        }
    }
    document.getElementsByClassName("am")[0].innerHTML = sum;
}

function handlePlus(x){
    var stt = x.parentElement.parentElement.children[1].children[0].innerHTML;
    var giatri = x.parentElement.parentElement.children[3].innerText;
    x.parentElement.parentElement.children[3].innerHTML=Number(x.parentElement.parentElement.children[3].innerText)+1+
    '<button class=" ti-angle-up plus-btn" onclick="handlePlus(this)"></button>'+
    '<button class="ti-angle-down min-btn" onclick="handleMin(this)"  ></button>';
    giatri++;
    var gh = localStorage.getItem("giohang");;
    var giohang=JSON.parse(gh);
    console.log(""+giatri);
    giohang[stt][3]= giatri;
    localStorage.removeItem("giohang");
    localStorage.setItem("giohang",JSON.stringify(giohang));
    showmycart();
    location.reload();
}
function handleMin(x){
    if(x.parentElement.children[5].innerHTML>1){
        x.parentElement.children[5].innerHTML=Number(x.parentElement.children[5].innerHTML)-1;
        var stt = x.parentElement.children[1].innerHTML
        console.log(""+stt);
        var gh = localStorage.getItem("giohang");;
        var giohang=JSON.parse(gh);
        giohang[stt][3]=x.parentElement.children[5].innerHTML;
        localStorage.removeItem("giohang");
        localStorage.setItem("giohang",JSON.stringify(giohang));
        showmycart();
        location.reload();
    }
}
function itemChildren(){
    var gh = localStorage.getItem("giohang");
    var giohang=JSON.parse(gh);
    var lg = localStorage.getItem("login");
    var login=JSON.parse(lg);
    var id = localStorage.getItem("idex");
    var dem=0;
    for(var i = 0;i<giohang.length;i++){
        if(giohang[i][4]==id){
            dem++;
        }
    }
    if (dem!=0 && login!=false ){
      document.getElementsByClassName("title")[0].style.display="block";
      document.getElementsByClassName("top-nullcart")[0].style.display="none";
      showmycart2();
    }
    else{
        document.getElementsByClassName("title")[0].style.display="none";
        document.getElementsByClassName("top-nullcart")[0].style.display="block";
    }
}

function themvaogiohang(x){
    var box = x.parentElement;
    var boxsp = box.parentElement.children;
    var hinh = boxsp[0].getElementsByClassName("product-thumb")[0].children[0].src;
    var ten = boxsp[1].getElementsByClassName("product-name")[0].innerText;
    var gia = boxsp[1].getElementsByClassName("product-price")[0].innerText;
    document.getElementById("product-info-detail").getElementsByClassName("product-name")[0].innerHTML=ten;
    document.getElementById("product-img-detail").children[0].src=hinh;
    document.getElementById("product-info-detail").getElementsByClassName("product-price")[0].innerHTML=gia;
    document.getElementById("gallery").children[0].children[0].children[0].src=hinh;
    document.getElementById("product-info-detail").children[4].children[1].value=boxsp[1].children[3].children[1].value;
    console.log(boxsp[1].children[3].children[1].value);
    // console.log(document.getElementById("gallery").children[0].children[1].children[0].src);
    document.getElementsByClassName("box-detail")[0].style.display="block";
}
function outproducts(){
    document.getElementsByClassName("box-detail")[0].style.display="none";
}