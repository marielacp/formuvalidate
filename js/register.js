$(document).ready(function() {
  var $name = $('#name');  
  var $email = $('#email');
  var $password = $('#inputPassword');
  var $confirpassword = $('#inputPasswordAgain');
  var $checkbox = $('input[type="checkbox"]');
  var $register = $('#log-in');

  /* Evento input, comprobando que cumpla validaciones*/
  $name.on('input', function(event) {
    /* Comprobando que no ingrese vacios o que no ingrese datos numericos*/    
    if (($(this).val() === '') || ($(this).val().match(/[1-9]/))) {
      $(this).val('');
      $(this).focus().after("<span class='error'>Ingrese su nombre</span>");       
    } else {
      $('.error').hide();
    }
  }); 

  $email.focusout(function() {
    var PATERNEMAIL = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var restringerEmail = PATERNEMAIL.test($(this).val());
    if (!restringerEmail) {
      $(this).focus().after("<span class='error'>Ingrese su email correctamente</span>");     
      $(this).val('');
    } else {
      $('.error').hide();
    }
  });

/*contraseñas*/
 /*$password.focusout(function () {
if($(this).val().length > 0 && $(this).val().length <= 3){
  $('.error1').hide();
  $('.error2').hide();
  $(this).focus().after("<span class='error'>Contraseña muy corta</span>");   
}
else if ($(this).val().length > 3 && $(this).val().length <= 8) {
  $('.error').hide();
  $('.error2').hide();
  $(this).focus().after("<span class='error1'>Contraseña valida</span>");    
}
else {
  $('.error').hide();
  $('.error1').hide();
  $(this).focus().after("<span class='error2'>Error:(maximo 8 caracteres)</span>");
}
  });
 
 $confirpassword.focusout(function () {
   if ($(this).val().length > 3 && $(this).val().length <= 8) {
     if (($password).val() === ($confirpassword).val()){
       $(this).focus().after("<span class='error'>Contraseñas iguales</span>");
     }
     else{
       $(this).focus().after("<span class='error'>Contraseñas no son iguales</span>");
     }
}
else{
     $(this).focus().after("<span class='error'>sdsds</span>");
}
 });*/

$password.focusin(function () {
$(this).addClass("miClase");
});
  $password.focusout(function () {
    if ($(this).val().length > 0 && $(this).val().length <= 3) {
      $("#errorp").html("<span stye='color:red;'>Contraseña muy corta</span>");
    }
    else if ($(this).val().length > 3 && $(this).val().length <= 8) {
      $("#errorp").html("<span stye='color:green;'>Contraseña valida</span>");
      }
      else{
      $("#errorp").html("<span stye='color:green;'>Error:maximo 8 caracteres</span>");
      }
  });
  $confirpassword.focusin(function () {
    $(this).addClass("miClase");
  });
  $confirpassword.focusout(function () {
    if ($(this).val().length == 0 ) {
      $("#errorcp").html("");
    } else if ($(this).val().length > 3 && $(this).val().length <= 8) {
      if(($password).val() === ($confirpassword).val()){
        $("#errorcp").html("<span stye='color:green;'>Tus contraseñas son iguales</span>");
      }
      
     else {
       $("#errorcp").html("<span stye='color:green;'>Tus contraseñas son iguales</span>");
    }
     }
     else{
       $("#errorcp").html("<span stye='color:green;'>Error maximo 8 caracteres</span>");
     }
  });

  /* Boton next o submit si los datos se validan correctamente nos trasladamos al la pagina final */
  /*$submit.click(function(event) {
    /* console.log(event.target.checked) */
   /* if ($checkbox.prop('checked') && ($firstName.val()!=='') && ($lastName.val()!=='') && ($email.val()!=='')) {
      event.preventDefault();
      window.location.href = '../views/end.html';
    } else {
      alert('Por favor complete todos los campos');
      event.preventDefault();
    }    
  });*/
});
