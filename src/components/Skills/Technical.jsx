import React from 'react'
import tec from './Technical.module.scss'
import Skill from "./Skill"
import { motion } from 'framer-motion'
import { staggerChildren } from '../../utils/motion';

function Technical() {
  return (
    <motion.section
      variants={staggerChildren}
      initial='hidden'
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${tec.wrapper}`}
      >
      <a className="anchor" id="technical"></a>
      <div className={`innerWidth ${tec.container}`}>
        <h1 className='primaryText'>Technical Skills</h1>
        <div className={`${tec.skill_container}`}><Skill /></div>
      </div>
    </motion.section>
  )
}

export default Technical