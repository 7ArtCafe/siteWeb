import React from 'react'

import '../css/carte.css'
// import img_burger from '../images/burger.png'
// import img_burger from '../images/iStock-1203988866-L.jpg'
import img_pain_haut from '../images/pain_haut-L.png'
import img_tomate from '../images/Tomate-L.png'
import img_fromage from '../images/Fromage-L.png'
import img_steack from '../images/steack-L.png'
import img_pain_bas from '../images/pain_bas-L.png'
import img_salade from '../images/salade-L.png'

import img_tenders from '../images/Crispy_Chicken_Strips_-_FotoosVanRobin.jpg'
import img_test from '../images/7artGrandBlanc.jpg'

const url_burger = "http://localhost:4242/carte/plats/2"

class Burgers extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          Burgers: null,
          loading: true
        }
    }

    render(){
        document.title = "Nos Burgers | 7ArtCafe"
        return(
            <>
                <div className="img-border">
                    <div className="affichage-carte w3-container w3-round">
                        <div className="header-carte w3-container">
                            {/* <div className="w3-red w3-half">s</div> */}
                            <div className="w3-col l12">
                                <div className="w3-display-container w3-col l12 w3-animate-top">
                                    <img className="img-titre-carte w3-round-xlarge w3-col l5" src={img_pain_haut}/>
                                    <p className="description-burger-carte w3-display-right w3-hide-small w3-hide-medium w3-col l5">Pain Burger 100% fait maison</p>
                                </div>
                                <div className="w3-display-container w3-col l12 w3-animate-right">
                                    <img className="img-titre-carte w3-round-xlarge w3-col l5" src={img_fromage}/>
                                    <p className="description-burger-carte w3-display-right w3-hide-small w3-hide-medium w3-col l5">Fromage de premiere qualite</p>
                                </div>
                                <div className="w3-display-container w3-col l12 w3-animate-left">
                                    <img className="img-titre-carte w3-round-xlarge w3-col l5" src={img_steack}/>
                                    <p className="description-burger-carte w3-display-right w3-hide-small w3-hide-medium w3-col l5">Viande bouchere assaisonne maison</p>
                                </div>
                                <div className="w3-display-container w3-col l12 w3-animate-right">
                                    <img className="img-titre-carte w3-round-xlarge w3-col l5" src={img_tomate}/>
                                    <p className="description-burger-carte w3-display-right w3-hide-small w3-hide-medium w3-col l5">Tomate fraiche</p>
                                </div>
                                <div className="w3-display-container w3-col l12 w3-animate-left">
                                    <img className="img-titre-carte w3-round-xlarge w3-col l5" src={img_salade}/>
                                    <p className="description-burger-carte w3-display-right w3-hide-small w3-hide-medium w3-col l5">Salade craquante</p>
                                </div>
                                <div className="w3-display-container w3-col l12 w3-animate-bottom">
                                    <img className="img-titre-carte w3-round-xlarge w3-col l5" src={img_pain_bas}/>
                                    <p className="description-burger-carte w3-display-right w3-hide-small w3-hide-medium w3-col l5">Pain Burger 100% fait maison</p>
                                </div>
                            </div>
                            {/* <div className="titre-carte w3-container w3-animate-right w3-col l6">7'Burger</div> */}
                        
                        </div>
                        {/* Description */}
                        <div className="w3-container">
                            <div className="description-carte">
                                <p>
                                    <span className="text-important">Le 7'Burger: </span>Composé de boeuf, de cheddar, d'oignons rouges, de cornichons, d'une sauce maison et de crudité.
                                </p>
                                <p>
                                    <span className="text-important">Le 7'Chicken : </span>Composé de tenders, de cheddar, d'une mayonnaise et de crudités.
                                </p>
                                <p>
                                    <span className="text-important">Le 7'Fish : </span>Composé de filet de colin, de citrons, de cornichons, de sauce poisson et de crudité.
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </>
        )
    }
}

export default Burgers