import LoginForm from "../components/LoginForm/LoginForm";

function Login({SignIn}) {
    return (
        <section>
            <LoginForm  SignIn = {SignIn}/>
        </section>
    );
}

export default Login;