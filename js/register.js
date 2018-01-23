$(document).ready(function() {
  var $name = $('#name');  
  var $email = $('#email');
  var $password = $('#inputPassword');
  var $confirpassword = $('#inputPasswordAgain');
  var $checkbox = $('input[type="checkbox"]');
  var $select = $('#sel1')
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
       $("#errorcp").html("<span stye='color:green;'>Tus contraseñas no son iguales</span>");
       $(this).val('');
    }
     }
     else{
       $("#errorcp").html("<span stye='color:green;'>Error maximo 8 caracteres</span>");
     }
  });

$select.change(function(){
  if($(this).val()==='opt'){
    $(this).focus().after("<span class='error'>Selecciona una opcion</span>");       
  
} else {
  $('.error').hide();
}
});
  /* Boton next o submit si los datos se validan correctamente nos trasladamos al la pagina final */
  $register.click(function(event) {
    /* console.log(event.target.checked) */
    if ($checkbox.prop('checked') && ($name.val()!=='') && ($email.val()!=='') && ($password.val()!=='') && ($confirpassword.val()!=='')) {
      event.preventDefault();
      window.location.href = '../views/end.html';
    } else {
      alert('Por favor complete todos los campos');
    
      event.preventDefault();
    }    
  });

 /* Firebase */
 var provider = new firebase.auth.GoogleAuthProvider();
 $('#sign-up').on('click',function(){
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    //var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user);
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
  
 }) 







});
