import React from 'react';
import { Jumbotron, Container, Nav, NavItem } from 'react-bootstrap';
import HomeNav from './Components/HomeNav';
import HomeNavMobile from './Components/HomeNavMobile';
import styled from 'styled-components';
import splitSky from './Assets/splitSky.jpg';
import me from './Assets/me.jpg';

import berkeley_0 from './Assets/PortfolioPhotos/berkeley_0.jpg';
import berkeley_1 from './Assets/PortfolioPhotos/berkeley_1.jpg';
import berkeley_2 from './Assets/PortfolioPhotos/berkeley_2.jpg';
import berkeley_3 from './Assets/PortfolioPhotos/berkeley_3.jpg';
import berkeley_4 from './Assets/PortfolioPhotos/berkeley_4.jpg';
import berkeley_5 from './Assets/PortfolioPhotos/berkeley_5.jpg';

import la_0 from './Assets/PortfolioPhotos/la_0.jpg';

import LinkedIn from './Assets/Logos/LinkedIn.png';
import Instagram from './Assets/Logos/Instagram.png';


const Styles = styled.div`
    a {
        color: PowderBlue;
    }

    #sectContainer {
        overflow: scroll;
        height: 100vh;
        scroll-snap-type: y mandatory;
        scroll-behavior: smooth;

        ::-webkit-scrollbar {
            display: none;
        }
    }

    .smallNavigation {
        display: flex;
        flex-direction: row;
        a {
            margin-right: 40px;
        }
    }

    .homeJumbo {
        background: url(${splitSky}) no-repeat fixed center;
        background-size: cover;
        background-position: center;
        min-height: 100vh;
        position: relative;
        padding: 40px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        color: #ededed;

        z-index: 2;
        scroll-snap-align: start;

    }

    .Projects {
        height: 100vh;
        position: relative;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
        flex-direction: row;
        z-index: 0;
        scroll-snap-align: start;
        
        img {
            height: 200px;
            padding: 20px;
        }
        
        div {
            max-height: 70vh;
        }
    }
    
    .Photography {
        height: 100vh;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        flex-wrap: wrap;
        z-index: 0;
        scroll-snap-align: start;
    }

    .Contact {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        z-index: 0;
        scroll-snap-align: start;
        
        img {
            height: 46px;
            width: auto;
            padding: 8px;
        }
    }

    .Gallery {
        width: 70vw;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        
        img {
            height: 25vh;
            width: auto;
            padding: 3px;
        }
    }

    .GalleryMobile {
        width: 100vw;
        height: 70vh;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        overflow-x: scroll;
        overflow-y: hidden;
        
        img {
            scroll-snap-align: center;
            width: auto;
            height: 70vh;
            padding: 3px;
        }

    }
`;


