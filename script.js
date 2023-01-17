let logIn = "Thank you! We've added your card details"
function logar (){
  var nome = document.getElementById('nome').value;
  var numero = document.getElementById('numero').value;
  var month = document.getElementById('month').value;
  var year = document.getElementById('year').value;
  var cc = document.getElementById('cc').value;
      if(nome == "Jean Santos" && numero == "7987214878941224" && month == "11" && year == "35" && cc == "123"){
        alert('Sucesso');
        location.href = "index1.html";
      } else {
        alert('Cartão Invalido')
      }
}
  