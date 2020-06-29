/* eslint-disable import/no-cycle */
import _login from './loginIn.js';
import _registro from './register.js';
import _home from './home.js';
import _profile from './profile.js';

export default {
  login: _login,
  register: _registro,
  home: _home,
  profile: _profile,
};
