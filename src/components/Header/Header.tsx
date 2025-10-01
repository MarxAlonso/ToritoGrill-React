
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Variants } from "framer-motion";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Efecto para detectar el scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animaciones para los elementos del menú
  
  const navItemVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  // Animación para el logo
  const logoVariants: Variants = {
    normal: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.3 } }
  };


  return (
    <motion.div 
      className={`sticky-top container-fluid p-0 m-0 ${isScrolled ? 'scrolled' : ''}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="navegaciones">
        <input 
          type="checkbox" 
          id="check" 
          checked={isMenuOpen}
          onChange={() => setIsMenuOpen(!isMenuOpen)}
        />
        <label htmlFor="check" className="checkbtn">
          <motion.i
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bi bi-list"
            style={{ backgroundColor: "white", borderRadius: 10 }}
          />
        </label>
        <Link to="/" className="enlace">
          <motion.img 
            src="/src/assets/img/torito-grill.webp" 
            alt="Torito Grill Logo" 
            className="logo"
            variants={logoVariants}
            initial="normal"
            whileHover="hover"
          />
        </Link>
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { 
                staggerChildren: 0.1,
                delayChildren: 0.2
              } 
            }
          }}
        >
          <motion.li 
            custom={0} 
            variants={navItemVariants}
          >
            <Link className={location.pathname === '/' ? 'active' : ''} to="/" style={{ fontSize: 13 }}>
              <b>INICIO</b>
            </Link>
          </motion.li>
          <motion.li 
            custom={0} 
            variants={navItemVariants}
          >
            <Link className={location.pathname === '/nosotros' ? 'active' : ''} to="/nosotros" style={{ fontSize: 13 }}>
              <b>NOSOTROS</b>
            </Link>
          </motion.li>
          <motion.li 
            custom={0} 
            variants={navItemVariants}
          >
            <Link className={location.pathname === '/servicios' ? 'active' : ''} to="/servicios" style={{ fontSize: 13 }}>
              <b>SERVICIOS</b>
            </Link>
          </motion.li>
          <motion.li 
            custom={0} 
            variants={navItemVariants}
          >
            <Link className={location.pathname === '/carta' ? 'active' : ''} to="/carta" style={{ fontSize: 13 }}>
              <b>CARTA</b>
            </Link>
          </motion.li>
          <motion.li 
            custom={0} 
            variants={navItemVariants}
          >
            <Link className={location.pathname === '/blog' ? 'active' : ''} to="/blog" style={{ fontSize: 13 }}>
              <b>BLOG</b>
            </Link>
          </motion.li>
          <motion.li 
            custom={0} 
            variants={navItemVariants}
          >
            <Link className={location.pathname === '/locales' ? 'active' : ''} to="/locales" style={{ fontSize: 13 }}>
              <b>NUESTROS LOCALES</b>
            </Link>
          </motion.li>
          <motion.li 
            custom={0} 
            variants={navItemVariants}
          >
            <Link
              className="contact" 
              to="/eventos"
              style={{ fontSize: 13, padding: "10px 20px", color: "white" }}
            >
              <b>EVENTOS</b>
            </Link>
          </motion.li>
        </motion.ul>
      </nav>
    </motion.div>
  );
};
