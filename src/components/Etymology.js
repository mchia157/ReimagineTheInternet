import {motion} from 'framer-motion';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../images/etymology.jpg'

export const Etymology = () => {
    return(
        <section className='etymology' id='etymology'>
            <Container>
                <Row className='content etymology-content'>
                    <Col xl={12} lg={12} md={12} sm={12}>
                        <motion.h2 className='title etymology-title' initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 }}} viewport={{once: false, amount: .5}}>Etymology</motion.h2>
                        <motion.p className='content' initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.5 }}} viewport={{once: false, amount: .5}}>The term "husky" first came into usage in the mid to late 1700s. At this time, "Esquimaux" or "Eskimo" was a common term for pre-Columbian Arctic inhabitants of North America. Several dialectal permutations were in use including Uskee, Uskimay and Huskemaw. Thus, dogs used by Arctic people were the dogs of the Huskies, the Huskie's dogs, and eventually simply the husky dogs. Canadian and American settlers, not well versed on Russian geography, would later extend the word to Chukotka sled dogs imported from Russia, thus giving rise to the term Siberian husky.</motion.p>
                    </Col>
                    <Col xl={12} lg={12} md={12} sm={12}>
                        <img className='etymology-image' src={image} alt="Sled Dogs"></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}