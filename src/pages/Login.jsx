import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css'
function Login(props) {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();

        if (email === "gafmuiz@gmail.com" && password === "secret") {
            alert(`Welcome ${email}`)
            props.setIsLoggedIn(true)
            navigate("/")
        }
        else {
            alert("Wrong credentials")
        }
    }

    return (
        <div className="login-body">
            <div className="login-container">
                <h2>Log in</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="password">Password </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <br />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}
export default Login;