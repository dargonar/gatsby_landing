import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
      
        <a href="https://instagram.com/muebles.guapos/" target="_blank" style={{textDecoration:'none'}} ><span className="icon fa-instagram"></span></a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://www.facebook.com/muebles.guapos" target="_blank" style={{textDecoration:'none'}} ><span className="icon fa-facebook"></span></a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://wa.me/5491169719004?text=Hola!" target="_blank" style={{textDecoration:'none'}} ><span className="icon fa-whatsapp"></span></a>
      
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
