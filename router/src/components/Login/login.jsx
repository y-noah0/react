import { useRef } from 'react';
import style from './style.module.css'
// import List from '../List/list';
import { NavLink, useNavigate } from 'react-router-dom';

function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(user => user.username === username);

    if (user && user.password === password) {
      navigate('/list');
      // navigate('/list', { state: { username } }); // pass state to the new page
    } else {
      alert('Username or Password mismatch');
    }

    usernameRef.current.value = '';
    passwordRef.current.value = '';
  }


  return (
    <div className={style.container}>
      <form onSubmit={handleLogin} className={style.form}>
        <h2>Login</h2>
        <input type="username" name="username" placeholder="username" required ref={usernameRef} />
        <input type="password" name="password" placeholder="Password" required ref={passwordRef} />
        {/* <input type="submit" value="Login" /> */}
        <button className={style.submit_btn}>Login</button>
        <NavLink to='/'>Need an account? Get one</NavLink>
      </form>

    </div>
  );
}

export default Login;
