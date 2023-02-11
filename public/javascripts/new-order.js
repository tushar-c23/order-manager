
const itm="<br><input type='text'>";
const qnt="<br><input type='number'>";
$(".add").click(function(event){
    $(".item").append(itm);
    $(".quantity").append(qnt);
    event.preventDefault();
})
$(".new-order").click(function(e){
    console.log(e.body);
})

