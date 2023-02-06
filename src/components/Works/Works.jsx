import React from 'react'
import css from './Works.module.scss'
import { motion } from 'framer-motion'
import { staggerChildren, zoomIn, fadeIn } from '../../utils/motion'
import { workExp } from '../../utils/data'
import WorkExperience from './WorkExperience'
const Works = () => {
    return (
        <motion.section
            variants={staggerChildren}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}
            className={`paddings ${css.wrapper}`}
            >
            
            <a href="" className="anchor" id="work"></a>
            <div className={`flexCenter innerWidth ${css.container}`}>
                <h1 className='primaryText yPaddings'>
                    My Work Experience
                </h1>

                <div className={`flexCenter ${css.experience}`}>
                    {
                        workExp.map((item, i)=>(
                            <WorkExperience key={i}
                            item={item} />
                        ))
                    }
                        <motion.div 
                        variants={zoomIn(1, 1)}
                        className={css.progressbar}
                        >
                        <motion.div variants={fadeIn('down', 'tween', 2, 1.5)} className={css.line}></motion.div>
                            <div><div className={css.circle} style={{background: '#286F6C'}}></div></div>
                            <div><div className={css.circle} style={{background: '#F2704E'}}></div></div>
                            <div><div className={css.circle} style={{background: '#EEC048'}}></div></div>
                        </motion.div>

                </div>
            </div>

        </motion.section>
    )
}

export default Works