import React from 'react'
import { Player, BigPlayButton, PosterImage } from 'video-react';

import '../css/accueil.css'

import Slider from '../components/slider.js'
import img_ouverture from '../images/IMG-20210326-WA0007.jpg'
import img_restaurant from '../images/bat_ext.jpg'
import img_restaurant_int from '../images/IMG-20210322-WA0019.jpg'
import img_annonce_show1 from '../images/IMG-20210607-WA0000.jpg'
import img_annonce_show2 from '../images/04-juillet-IMG-20210701-WA0001.jpg'
import img_bar from '../images/bar.jpg'

import poster_show from '../images/poster-sunday-shows.png'
import video_présentation from '../images/04juillet-VID-20210701-WA0002.mp4'

class Accueil extends React.Component {
    
    render(){
        document.title = "Accueil | 7ArtCafe"
    
        return(
            // Création de la mise en page pour ordinateur
            <div className="acc">
                <div className="acc-body w3-container">

                    <div className='slider w3-container'>
                        <Slider/>
                    </div>
                    <div className="w3-center">
                        <hr/>
                        <blockquote className="citation w3-center">
                            <h1 className="citation-text">La mission du 7 art cafe est d'offrir une expérience exceptionnelle à nos employés et à nos invités grâce à notre relation unique, notre passion et notre engagement envers la qualité. </h1>
                            <h2 className="w3-hide-large w3-hide-medium w3-hide-small">7 ART CAFE, 7artcafe, 7 Art Cafe, 7 art café</h2>
                        </blockquote>
                        <hr/>
                        {/* <img className="w3-hide-small" src={img_annonce_show2}/> */}
                        <div className="w3-col w3-hide-medium w3-hide-large">
                            <Player
                                autoPlay={false}
                                fluide={false}
                                width="15"
                                src={video_présentation}
                                poster={poster_show}
                            >
                                <BigPlayButton position="center"/>
                            </Player>    
                        </div>

                        <div className="contenu_accueil w3-col l12">

                            <div className="w3-col l6 blue">
                                <div className="w3-container">
                                    <img className="img_contenu_accueil w3-col l12 m12 w3-round-large" alt="image de la réouverture" src={img_ouverture}/>
                                </div>

                                <div className="w3-container">
                                    <img className="img_contenu_accueil w3-col l12 m12 w3-round-large" alt="image intérieur du restaurant" src={img_restaurant_int}/>
                                </div>
                            </div>

                            <div className="w3-col l6 red">
                                <div className="w3-container">
                                    <img className="img_contenu_accueil w3-col l12 m12 w3-round-large" alt="image des boissons" src={img_bar}/>
                                </div>

                                <div className="w3-container">
                                    <img className="img_contenu_accueil w3-col l12 m12 w3-round-large" alt="extérieur du restaurant" src={img_restaurant}/>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Accueil