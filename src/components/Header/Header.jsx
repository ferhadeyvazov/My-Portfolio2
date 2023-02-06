import React, {useState, useRef} from 'react'
import css from './Header.module.scss';
import { BiPhoneCall, BiMenuAltRight } from 'react-icons/bi'
import { FaGithub } from 'react-icons/fa'
import {motion} from 'framer-motion';
import { headerVariants, getMenuStyles } from '../../utils/motion';
import useHeaderShadow from '../../hooks/useHeaderShadow';
import useOutsideAlerter from '../../hooks/useOutsideAlerter';
import Cv from '../../assets/img/Resume Ferhad Eyvazov.pdf';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const changeMenu = ()=>{
    setMenuOpen(!menuOpen);
  }
  const headerShadow = useHeaderShadow();
  const menuRef = useRef();
  useOutsideAlerter(
    {
      menuRef,
      setMenuOpen
    }
  )

  return (
    <motion.div
    initial='hidden'
    whileInView='show'
    variants={headerVariants}
    viewport={{once:false, amount: 0.25}}
    className={`paddings ${css.wrapper}`}
    style={{boxShadow: headerShadow}}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>
          <a href="#">FerhadDev</a>
        </div>

        <ul
        ref={menuRef}
        style={getMenuStyles(menuOpen)}
        className={`flexCenter ${css.nav}`}>
          <li><a href="#experties">Services</a></li>
          <li><a href="#work">Experience</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#technical">Technical Skills</a></li>
          <li><button className={css.button}>
            <a href={Cv} download>download cv</a>
              </button></li>
          <li className={`flexCenter ${css.phone}`}>
            <a className='flexCenter' href='tel: +994555639129'>
              <BiPhoneCall size={'40px'} />
            </a>
          </li>
          <li className={`flexCenter ${css.github}`}>
            <a href="https://github.com/ferhadeyvazov" target='_blank'>
              {/* <p>Github</p> */}
              <FaGithub size={'40px'} />
            </a>
          </li>
        </ul>
{/* for medium and small screens */}
        <div className={css.menuIcon}
        onClick={changeMenu}>
          <BiMenuAltRight size={'30px'} />
        </div>
      </div>
    </motion.div>
  )
}

export default Header