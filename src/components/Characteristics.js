import {motion} from 'framer-motion';
import {Container, Row, Col} from 'react-bootstrap';
import image from '../images/characteristics.png';
import { CheckSquare, Sticky } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';



export const Characteristics = () => {
    return (
        <section className='section characteristics-section' id='characteristics'>
            <Container>
                <Row className="align-items-center">
                    <Col xl={6} lg={6} md={12}>
                        <motion.h2 className='title' initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.5 }}} viewport={{once: false, amount: .5}}>Characteristics</motion.h2>
                        <div className='content'>
                            <motion.p className='characteristic' initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 0, transition: { delay: 0.4, duration: 0.5 }}} viewport={{once: false, amount: .5}}><CheckSquare className='check'/>Energetic and Athletic</motion.p>
                            <motion.p className='characteristic' initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 0, transition: { delay: 0.6, duration: 0.5 }}} viewport={{once: false, amount: .5}}><CheckSquare className='check'/>Distinguished by their hardiness and cold-weather tolerance, in contrast to many modern sprint sled dogs derived from hound and pointer crossbreeds and purebred sprinting dogs which do not have or retain these qualities.</motion.p>
                            <motion.p className='characteristic' initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 0, transition: { delay: 0.8, duration: 0.5 }}} viewport={{once: false, amount: .5}}><CheckSquare className='check'/>Distinguished from laika, as they were not developed for the primary purpose of hunting game and prey animals.</motion.p>
                            <motion.p className='characteristic' initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 0, transition: { delay: 1, duration: 0.5 }}} viewport={{once: false, amount: .5}}><CheckSquare className='check'/>Have a thick double coat that may come in a variety of colors. The double coat generally protects huskies against harsh winters and, contrary to what most believe, they can survive in hotter climates.</motion.p>
                            <motion.p className='characteristic' initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 0, transition: { delay: 1.2, duration: 0.5 }}} viewport={{once: false, amount: .5}}><CheckSquare className='check'/>During the hotter climates, they shed their undercoat regularly to cool their bodies.Their eyes are typically pale blue, although they may also be brown, green, blue, yellow, or heterochromic.</motion.p>
                            <motion.p className='characteristic' initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 0, transition: { delay: 1.4, duration: 0.5 }}} viewport={{once: false, amount: .5}}><CheckSquare className='check'/>Control their eating habits based on the season; in cooler climates, they tend to eat generous amounts, causing their digestion to generate heat, whilst in warmer climates, they eat less.</motion.p>                        
                        </div>
                    </Col>
                    <Col xl={6} lg={6} md={12} className='d-flex flex-column justify-content-end'>
                        <motion.img src={image}
                            alt="Husky"
                            className="img-fluid"
                            initial={{ opacity: 0, x: 100}}
                            whileInView={{ opacity: 1, x:0, transition: { delay: 0.3, duration: 0.8 } }}
                            viewport={{ once: false, amount: 0.5 }}></motion.img>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}