import React from 'react'

import '../css/carte.css'
import img_pizza from '../images/pizza_7Art.png'
import img_test from '../images/7artGrandBlanc.jpg'

const url_pizzas = "http://localhost:4242/carte/plats/3"

class Pizzas extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          pizzas: null,
          loading: true
        }
    }

    render(){
        document.title = "Nos Pizzas | 7ArtCafe"

        return(
            <div>
                <div className="img-border">
                    <div className="affichage-carte w3-container w3-round">
                        <div className="header-carte w3-container">
                            {/* <div className="w3-red w3-half">s</div> */}
                            <div className="w3-container w3-col l6">
                                {/* Changer la police d'écriture */}
                                <h1 className="titre-carte w3-animate-right">Les Pizz'Art</h1>
                                <p className="description-carte w3-text-white">Des pizzas faites avec une pâte fraîche et une mozzarella savoureuse</p>
                            </div>
                            <img className="w3-animate-top img-titre-carte imgtourne w3-round-xlarge w3-col l5" src={img_pizza}/>
                            {/* <img className="img-titre-carte w3-half w3-red" src={img_test}/>
                            <span className="titre-carte">Les Pizzas</span> */}
                        </div>
                        {/* Description */}
                        <div className="w3-container">
                            <div className="description-carte">
                                <p>
                                    <span className="text-important">Le 7 Art Cafe : </span>Composé de sauce tomate, de mozzarella, de champignons, de thon et d'olives.
                                </p>
                                <p>
                                    <span className="text-important">La Calzone : </span>Composé de sauce tomate, de mozzarella, d'oeuf et de roulade de dinde.
                                </p>
                                <p>
                                    <span className="text-important">La Buffalo : </span>Composé de sauce tomate, de mozzarella, de boeuf haché, de poivrons, d'oignons et de sauce BBQ.
                                </p>
                                <p>
                                    <span className="text-important">La 4 Fromages : </span>Composé de crème fraîche, de mozzarella, de chèvre, d'emmental et de gorgonzola.
                                </p>
                                <p>
                                    <span className="text-important">La Montagnarde : </span>Composé de crème fraîche, de mozzarella, de lardons fumé, de pomme de tere, de reblonchon et d'oignons.
                                </p>
                                <p>
                                    <span className="text-important">La Salmone : </span>Composé de crème fraîche, de mozzarella, de saumon, de champigons, de tomates, de citrons et d'aneth.
                                </p>
                                <p>
                                    <span className="text-important">La Mexic'Art : </span>Composé de sauce tomate, de mozzarella, de boeuf haché, de purée de piment, de merguez et de poivrons.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pizzas