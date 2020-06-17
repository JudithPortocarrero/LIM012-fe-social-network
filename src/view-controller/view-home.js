// eslint-disable-next-line import/no-cycle
import views from '../view/index.js';

const db = firebase.firestore();
export const MostrarUsuarioHome = (gmailUser) => {
  const userDescription = document.getElementById('userDescription');
  db.collection('users').where('gmail', '==', gmailUser).onSnapshot((querySnapshot) => {
    userDescription.innerHTML = '';
    querySnapshot.forEach((doc) => {
      userDescription.innerHTML = ' ';
      userDescription.appendChild(views.userModificado(doc.data()));
    });
  });
};
// export const MostrarUsuarioForPost = (gmailUser) => {
//   const seccion = document.getElementById('seccion');
//   db.collection('users').where('gmail', '==', gmailUser).onSnapshot((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       seccion.innerHTML = '';
//       querySnapshot.forEach((doc) => {
//         seccion.innerHTML = ' ';
//         seccion.appendChild(views.home(doc.data()));
//       });
//     // console.log();
//     });
//   });
// };
// console.log(MostrarUsuarioForPost('judith086.jpc@gmail.com'));

// console.log(result.user.displayName);
// console.log(result.user.email);
// console.log(result.user.emailVerified);
// console.log(result.user.photoURL);
// console.log(result.user.isAnonymous);
// console.log(result.user.uid);
// console.log(result.user.providerData);
// correo: doc.data().gmail,
// portada: doc.data().image_port,
// perfil: doc.data().image_profile,
// idioma: doc.data().lenguaje,
// nacionalidad: doc.data().location,
// nombre: doc.data().name_user,
// ocupacionUser: doc.data().ocupation,
