/* eslint-disable import/no-cycle */
import { postTemplate } from './post.js';
import { traerUsuarios } from '../firebase/firestore-controller.js';
import { traerDataUsuario } from '../view-controller/view-home.js';

export default (data, cb) => {
  const user = firebase.auth().currentUser;
  const viewHome = `
  <div id="tercera_vista_home">
    <div class="contenedorCabecera"></div>
    <div class="contenedorContenido">
      <section id="userDescription"></section>
      <section class="space_post"></section>
    </div>
  </div>`;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewHome;

  const contenedorCabecera = divElement.querySelector('.contenedorCabecera');
  cb(contenedorCabecera);

  traerUsuarios(user.email, traerDataUsuario);

  const spacePost = divElement.querySelector('.space_post');
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].data().privacity === true) {
      spacePost.appendChild(postTemplate(data[i]));
    }
  }

  return divElement;
};
