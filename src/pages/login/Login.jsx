import { TextField } from '@mui/material';
import './login.scss';
import logo from '../../assets/logo.png';

//mui
import PersonIcon from '@mui/icons-material/Person';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const Login = () => {
    return (
        <div className="login">
            <div className="container">
                <div className="header">
                    <h1>PDV - NALBER FASTFOOD</h1>
                </div>
                <div className="loginContainer">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="loginForm">
                        <form>
                            <div>
                                <PersonIcon sx={{ fontSize: '32px' }} />
                                <input type="text" id="txtLogin" placeholder="LOGIN" />
                            </div>
                            <div>
                                <VerifiedUserIcon sx={{ fontSize: '32px' }} />
                                <input type="password" id="txtPassword" placeholder="********" />
                            </div>
                            <button>LOGIN</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
