import React from 'react'
import css from '../Experties.module.scss'
// import { MdOutlineDesktopMac } from 'react-icons/md'
import { motion } from 'framer-motion';
import { fadeIn } from '../../../utils/motion'


const Card = ({name, projects, bg, Icon},i) => {
  return (
    <motion.div
    variants={fadeIn('right',"tween", (i+1)*2, 1)}
    className={css.exp}>
        <div className='flexCenter' style={{background: bg}}>
              <Icon size={25} color='white' />
        </div>

        <div>
            <h3>{name}</h3>
            <p>{projects} Projects</p>
        </div>
    </motion.div>
  )
}

export default Card