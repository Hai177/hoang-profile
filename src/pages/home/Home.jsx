import React, { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import image1 from '../../assets/img/me3.jpg';
import image2 from '../../assets/img/me2.jpg';
import image3 from '../../assets/img/me1.jpg';

import { BrowserRouter, Routes, Route, NavLink, Link, Router } from 'react-router-dom';

const Home = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const cards = [
        {
            image: image1,
            title: 'PROFILE',
            description: 'Something about me...',
            link: '/profile',
        },
        {
            image: image2,
            title: 'CODING',
            description: 'Tools, document about code',
            link: '/coding',
        },
        {
            image: image3,
            title: 'CONTACT',
            description: 'Contact to me',
            link: '/contact',
        },
    ];

    const [backgroundImg, setBackroundImg] = useState(image1);

    const nextCard = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
        if (activeIndex === 2) {
            setBackroundImg(image1);
        } else if (activeIndex === 0) {
            setBackroundImg(image2);
        } else if (activeIndex === 1) {
            setBackroundImg(image3);
        }
    };

    const prevCard = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
        if (activeIndex === 1) {
            setBackroundImg(image1);
        } else if (activeIndex === 2) {
            setBackroundImg(image2);
        } else if (activeIndex === 0) {
            setBackroundImg(image3);
        }
    };

    const backgroundStyle = {
        backgroundImage: `url(${cards[activeIndex].image})`,
    };

    return (
        <div>
            <img alt="" src={backgroundImg} className="background w-100 h" />
            <div className="container-fluid">
                <div className="d-flex justify-content-center">
                    <div className="head-title mx-auto mt-5">
                        <span>W</span>
                        <span>e</span>
                        <span>l</span>
                        <span>c</span>
                        <span>o</span>
                        <span>m</span>
                        <span>e</span>
                        &nbsp;
                        <span>t</span>
                        <span>o</span>
                        &nbsp;
                        <span>m</span>
                        <span>y</span>
                        &nbsp;
                        <span>w</span>
                        <span>e</span>
                        <span>b</span>
                        <span>s</span>
                        <span>i</span>
                        <span>t</span>
                        <span>e</span>
                        <span>!</span>
                    </div>
                </div>
                <div className="main col-12 d-flex justify-content-center">
                    <div className="previous">
                        <button className="btn" onClick={prevCard}>
                            <ArrowBackIosIcon />
                        </button>
                    </div>
                    <div className="card-container h-50 mx-2 d-flex justify-content-center col-7">
                        {cards.map((card, index) => {
                            let className = 'card';

                            if (index === activeIndex) {
                                className += ' center';
                            } else if (index === (activeIndex - 1 + cards.length) % cards.length) {
                                className += ' left';
                            } else {
                                className += ' right';
                            }
                            return (
                                <div className={className} key={index}>
                                    <img alt="" src={card.image} className="h-100 img" />
                                    <div className="content pt-5">
                                        <NavLink
                                            to={`${className === 'card center' ? card.link : '#'}`}
                                            className="title mx-2 mt-3"
                                        >
                                            <p className="tilte-main my-2">{card.title}</p>
                                        </NavLink>
                                        <p className="description mx-3 pt-1">{card.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="next">
                        <button className="btn" onClick={nextCard}>
                            <ArrowForwardIosIcon />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
