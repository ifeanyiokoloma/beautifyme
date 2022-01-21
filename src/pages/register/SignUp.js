import { Card, FormControl, Switch } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./signUp.module.css";

const SignUp = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <form className={styles.form}>
      <Card className="p-1">
        <h1>Sign Up</h1>
        <input className="form-control" type="text" placeholder="User Name" />
        <input className="form-control" type="email" placeholder="Email" />
        <input className="form-control" type="tel" placeholder="tel" />
        <input
          className="form-control"
          type="password"
          placeholder="Password"
        />
        <input
          className="form-control"
          type="password"
          placeholder="Confirm Password"
        />
        <div className="mt-3 d-flex">
          <span>
            <Switch {...label} defaultChecked />
          </span>
          <span>
            By signing up, you agree to Cutz's <a href="#">Terms and condition</a> and <a href="#">Privacy Policy</a>
          </span>
        </div>
        <button className="btn btn-primary my-3">Sign Up</button>
        <div>
          <Link to="/login">or Sign Up</Link>
        </div>
      </Card>
    </form>
  );
};

export default SignUp;
