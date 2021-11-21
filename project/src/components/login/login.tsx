import { login } from '../../store/api-action';
import Header from '../header/header';
import { useDispatch, useSelector } from 'react-redux';
import { FormEvent, useRef } from 'react';
import { getCurrentCity } from '../../store/app-data/selectors';
import { validateEmail, validatePassword } from '../../utils/utils';

function Login(): JSX.Element {
  const currentCity = useSelector(getCurrentCity);
  const dispatch = useDispatch();

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current && passwordRef.current) {
      dispatch(login({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      }));
    }
  };

  const handleInputChange = (evt: FormEvent<HTMLFormElement>) => {
    if (evt.target === loginRef.current) {
      loginRef.current.setCustomValidity(validateEmail(loginRef.current.value));
      loginRef.current.reportValidity();
    }
    if (evt.target === passwordRef.current) {
      passwordRef.current.setCustomValidity(validatePassword(passwordRef.current.value));
      passwordRef.current.reportValidity();
    }
  };

  return (
    <div className="page page--gray page--login">
      <Header isPageLogin/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit} onChange={handleInputChange}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input ref={loginRef} className="login__input form__input" type="email" name="email" placeholder="Email" required />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input ref={passwordRef} className="login__input form__input" type="password" name="password" placeholder="Password" required />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#/">
                <span>{currentCity}</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
