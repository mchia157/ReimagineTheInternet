import {motion} from 'framer-motion';
import {Navbar, Container, Nav} from 'react-bootstrap';
import alaskanHusky from '../images/alaskan-husky.jpg';
import labradorHusky from '../images/labrador-husky.JPG';
import mackenzieHusky from '../images/mackenzie-husky.jpg';
import sakhalinHusky from '../images/sakhalin-husky.jpg';
import siberianHusky from '../images/siberian-husky.jpg';
import React, {useEffect, useRef, useState} from "react";
import TimelineObserver from 'react-timeline-animation';


const Timeline = ({ setObserver }) => {
    const breed1 = useRef(null);
    const breed2 = useRef(null);
    const breed3 = useRef(null);
    const breed4 = useRef(null);
    const breed5 = useRef(null);
    const circle1 = useRef(null);
    const circle2 = useRef(null);
    const circle3 = useRef(null);
    const circle4 = useRef(null);
    const circle5 = useRef(null);

    useEffect(() => {
        setObserver(breed2.current);
        setObserver(breed3.current);
        setObserver(breed4.current);
        setObserver(breed5.current);
    }, []);

    return (
        <div className="wrapper">
            <div className="circleWrapper firstCircle">
                <motion.div initial={{opacity: 0, x: 50}} whileInView={{opacity: 1, x: 0, transition: { delay: 0.1, duration: 0.3 }}} viewport={{once: false, amount: .5}} id="circle1" ref={circle1} className='circle'>
                    <h3 className="circle-title">Alaskan Husky</h3>
                    The most commonly used dog in dog sled racing, the Alaskan husky is a mongrel bred specifically for its performance as a sled dog. The modern Alaskan husky reflects 100 years or more of crossbreeding with English Pointers, German Shepherd Dogs, Salukis and other breeds to improve its performance. They typically weigh between 18 and 34 kg (40 and 75 lb) and may have dense or sleek fur. Alaskan huskies bear little resemblance to the typical husky breeds they originated from, or to each other.
                </motion.div>
                    
            </div>

            <div id="breed2" ref={breed2} className="breed"></div>
            <div className="circleWrapper">
                <motion.div initial={{opacity: 0, x: 50}} whileInView={{opacity: 1, x: 0, transition: { delay: 0.1, duration: 0.3 }}} viewport={{once: false, amount: .5}} id="circle2" ref={circle2} className='circle'>
                    <h3 className="circle-title">Labrador Husky</h3>
                    The Labrador Husky originated in the Canadian region of Labrador. The breed probably arrived in the area with the Inuit who came to Canada around 1300 AD. Despite the name, Labrador huskies are not related to the Labrador retriever, but in fact most closely related to the Canadian Eskimo Dog. There are estimated to be 50–60 Labrador huskies in the world.</motion.div>
            </div>

            <div id="breed3" ref={breed3} className="breed"></div>
            <div className="circleWrapper">
                <motion.div initial={{opacity: 0, x: 50}} whileInView={{opacity: 1, x: 0, transition: { delay: 0.1, duration: 0.3 }}} viewport={{once: false, amount: .5}} id="circle3" ref={circle3} className='circle'>
                    <h3 className="circle-title">Mackenzie River Husky</h3>
                    The term Mackenzie River husky describes several overlapping historical populations of Arctic and sub-Arctic sled dog-type dogs, none of which constituted a breed. Dogs from the Yukon Territory were crossed with large European breeds such as St. Bernards and Newfoundlands to create a powerful freighting dog capable of surviving harsh arctic conditions during the Klondike Gold Rush.</motion.div>
            </div>

            <div id="breed4" ref={breed4} className="breed"></div>
            <div className="circleWrapper">
                <motion.div initial={{opacity: 0, x: 50}} whileInView={{opacity: 1, x: 0, transition: { delay: 0.1, duration: 0.3 }}} viewport={{once: false, amount: .5}} id="circle4" ref={circle4} className='circle'>
                    <h3 className="circle-title">Sakhalin Husky</h3>
                    The Sakhalin Husky is a critically endangered landrace and sled laika associated with Sakhalin Island and adjacent areas. They are also known Karafuto Ken, Sakhalin Laika, or Gilyak Laika. While bred primarily as a sled dog, Sakhalin Huskies are also used for hunting bear and fishing. There are approximately 20 Sakhalin Huskies remaining on Sakhalin Island.</motion.div>
            </div>

            <div id="breed5" ref={breed5} className="breed"></div>
            <div className="circleWrapper">
                <motion.div initial={{opacity: 0, x: 50}} whileInView={{opacity: 1, x: 0, transition: { delay: 0.1, duration: 0.3 }}} viewport={{once: false, amount: .5}} id="circle5" ref={circle5} className='circle'>
                    <h3 className="circle-title">Siberian Husky</h3>
                    Siberians became widely bred by recreational mushers and show-dog fanciers in the U.S. and Canada as the Siberian Husky, after the popularity garnered from the 1925 serum run to Nome. Siberians stand 20–23.5 inches, weigh between 35 and 60lbs (35-50 for females, 45-60 for males), and have been selectively bred for both appearance and pulling ability. They are still used regularly today as sled dogs by competitive, recreational, and tour-guide mushers.</motion.div>
            </div>
        </div>
    );
};

export const Breeds = () => {
    const [activeLink, setActiveLink] = useState('Alaskan');
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    return (
        <div className="breeds">
            <div className='vertical-navbar'>
            <Navbar className='navbar-breeds'>
                <Nav className='flex-column'>
                    <Nav.Link href="#circle1" className={activeLink === 'alaskan' ? 'active navbar-link-breeds' : 'navbar-link-breeds'} onClick={() => onUpdateActiveLink('alaskan')}>Alaskan</Nav.Link>
                    <Nav.Link href="#circle2" className={activeLink === 'labrador' ? 'active navbar-link-breeds' : 'navbar-link-breeds'} onClick={() => onUpdateActiveLink('labrador')}>Labrador</Nav.Link>
                    <Nav.Link href="#circle3" className={activeLink === 'mackenzie' ? 'active navbar-link-breeds' : 'navbar-link-breeds'} onClick={() => onUpdateActiveLink('mackenzie')}>Mackenzie River</Nav.Link>
                    <Nav.Link href="#circle4" className={activeLink === 'sakhalin' ? 'active navbar-link-breeds' : 'navbar-link-breeds'} onClick={() => onUpdateActiveLink('sakhalin')}>Sakhalin</Nav.Link>
                    <Nav.Link href="#circle5" className={activeLink === 'siberian' ? 'active navbar-link-breeds' : 'navbar-link-breeds'} onClick={() => onUpdateActiveLink('siberian')}>Siberian</Nav.Link>
                </Nav>
            </Navbar>
            </div>
            <motion.div initial={{opacity: 0, x: 50}} whileInView={{opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.5 }}} viewport={{once: false, amount: .5}} className="title breeds-title">Breeds</motion.div>
            <TimelineObserver
                initialColor="black"
                fillColor="black"
                handleObserve={(setObserver) => (
                    <Timeline className="breeds" setObserver={setObserver} />
                )}
            />
        </div>
    );
};        
