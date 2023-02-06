import React from 'react'
import css from './Experties.module.scss';
import Card from './Cards/Card'
import { projectExperience, WhatDoIHelp } from '../../utils/data';
import { motion } from 'framer-motion';
import { staggerContainer, textVariant } from '../../utils/motion'
const Experties = () => {
    return (
        <motion.section
        variants={staggerContainer}
        initial='hidden'
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        
        className={css.wrapper}>
            <a className="anchor" id="experties"></a>
            <div className={`paddings yPaddings flexCenter innerWidth ${css.container}`}
            >
                <div className={css.leftSide}>
                    {
                        projectExperience.map(({ name, projects, bg, icon }, i) => (
                            <Card key={i} name={name}
                                projects={projects} bg={bg} Icon={icon} />

                        ))
                    }
                </div>

                <motion.div
                variants={textVariant(0.5)}
                className={css.rightSide}>
                    <h1 className='primaryText'>What do I help you?</h1>

                    <p>{WhatDoIHelp[0]}</p>
                    <p>{WhatDoIHelp[1]}</p>

                    <div className={`flexCenter ${css.stats}`}>
                        <div className={`flexCenter ${css.stat}`}>
                            <h1 className='primaryText'>10+</h1>
                            <p className='secondaryText'>Projects Completed</p>
                        </div>
                        <div className={`flexCenter ${css.stat}`}>
                            <h1 className='primaryText'>25+</h1>
                            <p className='secondaryText'>Happy Clients</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Experties