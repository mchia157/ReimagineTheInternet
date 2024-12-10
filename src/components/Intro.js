import {motion} from 'framer-motion';
import {Container, Row, Col} from 'react-bootstrap';
import introPicture from '../images/Husky.png';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Intro = () => {
    return(
        <section className='home' id='home'>
        <Container>
            <Row className="intro-content">
            <Col xl={6} lg={6} md={6} sm={12}>
                <motion.img initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.8 }}} viewport={{once: false, amount: .5}} className='home-pic align-left' src={introPicture} alt="Intro"></motion.img>
            </Col>
            <Col xl={6} lg={6} md={6} sm={12}>
                <div className='content1'>
                    <motion.h1 className='title-intro' initial={{opacity: 0, x: 50}} whileInView={{opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.8 }}} viewport={{once: false, amount: .5}}>Husky</motion.h1>
                    <motion.p className='paragraph-intro' initial={{opacity: 0, x: 50}} whileInView={{opacity: 1, x: 0, transition: { delay: 0.4, duration: 0.8 }}} viewport={{once: false, amount: .5}}>Husky is a general term for a dog used in the polar regions, primarily and specifically for work as sled dogs. It refers to a traditional northern type, notable for its cold-weather tolerance and overall hardiness. Modern racing huskies that maintain arctic breed traits (also known as Alaskan huskies) represent an ever-changing crossbreed of the fastest dogs.</motion.p>
                    <motion.p className='paragraph-intro' initial={{opacity: 0, x: 50}} whileInView={{opacity: 1, x: 0, transition: { delay: 0.6, duration: 0.8 }}} viewport={{once: false, amount: .5}}>Huskies have continued to be used in sled-dog racing, as well as expedition and trek style tour businesses, and as a means of essential transportation in rural communities. Huskies are also kept as pets, and groups work to find new pet homes for retired racing and adventure-trekking dogs.</motion.p>
                </div>
            </Col>
            </Row>
        </Container>
        </section>
    )
}