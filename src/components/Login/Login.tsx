import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

type PropsType = {}


export function Login(props: PropsType) {
    const onSubmit = (formData: FormDataType) => {

    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" name={"login"} placeholder={"Login"} component="input" />
            </div>
            <div>
                <Field type="text" name={"password"} placeholder={"Password"} component="input" />
            </div>
            <div>
                <Field type="checkbox" name={"rememberMe"} component="input" /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

let LoginReduxForm = reduxForm<FormDataType>({
    // a unique name for the form
    form: 'login'
})(LoginForm)