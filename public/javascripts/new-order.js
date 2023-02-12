var i=1;

// const form=$("new-order");
// const formData = new FormData(form);
// const output = document.getElementById('output');

// for (const [key, value] of formData) {
//   output.textContent += `${key}: ${value}\n`;
//}
$(".add").click(function(event){
    i++;
    var itm="<label for='text"+i+"'></label><input type='text' name='text"+i+"' id='text"+i+"'>";
    var qnt="<label for='number"+i+"'></label><input type='number' name='number"+i+"' id='number"+i+"'>";
    $(".item").append(itm);
    $(".quantity").append(qnt);
    event.preventDefault();
})

$(".new-order").on('submit',function(){

})