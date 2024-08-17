import image1 from '../../assets/img/HoangNDH2-DE150184.jpg';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import SchoolIcon from '@mui/icons-material/School';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import GradeIcon from '@mui/icons-material/Grade';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ApartmentIcon from '@mui/icons-material/Apartment';
import DescriptionIcon from '@mui/icons-material/Description';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import { motion, AnimatePresence } from 'framer-motion';

export const Profile = () => {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="col-12 d-flex">
                    <div className="information col-3">
                        <div className="avatar d-flex justify-content-center">
                            <img src={image1} alt="Avatar" className="avatar-img col-6 my-2 p-1" />
                        </div>
                        <div className="profile d-flex mx-2 flex-column">
                            <h5 className="my-1 text-white">Profile</h5>
                            <div className="profile-item d-flex mx-3">
                                <div className="profile-logo col-2 text-white">
                                    <MailOutlineIcon />
                                </div>
                                <div className="profile-content col-10">
                                    <p>ngdanghaihoang@gmail.com</p>
                                </div>
                            </div>
                            <div className="profile-item d-flex mx-3">
                                <div className="profile-logo col-2 text-white">
                                    <PhoneEnabledIcon />
                                </div>
                                <div className="profile-content col-10">
                                    <p>0395831435</p>
                                </div>
                            </div>
                            <div className="profile-item d-flex mx-3">
                                <div className="profile-logo col-2 text-white">
                                    <LanguageIcon />
                                </div>
                                <div className="profile-content col-10">
                                    <a className="text-decoration-none" target="_blank" href="#">
                                        <p>www</p>
                                    </a>
                                </div>
                            </div>
                            <div className="profile-item d-flex mx-3">
                                <div className="profile-logo col-2 text-white">
                                    <FacebookIcon />
                                </div>
                                <div className="profile-content col-10">
                                    <a
                                        className="text-decoration-none"
                                        target="_blank"
                                        href="https://www.facebook.com/profile.php?id=100008537147144"
                                    >
                                        <p>Hải Hoàng</p>
                                    </a>
                                </div>
                            </div>
                            <div className="profile-item d-flex mx-3">
                                <div className="profile-logo col-2 text-white">
                                    <InstagramIcon />
                                </div>
                                <div className="profile-content col-10">
                                    <a
                                        className="text-decoration-none"
                                        target="_blank"
                                        href="https://www.instagram.com/kunhoang_"
                                    >
                                        <p>kunhoang_</p>
                                    </a>
                                </div>
                            </div>
                            <div className="profile-item d-flex mx-3">
                                <div className="profile-logo col-2 text-white">
                                    <LocationOnIcon />
                                </div>
                                <div className="profile-content col-10">
                                    <p>Hòa Tiến, Hòa Vang, Đà Nẵng</p>
                                </div>
                            </div>
                        </div>
                        <div className="skills d-flex mx-2 flex-column">
                            <h5 className="my-1 text-white">Skills</h5>
                            <div className="skill-common">
                                <h6 className="mx-3">Java</h6>
                                <div className="skill-detail mx-3">
                                    <ul>
                                        <li className="skill-detail-items">Hibernate</li>
                                        <li className="skill-detail-items">MyBatis</li>
                                        <li className="skill-detail-items">Servlet/JSP</li>
                                        <li className="skill-detail-items">Struts 1</li>
                                    </ul>
                                </div>
                                <h6 className="mx-3">React JS</h6>
                                <div className="skill-detail mx-3"></div>
                                <h6 className="mx-3">JS/Jquery</h6>
                                <div className="skill-detail mx-3"></div>
                                <h6 className="mx-3">Adobe Photoshop</h6>
                                <div className="skill-detail mx-3"></div>
                                <h6 className="mx-3">Adobe illustrator</h6>
                                <div className="skill-detail mx-3"></div>
                            </div>
                        </div>
                        <div className="certificate d-flex mx-2 flex-column">
                            <h5 className="my-1 text-white">Certifications</h5>
                            <div className="certificate-detail mx-2">
                                <div className="certificate-year">2023</div>
                                <div className="certificate-content mx-3">
                                    Software engineer by FPT University (Specialization is .NET)
                                </div>
                            </div>
                        </div>
                        <div className="interests d-flex mx-2 flex-column">
                            <h5 className="my-1 text-white">Interests</h5>
                            <div className="interests-detail mx-3">
                                <ul>
                                    <li className="interests-detail-items">Play soccer</li>
                                    <li className="interests-detail-items">Travel</li>
                                </ul>
                            </div>
                        </div>
                        <div className="additional"></div>
                    </div>
                    <div className="description col-9 d-flex flex-column">
                        <div className="name px-4 col-12 d-flex flex-column justify-content-start">
                            <div className="fullname mt-5 ">
                                <h1 className="text-white">Nguyễn Đặng Hải Hoàng</h1>
                            </div>
                            <div className="position">
                                <p>Developer</p>
                            </div>
                        </div>
                        <div className="education my-2 px-4 col-12 d-flex flex-column">
                            <h4 className="">Education</h4>
                            <div className="education-items col-12 d-flex flex-column">
                                <div className="school d-flex mx-3">
                                    <div className="icon-school col-1">
                                        <SchoolIcon />
                                    </div>
                                    <div className="name-school col-11">
                                        <p className="">FPT University</p>
                                    </div>
                                </div>
                                <div className="major d-flex mx-3">
                                    <div className="icon-major col-1">
                                        <LocalLibraryIcon />
                                    </div>
                                    <div className="name-major col-11">
                                        <p>Software Engineering</p>
                                    </div>
                                </div>
                                <div className="status d-flex mx-3">
                                    <div className="icon-status col-1">
                                        <GradeIcon />
                                    </div>
                                    <div className="name-status col-11">
                                        <p>Completed</p>
                                    </div>
                                </div>
                                <div className="time d-flex mx-3">
                                    <div className="icon-time col-1">
                                        <AccessTimeIcon />
                                    </div>
                                    <div className="name-time col-11">
                                        <p>2019 - 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="work my-2 px-4 col-12 d-flex flex-column">
                            <h4 className="">Work Experience</h4>
                            <div className="work-items col-12 d-flex flex-column">
                                <div className="company d-flex mx-3">
                                    <div className="icon-company col-1">
                                        <ApartmentIcon />
                                    </div>
                                    <div className="name-company col-11">
                                        <p className="">FPT Software</p>
                                    </div>
                                </div>
                                <div className="position d-flex mx-3">
                                    <div className="icon-position col-1">
                                        <ConnectWithoutContactIcon />
                                    </div>
                                    <div className="name-position col-11">
                                        <p>Developer</p>
                                    </div>
                                </div>
                                <div className="time-work d-flex mx-3">
                                    <div className="icon-time-work col-1">
                                        <AccessTimeIcon />
                                    </div>
                                    <div className="name-time-work col-11">
                                        <p>2022 - Present</p>
                                    </div>
                                </div>
                                <div className="outline d-flex mx-3">
                                    <div className="icon-outline col-1">
                                        <DescriptionIcon />
                                    </div>
                                    <div className="name-outline col-11">
                                        <p>
                                            System maintenance according to customer requirements includes document
                                            creation, coding and system testing.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="project my-2 px-4 col-12 d-flex flex-column">
                            <h4 className="">Project</h4>
                            <div className="project-items col-12 d-flex flex-column">
                                <div className="mx-2 col-12">
                                    <table className="my-2 d-flex flex-column">
                                        <tr className="d-flex">
                                            <th className="px-1 col-2">Project Name</th>
                                            <td className="px-1 col-10">Cinema Management</td>
                                        </tr>
                                        <tr className="d-flex">
                                            <th className="px-1 col-2">URL</th>
                                            <td className="px-1 col-10">Don't have</td>
                                        </tr>
                                        <tr className="d-flex">
                                            <th className="px-1 col-2">Team size</th>
                                            <td className="px-1 col-10">5</td>
                                        </tr>
                                        <tr className="d-flex">
                                            <th className="px-1 col-2">Position</th>
                                            <td className="px-1 col-10">
                                                <ul>
                                                    <li>Leader</li>
                                                    <li>Front-end</li>
                                                    <li>Back-end</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr className="d-flex">
                                            <th className="px-1 col-2">Responsibility</th>
                                            <td className="px-1 col-10">
                                                <ul>
                                                    <li>Leader: Task management, human resource management</li>
                                                    <li>Front-end: User interface design, FE and BE connection</li>
                                                    <li>Back-end: Database design, business analysis, coding</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr className="d-flex">
                                            <th className="px-1 col-2">Description</th>
                                            <td className="px-1 col-10">
                                                Cinema management includes box office management, revenue management,
                                                schedule management, movie management and theater personnel management
                                                through the cinema management system.
                                            </td>
                                        </tr>
                                        <tr className="d-flex">
                                            <th className="px-1 col-2">Technologies</th>
                                            <td className="px-1 col-10">
                                                <ul>
                                                    <li>FE: JSP,CSS,JS,Jquery</li>
                                                    <li>BE: Java (Hibernate)</li>
                                                    <li>DB: SQL Server</li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </table>
                                    <table className="my-2 d-flex flex-column">
                                        <tr className="d-flex">
                                            <th className="px-1 col-2">Project Name</th>
                                            <td className="px-1 col-10">Football management in Da Nang</td>
                                        </tr>
                                        <tr className="d-flex">
                                            <th className="px-1 col-2">URL</th>
                                            <td className="px-1 col-10">https://mfdn.io.vn/</td>
                                        </tr>
                                        <tr className="d-flex">
                                            <th className="px-1 col-2">Team size</th>
                                            <td className="px-1 col-10">5</td>
                                        </tr>
                                        <tr className="d-flex">
                                            <th className="px-1 col-2">Position</th>
                                            <td className="px-1 col-10">
                                                <ul>
                                                    <li>Leader</li>
                                                    <li>Front-end</li>
                                                    <li>Back-end</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr className="d-flex">
                                            <th className="px-1 col-2">Responsibility</th>
                                            <td className="px-1 col-10">
                                                <ul>
                                                    <li>Leader: Task management, human resource management</li>
                                                    <li>Front-end: User interface design, FE and BE connection</li>
                                                    <li>
                                                        Back-end: Database design, business analysis, system development
                                                        for admin role
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr className="d-flex">
                                            <th className="px-1 col-2">Description</th>
                                            <td className="px-1 col-10">
                                                Football management in Da Nang includes football field management,
                                                schedule management, and tournament management for all fields registered
                                                on the system. In addition, it also manages match capture for all users
                                                on the system.
                                            </td>
                                        </tr>
                                        <tr className="d-flex">
                                            <th className="px-1 col-2">Technologies</th>
                                            <td className="px-1 col-10">
                                                <ul>
                                                    <li>FE: ReactJS</li>
                                                    <li>BE: Java (Hibernate)</li>
                                                    <li>DB: SQL Server</li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </table>
                                    <table className="my-2 d-flex flex-column">
                                        <tr className="d-flex">
                                            <th className="px-1 col-2">Project Name</th>
                                            <td className="px-1 col-10">My Profile</td>
                                        </tr>
                                        <tr className="d-flex">
                                            <th className="px-1 col-2">URL</th>
                                            <td className="px-1 col-10"></td>
                                        </tr>
                                        <tr className="d-flex">
                                            <th className="px-1 col-2">Team size</th>
                                            <td className="px-1 col-10">1</td>
                                        </tr>
                                        <tr className="d-flex">
                                            <th className="px-1 col-2">Position</th>
                                            <td className="px-1 col-10">
                                                <ul>
                                                    <li>Front-end</li>
                                                    <li>Back-end</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr className="d-flex">
                                            <th className="px-1 col-2">Responsibility</th>
                                            <td className="px-1 col-10">
                                                <ul>
                                                    <li>
                                                        Front-end: User interface design, FE and BE connection,coding FE
                                                    </li>
                                                    <li>
                                                        Back-end: Database design, business analysis, system development
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr className="d-flex">
                                            <th className="px-1 col-2">Description</th>
                                            <td className="px-1 col-10">
                                                My website includes my CV and a few tools to support coding and testing.
                                                Let's explore it !!!
                                            </td>
                                        </tr>
                                        <tr className="d-flex">
                                            <th className="px-1 col-2">Technologies</th>
                                            <td className="px-1 col-10">
                                                <ul>
                                                    <li>FE: ReactJS</li>
                                                    <li>BE: Java (MyBatis)</li>
                                                    <li>DB: </li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Profile;
