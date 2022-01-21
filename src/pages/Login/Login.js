import { Card, FormControl } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./login.module.css";

const Login = () => {
  return (
    <form className={styles.form}>
      <Card className="p-1">
        <h1>Login</h1>
        <input className="form-control" type="email" placeholder="Email" />
        <input
          className="form-control"
          type="password"
          placeholder="Password"
        />
        <button className="btn btn-primary">Login</button>
        <div><Link to="/register">or Sign Up</Link></div>
      </Card>
    </form>
  );
};

export default Login;
