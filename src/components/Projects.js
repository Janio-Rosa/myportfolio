// Import Assets
//import uniswap from '../assets/uniswap.png';
//import compound from '../assets/compound.png';
//import aave from '../assets/aave.png';

import uniswap from '../assets/eth-swap.png';
import compound from '../assets/air-drop.png';
import aave from '../assets/aave.png';


const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Eth-Swap</h3>
                    <img src={uniswap} alt="Eth-swap Page" />
                    <p>Eth-Swap is my Uniswap clone page for swapping an ether for my custom token: JNIO.
                        On this project I had the experience of deploying a smart contract on the blockchain as well as 
                        important concepts related to AMM and DeFi. It was also good for testing the stack of Solidity, Truffle, Web3 and Ganache.
                    </p>

                    <a href="https://191.101.233.166:3001/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/Janio-Rosa/my-token-swap" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>My zK Air Drop</h3>
                    <img src={compound} alt="My own zK Air Drop" />
                    <p>On this project I created an Air Drop using zk concepts, like
                        the Merkle Tree. The leaves are the eligible addresses for the air drop. And to be a eligible node they must have used my eth-swap, buying my custom token above (JNIO).
                        The airdrop will reward another custom token of mine: AIRJ.
                    </p>

                    <a href="https://191.101.233.166:3002/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/Janio-Rosa/merkle-tree-airdrop" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Auditing Reports Reader</h3>
                    <img src={aave} alt="Auditing Reading" />
                    <p>I have been reading many audit reports to get ready to identify
                        vulnerabilities that could be exploit and could result in loss of funds.
                        There has never been so many hack losses on internet like we have now on Web3, in terms of value of assets. It is important to always keep up with the best practices.
                    </p>

                    <a href="https://aave.com/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/aave/aave-v3-core" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;
