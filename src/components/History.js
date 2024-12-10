import {motion} from 'framer-motion';
import {Container, Row, Col} from 'react-bootstrap';
import history from '../images/history.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

export const History = () => {
    return(
        <section className='history' id='history'>
            <Container>
                <Row>
                    <Col xl={12} sm={12}>
                        <motion.h2 className='title history-title' initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 }}} viewport={{once: false, amount: .5}}>History</motion.h2>
                        <div className='content history-content'>
                            <motion.p initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.5 }}} viewport={{once: false, amount: .5}}>Nearly all dogs' genetic closeness to the gray wolf is due to admixture. However, several Arctic breeds also show a genetic closeness with the now-extinct Taimyr wolf of North Asia due to admixture: the Siberian Husky and Greenland Dog (which are also historically associated with Arctic human populations) and to a lesser extent, the Shar Pei and Finnish Spitz. An admixture graph of the Greenland Dog indicates a best-fit of 3.5% shared material; however, an ancestry proportion ranging between 1.4% and 27.3% is consistent with the data and indicates admixture between the Taimyr wolf and the ancestors of these four high-latitude breeds.</motion.p>
                            <motion.p initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.5 }}} viewport={{once: false, amount: .5}}>This introgression could have provided early dogs living in high latitudes with phenotypic variation beneficial for adaption to a new and challenging environment, contributing significantly to the development of the husky. It also indicates that the ancestry of present-day dog breeds descends from more than one region.</motion.p>
                        </div>
                    </Col>
                    <Col xl={12} sm={12}>
                        <img className='history-image' src={history} alt='History'></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}