import React from 'react'
import { techSkills } from '../../utils/data'
import css from './Technical.module.scss'
import {motion} from 'framer-motion'
import { textVariant2 } from '../../utils/motion'

const Skill = () => {
  return (
      techSkills.map((item,i)=>(
        <motion.div
        variants={textVariant2}
        className={css.skill} key={i}
        >
            <h3>{item.name}</h3>
            <section><div style={{width: item.width}}></div></section>
        </motion.div>
      ))
  )
}

export default Skill