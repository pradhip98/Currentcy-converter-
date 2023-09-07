let select=document.querySelectorAll(`.currency`);
let btn=document.getElementById(`btn`)
let input=document.getElementById(`input`);
let result=document.getElementById(`result`)
fetch(`http://api.frankfurter.app/currencies`)
.then(res=>res.json())
.then(res=>displayDropdown(res));

function displayDropdown(res){
     let datas =Object.entries(res);
   for(let i=0;i<datas.length;i++){
    let opt=`<option value="${datas[i][0]}">${datas[i][0]}</option>`
    select[0].innerHTML += opt
    select[1].innerHTML +=opt
   }
}
btn.addEventListener(`click`,()=>{
  let curr1=select[0].value
  let curr2=select[1].value
  let amount=input.value

  if(amount==``){
    alert(`Please Enter The Amount`)}
  else if(curr1==curr2){
    alert(`Choose Different Currencies`)}
  else{
   convert(curr1,curr2,amount)}
})

function convert(curr1,curr2,amount){
    const host = 'api.frankfurter.app';
fetch(`https://${host}/latest?amount=${amount}&from=${curr1}&to=${curr2}`)
  .then(resp => resp.json())
  .then((data) => {
    result.value= Object.values(data.rates)[0];
  });
}