const projects = ['Prosthetic Simulator', 'Heal-Bot', 'RSA-Protected Chat Client', 'My Very Own Website'];
const photography = ['Berkeley, CA', 'Los Angeles, CA'];

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDesktop: true
        }
        this.checkScreenSize = this.checkScreenSize.bind(this);
    };

    componentDidMount() {
        this.checkScreenSize();
        window.addEventListener("resize", this.checkScreenSize);
    }
    
    componentWillUnmount() {
        window.removeEventListener("resize", this.checkScreenSize);
    }

    checkScreenSize() {
        this.setState({ isDesktop: window.innerWidth > 999 });
        const width = "calc(100% - ".concat(this.state.isDesktop ? '1000' : '0', "px)");
        var sections = document.querySelectorAll("section.Projects > div");
        for (const section of sections) {
            section.style.width = width;
        }
        
    }
    
    render() {
        var galleryType = this.state.isDesktop ? 'Gallery' : 'GalleryMobile';
        return (
            <Styles>
                {this.state.isDesktop ? (
                        <HomeNav sections={[['Home', [null]], 
                        ['About Me', [null]], 
                        ['Projects', projects], 
                        ['Photography', photography],
                        ['Contact Me', [null]]]}/>
                    ) : (
                        <HomeNavMobile sections={[['Home', [null]], 
                        ['About Me', [null]], 
                        ['Projects', projects], 
                        ['Photography', photography], 
                        ['Contact Me', [null]]]}/>
                    )
                }
                
                <div id="sectContainer">
                    <Jumbotron fluid className='homeJumbo' id='Home'>
                        <h1>Joshua Fajardo</h1>
                        <h2>UC Berkeley EECS/MechE | Photography</h2>
                        <div className="smallNavigation">
                            <a href="#Prosthetic Simulator">Projects</a>
                            <a href="#Berkeley, CA">Photography</a>
                            <a href="#Contact Me">Contact Me</a>
                        </div>
                    </Jumbotron>
                    <section id='About Me' className='Projects'>
                        <img src={me} alt="me!"/>
                        <div>
                            <h1>Hi, I'm Josh</h1>
                            <p>I'm a third-year Electrical Engineering & Computer Sciences (EECS) student at the
                                University of California, Berkeley. I'm an aspiring software engineer with interests in
                                robotics and web development.
                                
                                Scroll down to learn more about my previous
                                works.</p>
                        </div>
                    </section>
                    <section id='Prosthetic Simulator' className='Projects'>
                        <img src="" alt='Prosthetic Simulator'/>
                        <div>
                            <h1>Prosthetic Simulator</h1>
                            <p>How can we assess the effectiveness of haptic feedback in upper-limb prosthetics?</p>
                            <a href="https://github.com/Suspxt/prosthetic-gui">View Project&#8594;</a>
                        </div>
                    </section>
                    <section id='Heal-Bot' className='Projects'>
                        <img src="" alt='Heal-Bot'/>
                        <div>
                            <h1>Heal-Bot</h1>
                            <p>How can we make Coronavirus-related information feel more accessible?</p>
                            <a href="">View Project&#8594;</a>
                        </div>
                    </section>
                    <section id='RSA-Protected Chat Client' className='Projects'>
                        <img src="" alt='RSA-Protected Chat Client'/>
                        <div>
                            <h1>RSA-Protected Chat Client</h1>
                            <p>How can we ensure the privacy of messages?</p>
                            <a href="">View Project&#8594;</a>
                        </div>
                    </section>
                    <section id='My Very Own Website' className='Projects'>
                        <img src="" alt='My Very Own Website'/>
                        <div>
                            <h1>My Very Own Website</h1>
                            <p>What is the best way for me to showcase my work?</p>
                            <a href="">View Project&#8594;</a>
                        </div>
                    </section>
                    <section id='Berkeley, CA' className ='Photography'>
                        <div>
                            <h1>Berkeley, CA</h1>
                            <p>Photos from <del>the Underworld</del> Undergrad</p>
                        </div>
                        <div className={galleryType}>
                            <img src={berkeley_0}/>
                            <img src={berkeley_1}/>
                            <img src={berkeley_2}/>
                            <img src={berkeley_3}/>
                            <img src={berkeley_4}/>
                            <img src={berkeley_5}/>
                        </div>
                    </section>
                    <section id='Los Angeles, CA' className ='Photography'>
                        <div>
                            <h1>Los Angeles, CA</h1>
                            <p>you can be my angle or my devil</p>
                        </div>
                        <div className={galleryType}>
                            <img src={la_0}/>
                        </div>
                    </section>
                    <section id='Contact Me' className='Contact'>
                        <h1>Contact Me</h1>
                        <p>Email: jdfajardo (at) berkeley (dot) edu</p>
                        <div>
                            <a href="https://www.linkedin.com/in/joshuafajardo/">
                                <img src={LinkedIn}/>
                                &nbsp;&nbsp;LinkedIn
                            </a>
                        </div>
                        <div>
                            <a href="https://www.instagram.com/suspxt.jpg/">
                                <img src={Instagram}/>
                                &nbsp;&nbsp;Instagram
                            </a>
                        </div>
                    </section>
                </div>
            </Styles>
        )
    }


};