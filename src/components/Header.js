import React from 'react'
import PropTypes from 'prop-types'
// import pic01 from '../images/favicon-96x96.png'
import pic01 from '../images/muebles.guapos.logo.svg'

//<span className="icon fa-diamond"></span>
/*
<nav>
    <ul>
        <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
        <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
        <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
        <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
    </ul>
</nav>
*/
const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <img src={pic01} alt="" />
        </div>
        <div className="content">
            <div className="inner">
                <h1>Muebles Guapos</h1>
                <p style={{maxWidth:500}}>En brevísimo tiempo vas a poder navegar nuestros productos, comprar online en cuotas y alquilar livings para tu evento<br/>Estate atent@!</p>
            </div>
        </div>
        
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
