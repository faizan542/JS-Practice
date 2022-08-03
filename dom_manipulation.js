// console.log(document.childNodes[0]);
// console.log(document.childNodes[1]);
// console.log(document.childNodes[1].childNodes[1]);

var a = document.getElementById('main');
// console.log(a.childNodes[0]);
// console.log(a.childNodes)
// -----------------------------Or if you have to call a first child like this 👇
// console.log(a.firstChild);

var b = document.getElementById('firstChild');
////--------------------------- if you to call a sibling of any child
// console.log(b.nextSibling);

////----------------------------- if you have to call a last child
// console.log(a.lastChild);

////------------------------------ if you have to find a parent of any child
// console.log(b.parentNode);

//// -----------------------------finding node type
//console.log(a.childNodes[1].nodeType); //Agr element hua tau type 1 aye gi warna 3 aye gi

//// ----------------------------finding node name
// console.log(a.nodeName);


var c = document.getElementById('para');
// console.log(c.childNodes[0]);
// console.log(c.childNodes[1]);
// console.log(c.childNodes[2]);


var d = document.getElementById('humpty');
var paraCounter = 0;
for(var i =0; i<d.childNodes.length;i++){
    if(d.childNodes[i].nodeType === 1){
        paraCounter++;
    }if(paraCounter === 2){
        d.childNodes[i].innerHTML = "All his men";
        // break;
    }
}