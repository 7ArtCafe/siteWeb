import React from 'react'

import '../css/carte.css'

import Slider from '../components/slider_produit'
import img_burger from '../images/burger7Art.png'
import img_milk_shake from '../images/11.png'
import img_tex_mex from '../images/tex-mex.png'

class Produits extends React.Component {
    render(){
        document.title = "Nos Produits | 7ArtCafe"
        return(
            <div>
                <div className="img-border w3-container">
                    <div className="affichage-carte w3-container w3-round">
                        <h1 className="titre-carte w3-hide-large w3-hide-medium w3-col l12">Nos Produits</h1>
                        <div className="header-carte">
                            <div className="img-titre-carte">
                                <Slider/>
                            </div>
                        </div>
                        
                        <h1 className="titre-carte w3-hide-small w3-col l12">Nos Produits</h1>

                        <div className="header-carte w3-container  w3-col">
                            <img className="img-contenue-carte w3-hide-large w3-hide-medium w3-left w3-col s6" src={img_burger}/>
                            <p className="description-produit w3-col l8 m7 s12">Un délicieux pain brioché, une viande bouchère tendre et juteuse.
                                Nos burgers sont réalisé dans les meilleurs conditions afin de ne laisser personne indifférent.
                            </p>
                            <img className="img-contenue-carte w3-hide-small w3-col l2 m3" src={img_burger}/>
                        </div>


                        <div className="header-carte w3-container w3-col l12">
                        <hr/>
                            <img className="img-contenue-carte w3-hide-large w3-hide-medium w3-left w3-col s4" src={img_milk_shake}/>
                            <p className="description-produit w3-col l8 m8">Un milk-shake frais, riche en goût et généreux.
                                Testez donc nos trois saveur (Vanille, Fraise et Chocolat)
                            </p>
                            <img className="img-contenu-carte w3-hide-small w3-col l1 m3" src={img_milk_shake}/>
                        </div>

                        <div className="header-carte w3-container w3-col l12">
                        <hr/>
                            <img className="img-contenue-carte w3-hide-large w3-hide-medium w3-left w3-col s6" src={img_tex_mex}/>
                            <p className="description-produit w3-col l8 m7">Un poulet ferme et gouteux, une panure dorée et croustillante.
                                Nos Tex-Mex sont irrésistiblement savoureux.
                            </p>
                            <img className="img-contenue-carte w3-hide-small w3-col l2 m3" src={img_tex_mex}/>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Produits