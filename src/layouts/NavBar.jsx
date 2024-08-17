import image1 from '../assets/img/me.jpg';
import HomeIcon from '@mui/icons-material/Home';
import '../styles/nvarbar.css';
import Person4Icon from '@mui/icons-material/Person4';
import { NavLink, useLocation } from 'react-router-dom';
import KeyboardIcon from '@mui/icons-material/Keyboard';
export const Nvarbar = () => {
    const location = useLocation();
    const activeLink = location.pathname;
    return (
        <div className="nvarbar d-flex justify-content-center">
            <div className="d-flex flex-column text-center">
                <div className="logo my-2">
                    <NavLink to={'/'}>
                        <img src={image1} className="col-12 p-2" alt="logo" />
                    </NavLink>
                </div>
                <div className="icon-home p-2 my-1">
                    <NavLink to={'/'} className="icon-home-text">
                        <HomeIcon />
                    </NavLink>
                </div>
                <div className={`icon-profile p-2 my-1 ${activeLink === '/profile' ? 'actives' : ''}`}>
                    <NavLink to="/profile" className="icon-profile-text">
                        <Person4Icon />
                    </NavLink>
                </div>
                <div className={`icon-tool p-2 my-1 ${activeLink === '/coding' ? 'actives' : ''}`}>
                    <NavLink to="/coding" className="icon-tool-text">
                        <KeyboardIcon />
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Nvarbar;
