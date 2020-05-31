// eslint-disable-next-line import/no-cycle
import { registerIn } from '../view-controler/viewc-register.js';

export default () => {
  const viewRegistro = `<div><i class="fas fa-info-circle" ></i></div>
      <header>
        <img class="logo" src="./imagenes/logo_oficial.png" >
      </header>
      <section>
      <form class="formulario_registro">
        <br>
        <h1>Registrate</h1>
        <br>
        <div class="input_contenedor">
          <i class="fas fa-user"  class="icon_form"></i>
          <input type="text" id="usuario" class="usuario" placeholder="Usuario" required>
        </div> 
        <div class="input_contenedor">
          <i class="fas fa-envelope" class="icon_form"></i>
          <input type="text" id="correo" class="correo" placeholder="Correo" required>
        </div>
        <div class="input_contenedor">
          <i class='fas fa-key' class="icon_form"></i>
          <input type="password" id="contraseña" class="contraseña"  placeholder= "Contraseña" required>
        </div>
        <input type="checkbox" id="condiiones">
        <label class="text_form"for="condiiones">Al registrarme acepto<a href="#" class="terminos">Terminos y Condiciones</a></label>
        <br>
        <input type="button" class="boton_registrarse" value="Registrarme">
        <hr>
        <p class="text_form" >¿Ya tienes una cuenta? <a href="#" class="inicio_sesion">Inicia Sesion</a></p>
      </form>
      </section>`;
  const divElement = document.createElement('div');
  // divElement.setAtribute('id', 'segunda_vista_registro');
  divElement.innerHTML = viewRegistro;

  const btnIngresar = divElement.querySelector('.boton_registrarse');
  btnIngresar.addEventListener('click', registerIn);
  return divElement;
};
