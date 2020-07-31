function alerta() {
  event.preventDefault();
  alert("Página em construção!");
}

function valida() {
  event.preventDefault();
  if( document.forms[0].email.value=="" 
   || document.forms[0].email.value.indexOf('@')==-1 
     || document.forms[0].email.value.indexOf('.')==-1 )
	{
	  alert( "Por favor, informe um E-MAIL válido!" );
	  return false;
	} else {
    alert("E-mail enviado com sucesso! Muito obrigado, entraremos em contato!");
    document.getElementById("msg").innerHTML = "Damos boas vindas a "+ document.forms[0].email.value;
  }
}