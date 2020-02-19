//bài tập object 
/*Trần Xuân Văn
21/03/2000
*/

//khai báo object là thuyền
var myBoat = {
    width: 10.5,
    height: 3,
    weight: 10,
    color: 'blue, white, red, black'
};
var co = myBoat.color;
var hei = myBoat.height;
var wei = myBoat.weight;
var wi = myBoat.width;
 function inRe(){
    var re = 'color: '+ co +'<br> height: ' + hei + '<br> weight: ' + wei + '<br> width: ' + wi ;

    return document.getElementById("testR").innerHTML = re;
}
//in kết qủa
console.log(myBoat.color);
