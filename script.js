$(document).ready(function() {
  // Validación de Bootstrap
  (function() {
    'use strict';
    var forms = document.querySelectorAll('.needs-validation');

    Array.prototype.slice.call(forms).forEach(function(form) {
      form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      }, false);
    });
  })();

  $('#register').submit(function(e) {
    e.preventDefault();
    const form = $(this)[0];
    if (!form.checkValidity()) {
      e.stopPropagation();
      $(this).addClass('was-validated');
      return;
    }

    const firstname = $('#register-firstname').val();
    const lastname = $('#register-lastname').val();
    const email = $('#register-email').val();
    const password = $('#register-password').val();
    const confirmPassword = $('#confirm-password').val();

    if (password.length < 8) {
      alert('La contraseña debe tener al menos 8 caracteres.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    alert('Registrado con éxito!');
    $('#registerModal').modal('hide');
    $(this).removeClass('was-validated').trigger('reset');
  });

  $('#login').submit(function(e) {
    e.preventDefault();
    const form = $(this)[0];
    if (!form.checkValidity()) {
      e.stopPropagation();
      $(this).addClass('was-validated');
      return;
    }

    const email = $('#login-email').val();
    const password = $('#login-password').val();

    alert('Inicio de sesión exitoso!');
    $(this).removeClass('was-validated').trigger('reset');
  });
});
