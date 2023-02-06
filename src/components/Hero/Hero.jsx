import React from 'react'
import css from './Hero.module.scss'
import Cert from '../../assets/img/Certificate-Frontend_Dev.jpeg'
import Eyvazov from '/src/assets/img/person_F.Eyvazov3.png';

import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, slideIn } from '../../utils/motion.js'
const Hero = () => {
    return (
        <motion.section
            variants={staggerContainer}
            initial='hidden'
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`paddings ${css.wrapper}`}
            >
            <div className={`innerWidth ${css.container}`}>
                
                {/* Upper elements */}
                <div className={`${css.upperElements}`}>
                    <motion.span
                        variants={fadeIn("right", "tween", 0.2, 1)}

                        className="primaryText">
                        Hey There, <br /> I'm Ferhad
                    </motion.span>
                    <motion.span
                        variants={fadeIn("left", "tween", 0.4, 1)}

                        className='secondaryText'>
                        İ code beautiful, responsively
                        <br />
                        websites And I love what i do
                    </motion.span>
                </div>

                {/* Person Image */}
                <motion.div
                    variants={fadeIn("up", "tween", 0.3, 1)}
                    className={css.person}>
                    <motion.img
                        variants={slideIn("up", "tween", 0.5, 1.3)}
                        src={Eyvazov} alt="person" />
                </motion.div>

                {/* Email */}
                <a href="mailto:eyvazov.ferhad1997@gmail.com"
                    target="_blank"
                    className={css.email}>
                    eyvazov.ferhad1997@gmail.com
                </a>


                {/* Lower Elements */}
                <div className={`${css.lowerElements}`}>
                    <motion.div
                        variants={fadeIn("up", "tween", 0.3, 1)}
                        className={css.experience}>
                        <div className="primaryText">2</div>
                        <div className="secondaryText">
                            <div>Years</div>
                            <div>Experience</div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("up", "tween", 0.5, 1)}
                        className={css.certificate}>
                        <a href={Cert} download>
                            <img src="/certificate.png" alt="Certificate" />
                        </a>
                        <span>Certified Professional</span>
                        <span>Frontend Developer</span>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}

export default Hero