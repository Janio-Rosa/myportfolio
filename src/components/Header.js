// Import Assets
import profile from '../assets/profile.png';
import profileJanio from '../assets/profileJanio.jpg';
import React, { useState } from "react"
import {Alert} from "react" 
import Modal from "react-modal";
import "./mystyles.css";

Modal.setAppElement("#root");

const Header = () => {

	const [isOpen, setIsOpen] = useState(false);

	function toogleModal(){
            setIsOpen(!isOpen);
	}

    return (
        <section className='header'>
	          <Modal
        isOpen={isOpen}
        onRequestClose={toogleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={10}
      >
	    <div class_name='header__content'>
	    <h2>E-Mail: janio.r.silva@gmail.com </h2><p>&nbsp;</p>
             <h2>Mobile: +55(34)992 168 011</h2> <p>&nbsp;</p>
	    </div>
	    <button className='button' onClick={toogleModal}> &nbsp; &nbsp; &nbsp; Close &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </button>
	    </Modal>
            <img src={profileJanio} alt="Janio Silva" />

            <div className='header__content'>
                <h1>Hi, I'm Janio Silva</h1>
                <p>Blockchain Developer (Solidity)</p>
     <button title='janio.r.silva@gmail.com' className='button' onClick={toogleModal}  >Get In Touch</button>

            </div>
        </section>
    );
};



export default Header;
