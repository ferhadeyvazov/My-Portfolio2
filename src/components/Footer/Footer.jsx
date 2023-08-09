import React from 'react'
import './Footer.scss'
import { motion } from 'framer-motion';
import { footerVariants } from '../../utils/motion';
import { BsLinkedin, BsInstagram } from 'react-icons/bs'
import { TbBrandGmail } from 'react-icons/tb'
import { RxResume } from 'react-icons/rx'
import Cv from '../../assets/img/Resume Fərhad Eyvazov.pdf';



const Footer = () => {
    return (
        <motion.section
            variants={footerVariants}

            className='paddings wrapper'>

            <div className="yPaddings innerWidth flexCenter split">
                <div className="left">
                    <h1 className='primaryText'>
                        Let's make something <br /> amazing together</h1>
                    <h1 className='primaryText'>
                        Start by <a href="mailto:eyvazov.ferhad1997@gmail.com">Saying Hi</a></h1>
                </div>

                <div className="right">

                    <div className="info">
                        <h2>Information</h2>
                        <p>Absheron region, Khirdalan city</p>
                    </div>

                    <ul className="menu">
                        <li>
                            <a href="tel: +994555639129">
                                +994(55)563-91-29
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/farhadeyvazov/" target="_blank">
                                <BsLinkedin />
                                Linkedin
                            </a>
                        </li>
                        <li><a href="mailto:eyvazov.ferhad1997@gmail.com" target="_blank">
                            <TbBrandGmail/>
                                Gmail
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/ferhad_eyvazzov/" target="_blank">
                                <BsInstagram/>
                                Instagram
                            </a>
                        </li>
                        <li>
                            <button className='button'>
                                <a href={Cv} download>
                                    <RxResume />
                                    download cv
                                </a>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </motion.section>
    )
}

export default Footer