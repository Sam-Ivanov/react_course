import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { reduxForm } from "redux-form";
import { login } from "../../redux/auth-reducer";
import { required } from "../../utils/validatiors/validators";
import { createField, Input } from "../common/FormsControls/FormsControls";
import styles from '../common/FormsControls/FormsControls.module.css'



const LoginForm = ({ handleSubmit, error }) => {
   return (
      <form onSubmit={handleSubmit}>
         {createField("Email", 'email', [required], Input)}
         {createField("Password", 'password', [required], Input, { type: 'password' })}
         {createField(null, 'rememberMe', [], Input, { type: 'checkbox' }, 'remember me')}
         {error && <div className={styles.formSummaryError}>{error}</div>}
         <div>
            <button>Login</button>
         </div>
      </form>
   )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
   const onSubmit = (formData) => {
      console.log(formData);
      props.login(formData.email, formData.password, formData.rememberMe);
   }

   if (props.isAuth) {
      return <Navigate to={'/profile'} />
   }

   return (
      <div>
         <h1>Login</h1>
         <LoginReduxForm onSubmit={onSubmit} />
      </div>
   )
}

const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);


