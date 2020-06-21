/* eslint-disable import/no-cycle */
/* eslint-disable no-unreachable */
// eslint-disable-next-line import/no-cycle
import views from '../view/index.js';
import { traerDataPost } from './view-home.js';
import { traerDataPostUser } from './view-profile.js';
import { getPosts } from '../firebase/firestore-controller.js';

const changeView = (hashUrl) => {
  window.location.hash = hashUrl;
  const seccion = document.getElementById('seccion');
  seccion.innerHTML = '';
  switch (hashUrl) {
    case '':
    case ' ':
    case '#':
    case '#/':
    case '#/login': return seccion.appendChild(views.login());
    case '#/register': return seccion.appendChild(views.register());
    case '#/home': return getPosts(traerDataPost);
    case '#/profile': return getPosts(traerDataPostUser);
    // case '#/profile': return seccion.appendChild(views.profile(llamarCabecera));
    case '#/conditions': return seccion.appendChild(views.conditions());
    default: return seccion.appendChild(views.notFound());
  }
};
export { changeView };
