// Import Assets
import profile from '../assets/profile.png';
import profileJanio from '../assets/profileJanio.jpg';

const Header = () => {
    return (
        <section className='header'>
            <img src={profileJanio} alt="Janio Silva" />

            <div className='header__content'>
                <h1>Hi, I'm Janio Silva</h1>
                <p>Blockchain Developer (mostly Solidity and Cairo)</p>
     <a href='mailto:janio.r.silva@gmail.com' className='button'>Get In Touch: janio.r.silva@gmail.com</a>
	    <p>+55(31)992 168 011</p>

            </div>
        </section>
    );
}

export default Header;
