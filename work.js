function pow(a, b) {
    var result = a;
        for(var i = 1; i<b ;i++){
            result *=a
        }
        return result;
}
var a = +prompt("Введите целое число!");
var b = +prompt("Введите степень!");
pow(a, b );
alert(pow(a, b));
if (b <= 1) {
    alert('Степень ' + b +
        'не поддерживается, введите целую степень, большую 1'
    );
} else {
    alert( pow(a, b) );
}



// var names = [];
// var trueName = false;
// for ( var i = 0; i < 5; i++){
//     names[i]=  prompt("Введите любое имя");
//     names.push(names [i])
// }
// var newName = prompt("Введите ваше имя");
// while (trueName==false){
//
//     if ( newName == names[i]){
//         trueName=true;
//         alert( names[i] + " вы успешно вошли");
//     }
//     else {
//         trueName=true;
//         alert("Ошибка доступа!")
//     }
// }
