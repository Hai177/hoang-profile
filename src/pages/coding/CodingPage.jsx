import { NavLink, Routes, Route, Outlet, Link } from 'react-router-dom';
import Generate from './GenerateSource';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
export const Coding = () => {
    const location = useLocation();
    const activeLink = location.pathname;
    const [output, setOutput] = useState('');
    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className=" my-2 d-flex flex-column ">
                    <h4 className="text-white">Tools</h4>
                    <div className="d-flex">
                        <div className="requirement col-8">
                            <div className="requirement-menu d-flex mx-2">
                                <NavLink
                                    to="/coding/generate"
                                    className={`mx-1 p-2 text-decoration-none requirement-menu-items ${
                                        activeLink === '/coding/generate' ? 'focus' : ''
                                    }`}
                                >
                                    Generate source
                                </NavLink>
                                <NavLink
                                    to="/coding/generate"
                                    className="requirement-menu-items mx-1 p-2 text-decoration-none"
                                >
                                    Generate source
                                </NavLink>
                            </div>
                            <div className="requirement-items d-flex">
                                <Routes>
                                    <Route exact path="/generate" element={<Generate setOutput={setOutput} />} />
                                </Routes>
                            </div>
                        </div>
                        <div className="mx-3 output col-4">
                            <textarea value={output} className="form-control output-form" disabled></textarea>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Coding;
