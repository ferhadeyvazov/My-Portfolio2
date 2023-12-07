import React from 'react'
import './Portfel.scss'
import { motion } from 'framer-motion';
import { fadeIn, staggerChildren } from '../../utils/motion'
import Diamon from '/src/assets/img/Project2.png'
import Coffee from '/src/assets/img/Project1.png'
import Clothed from '/src/assets/img/Project3.png'
import Shopstore from '/src/assets/img/real_project_shopstore.jpg'

function Portfolio() {
    return (
        <motion.section
            variants={staggerChildren}
            initial='hidden'
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}

            className='paddings wrapper'>
            <a className='anchor' id="portfolio"></a>
            <div className="innerWidth flexCenter container">

                <div className="flexCenter heading">
                    <div>
                        <h1 className='primaryText'>My Latest Works</h1>
                        <p style={{ marginTop: '10px' }}>Perfect solution for digital experience</p>
                    </div>
                    <a className='secondaryText' target='_blank'
                        href="https://github.com/ferhadeyvazov">
                        Explore More Works
                    </a>

                </div>

                {/* IMAGES */}
                <div className="showCase">
                    <motion.a
                        variants={fadeIn('up', 'tween', 0.5, 0.6)}
                        href="https://shopstore.az/" target='_blank'>
                        <img src={Shopstore} alt="shopstore.az" />
                        
                    </motion.a>
                    <motion.a
                        variants={fadeIn('up', 'tween', 0.7, 0.6)}
                        href="https://diamonmusic.vercel.app/" target='_blank'>
                        <img src={Diamon} alt="Project" />
                        
                    </motion.a>
                    <motion.a
                        variants={fadeIn('up', 'tween', 0.9, 0.6)}
                        href="https://flavoredcoffee.netlify.app/" target='_blank'>
                        <img src={Coffee} alt="project"
                        />
                    </motion.a>
                    <motion.a
                        variants={fadeIn('up', 'tween', 0.11, 0.6)}
                        href="https://depoclothing.netlify.app/" target='_blank'>
                        <img src={Clothed} alt="project"
                        />
                    </motion.a>
                    {/* <motion.a
                        variants={fadeIn('up', 'tween', 0.11, 0.6)}
                        href="https://ferhadblackjackgame.netlify.app/" target='_blank'>
                        <img src="../../../public/GameProject.png" alt="project"
                        />
                    </motion.a> */}
                </div>
            </div>
        </motion.section>
    )
}

export default Portfolio