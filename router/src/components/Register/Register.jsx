import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import style from './style.module.css';

function Register() {
  const nameRef = useRef();
  const emailRef = useRef();
  const telephoneRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();

  function handleRegister(event) {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const telephone = telephoneRef.current.value;
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    const person = {
      name,
      email,
      telephone,
      username,
      password,
    };

    const existingData = JSON.parse(localStorage.getItem('users')) || [];

    existingData.push(person);

    localStorage.setItem('users', JSON.stringify(existingData));

    nameRef.current.value = '';
    emailRef.current.value = '';
    telephoneRef.current.value = '';
    usernameRef.current.value = '';
    passwordRef.current.value = '';
  }

  return (
    <div className={style.container}>
      <form onSubmit={handleRegister} className={style.form}>
        <h2>Create an Account</h2>
        <input type="text" name="name" placeholder="Name" required ref={nameRef} />
        <input type="email" name="email" placeholder="Email" required ref={emailRef} />
        <input type="tel" name="telephone" placeholder="Telephone" required ref={telephoneRef} />
        <input type="text" name="username" placeholder="Username" required ref={usernameRef} />
        <select name="gender" id="gender">
         <option value="">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input type="password" name="password" placeholder="Password" required ref={passwordRef} />
        <input type="submit" value="Register" />
        <NavLink to='/login'>Already have an account? Login</NavLink>
      </form>
    </div>
  );
}

export default Register;
