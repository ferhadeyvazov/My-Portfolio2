import { motion } from 'framer-motion';
import { textVariant2 } from '../../utils/motion'
import css from './Works.module.scss'

const WorExperince = ({ item }) => (
        <motion.div
                className={`flexCenter ${css.exp}`}
                variants={textVariant2}
                >
                <div className={css.post}>
                        <h1>{item.place}</h1>
                        <p>{item.tenure}</p>
                </div>
                <div className={css.role}>
                        <h1>{item.role}</h1>
                        <p>{item.detail}</p>
                </div>
        </motion.div>
)

export default WorExperince