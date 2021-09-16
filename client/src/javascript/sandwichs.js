import React from 'react'

import '../css/carte.css'
import img_sandwich from '../images/sandwich.png'
import img_steack from '../images/steack-text-L.png'
import img_pain_maison from '../images/painMaison.png'

class Sandwichs extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          sandwichs: null,
          loading: true
        }
    }

    render(){
        document.title = "Nos Sandwiches | 7ArtCafe"

        return(
            <div>
                <div className="img-border">
                    <div className="affichage-carte w3-container w3-round">

                        <div className="header-carte w3-container">
                            <h1 className="titre-carte w3-animate-right w3-hide-large">Le 7 Art</h1>
                            <p className="description-carte w3-right w3-text-white w3-hide-large">Le sandwich emblématique</p>
                            <img className="w3-animate-top img-titre-carte w3-round-xlarge w3-col l5" src={img_sandwich}/>

                            <div className="w3-container w3-col l6">
                                {/* Changer la police d'écriture */}
                                <h1 className="titre-carte w3-animate-right w3-hide-small w3-hide-medium">Le 7 Art</h1>
                                <p className="description-carte w3-right w3-text-white w3-hide-small w3-hide-medium">Le sandwich emblématique</p>

                                <div className="w3-container">

                                    <div className="w3-container w3-col l6 s9">
                                        <img className="img-petite-viande w3-round-xlarge w3-hide-small w3-hide-medium w3-col l12" alt="image du sandwich 7 art" src={img_steack}/>
                                        {/* <p className="description-petite-img">Marinade maison</p> */}
                                    </div>

                                    <div className="w3-container w3-col l6 s9">
                                        <img className="img-petite-viande w3-round-xlarge w3-hide-small w3-hide-medium w3-col l12" src={img_pain_maison}/>
                                        {/* <p className="description-petite-img">Marinade maison</p> */}
                                    </div>
                                </div>

                            </div>

                        </div>

                        {/* Description */}
                        <div className="w3-container">
                            <div className="description-carte">
                                <p>    
                                    Un pain savoureux et une tortilla qui l’est tout autant, tous deux <span className="text-important"> fait maison. </span>
                                    Chaque ingrédient qui compose nos sandwichs ont été choisit méticuleusement. C’est donc <span className="text-important">7 sandwichs</span> que nous vous proposons
                                </p>
                                <p>
                                    <span className="text-important">Le 7 art : Le sandwich phare</span>, Composé de steack pur boeuf, de cheddar, d'une sauce maison ainsi que de crudités.
                                </p>
                                <p>
                                    <span className="text-important">Le Tenders : </span>composé d'un filet de poulet pané, de cheddar, d'une mayonnaise et de crudités.
                                </p>
                                <p>
                                    <span className="text-important">Le Royal : </span>composé de steack haché, de saucissons fumé, d'un double cheddar, d'une sauce maison et de crudités.
                                </p>
                                <p>
                                    <span className="text-important">Le Super : </span>composé de steack haché, d'un double cheddar, d'une sauce maison et de crudités.
                                </p>
                                <p>
                                    <span className="text-important">L'Oriental : </span>composé de thon, d'oeuf, d'oignons, de poivrons, d'olives, d'harissa  et de crudités.
                                </p>
                                <p>
                                    <span className="text-important">Le Saumon : </span>composé de saumon fumé, de citron, d'aneth, d'une sauce blanche et de crudités.
                                </p>
                                <p>
                                    <span className="text-important">Le Poulet : </span>composé de morceaux de poulet, de cheddar, d'une mayonnaise et de crudités.
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Sandwichs