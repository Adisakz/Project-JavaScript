function calculat(w,l,h){
var sum = Math.ceil((w*l)*h)
return sum ;
}
function price(quantity){
    let pr = 1500
    sum_price = pr * quantity
    
    return sum_price
}
function display(sum,sum_price){
    document.getElementById("quantity").innerHTML = sum +" คิว"
    document.getElementById("price").innerHTML = sum_price +" บาท"
}
function input(w,l,h){

    var w = document.getElementById('w').value
    var l = document.getElementById('l').value
    var h = document.getElementById('h').value 
    var quantity = document.getElementById('quantity').value 
    s1 = calculat(w,l,h) ; 
    s2 = price(s1);
    display(s1,s2)
    show();
    
}

function show(){
    var dis = document.getElementById("show_ans");
    if(dis.style.display == "none"){
        dis.style.display = "block";      
    }
}

// ราคาปูน / คิว  1350 บาท 