var form1 = document.getElementById('form1');

var form2_linea1 = document.getElementById('form2-linea1');

var form2_linea2 = document.getElementById('form2-linea2');

var next1 = document.getElementById('next1');

var next2_linea1 = document.getElementById('next2-linea1');
var next3_linea1 = document.getElementById('next3-linea1');
var next4_linea1 = document.getElementById('next4-linea1');

var next2_linea2 = document.getElementById('next2-linea2');
var next3_linea2 = document.getElementById('next3-linea2');
var next4_linea2 = document.getElementById('next4-linea2');
var next5_linea2 = document.getElementById('next5-linea2');
var next6_linea2 = document.getElementById('next6-linea2');

var progress1 = document.getElementById('progress1');
var progress2 = document.getElementById('progress2');

var step_img1 = document.getElementById('img-progress1');
var step_img2 = document.getElementById('img-progress2');

var step1_form1 = document.getElementById('step1-form1');
var step2_form1 = document.getElementById('step2-form1');

var step1_form2 = document.getElementById('step1-form2');
var step2_form2 = document.getElementById('step2-form2');

/* iconos */ 
var icon1_form1 = document.getElementsByClassName('icon1-form1');
var icon2_form1 = document.getElementsByClassName('icon2-form1');

var icon1_form2 = document.getElementsByClassName('icon1-form2');
var icon2_form2 = document.getElementsByClassName('icon2-form2');


var op1 = document.getElementById('op1');
var op2 = document.getElementById('op2');

var op1_p2 = document.getElementById('op1-p2');
var op2_p2 = document.getElementById('op2-p2');
var op3_p2 = document.getElementById('op3-p2');

var total = document.getElementById('total');

var nt = 0;//el valor acumulado


//funcion que le coloca los puntos al precio
const inversa = (content) =>{
    let inversContent = [];
    for(let i = content.length; i > -1; i--){
        inversContent.push(content[i]);
        if(inversContent.length == 4){
            inversContent.push('.')
        }
        if(inversContent.length == 8){
            inversContent.push('.')
        }
    }

    let inversPrice = inversContent.join('');

    let price = [];
    for(let i = inversPrice.length; i > -1; i--){
        price.push(inversPrice[i]);
    }

    return price.join('');
}

/* linea 1 */
op1.onclick = function(){
    progress2.style.display = 'none';
    progress1.style.display = 'block';
    step_img1.style.left = '53px';
    step_img2.style.left = '1100px';
    nt = 0;
    nt = nt + 1000000;
    total.innerHTML = "$ " + inversa(`${nt}`);

    next1.onclick = function(){
        form1.style.left = '-1100px';
        form2_linea1.style.left = '53px';
        progress1.style.width = '306px';
        step1_form1.style.background = '#F130D5';
        step2_form1.style.border = '1px solid #F130D5';

        //codigo que funciona pero dudo si se puede mejorar
        icon1_form1[0].style.stroke = "#fff";
        icon1_form1[1].style.stroke = "#fff";
        icon2_form1[0].style.stroke = "#F130D5";
    }
}

/* linea 2 */
op2.onclick = function(){

    progress1.style.display = 'none';
    progress2.style.display = 'block';
    step_img2.style.left = '53px';
    step_img1.style.left = '1100px';
    nt = 0;
    nt = nt + 1500000;
    total.innerHTML = "$ " + inversa(`${nt}`);

    next1.onclick = function(){
        form1.style.left = '-1100px';
        form2_linea2.style.left = '53px';
        progress2.style.width = '235px';
        step1_form2.style.background = '#F130D5';
        step2_form2.style.border = '1px solid #F130D5';

        icon1_form2[0].style.stroke = "#fff";
        icon1_form2[1].style.stroke = "#fff";
        icon2_form2[0].style.stroke = "#F130D5";
        icon2_form2[1].style.stroke = "#F130D5";
        icon2_form2[2].style.stroke = "#F130D5";
        icon2_form2[3].style.stroke = "#F130D5";
        icon2_form2[4].style.stroke = "#F130D5";
    }
}

/* logica del form2-linea1 */ 

op1_p2.onclick = function(){
    nt = 1000000;
    nt = nt + 200000;
    total.innerHTML = "$ " + inversa(`${nt}`);
}
op2_p2.onclick = function(){
    nt = 1000000;
    nt = nt + 300000;
    total.innerHTML = "$ " + inversa(`${nt}`);
}
op3_p2.onclick = function(){
    nt = 1000000;
    nt = nt + 400000;
    total.innerHTML = "$ " + inversa(`${nt}`);
}

/* logica del form3-linea1 */ 

var checkbox_form1 = document.getElementsByClassName('checkbox');

/* checkbox_form1.onclick = function(){
    alert('so lo estoy reconociendo');
}

if(checkbox_form1[0].checked == true){
    total.innerHTML = 'hola mundo';
}
 */

$("checkbox").click(
    function(){
        alert('dio click');
    }
)



/* logica del form2-linea2 */ 

var op1_p2_form2 = document.getElementById('op1-p2-form2');
var op2_p2_form2 = document.getElementById('op2-p2-form2');

op1_p2_form2.onclick = function(){
    nt = 1500000;
    nt = nt + 500000;
    total.innerHTML = "$ " + inversa(`${nt}`);
}
op2_p2_form2.onclick = function(){
    nt = 1500000;
    nt = nt + 1000000;
    total.innerHTML = "$ " + inversa(`${nt}`);
}

var nt_temporal = nt;

/* logica del form3-linea2 */ 


/* logica del form4-linea2 */ 

var op1_p4_form2 = document.getElementById('op1-p4-form2');
var op2_p4_form2 = document.getElementById('op2-p4-form2');



var contador = 0;

op1_p4_form2.onclick = function(){

    if(contador == 0){
        nt = nt + 200000;
        total.innerHTML = "$ " + inversa(`${nt}`);
        contador = 1;
    }
    
}

op2_p4_form2.onclick = function(){
    if(contador == 1){
        nt = nt - 200000;
        total.innerHTML = "$ " + inversa(`${nt}`);
        contador = 0;
    }else{
        nt = nt + 0;
        total.innerHTML = "$ " + inversa(`${nt}`);
    }
}


