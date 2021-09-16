import React from 'react'
import { Link } from 'react-router-dom';
import { Player, BigPlayButton, PosterImage } from 'video-react';
import ReactPlayer from 'react-player'

import '../css/shows.css'

import img_Gonso from '../images/nordine-ganso-1.png'
//import img_Gonso from '../images/Nordine_ganso2.png'
import img_Fodjet from '../images/fodj.jpg'
import img_Zack from '../images/Zack.jpg'
import logo_facebook from '../images/iconfinder_Rounded_Facebook_svg_5282541.svg'
import logo_insta from '../images/iconfinder_1_Instagram_colored_svg_1_5296765.svg'
import logo_youtube from '../images/iconfinder_1_Youtube_colored_svg_5296521.svg'

import poster_show from '../images/poster-sunday-shows.png'
import video_présentation from '../images/montage-shows.mp4'

function Shows(){
    document.title = "Nos divertissements | 7ArtCafe"
    return(
        <div className="show w3-col">
            <div className="show-head w3-container">
                <div className="container-shows w3-center w3-container w3-col l2">
                    <h2 className="titre-shows cont-blanc">Le Sunday Show</h2>
                    <hr/>
                    <h3 className="description cont-blanc">Tout les dimanches, des artistes viennent se représenter sur notre scène</h3>
                    <hr/>
                    <p className="description_date cont-blanc">Dimanche 04 juillet 2021</p>
                </div>
                <div className="container-shows w3-col l8">
                    <ReactPlayer
                        url="https://youtu.be/EzkEwL4aOmo"
                        controls={true}
                        width="w3-col"
                        height="500px"
                    />
                </div>
                {/* <div className="container-shows w3-col l8 w3-hide-medium w3-hide-large">
                    <Player
                        autoPlay={false}
                        fluide={false}
                        width="15"
                        src={video_présentation}
                        poster={poster_show}
                    >
                        <BigPlayButton position="center"/>
                    </Player>    
                </div> */}
                
                <div className="container-shows w3-center w3-container w3-col l2">
                    <h2 className="titre-shows cont-blanc">Les Artistes</h2>
                    <hr/>
                    <p className="description cont-blanc">Vous êtes un artiste et vous souhaitez vivre une aventure avec nous ?</p>
                    <hr/>
                    <Link to="/a_propos" className="w3-text-orange">Accédez à la fiche contact</Link>
                </div>
            </div>

            <div className="show-body description w3-container w3-padding w3-col l10 m12">
                
                <div className="w3-hide-small">
                    <div className="container-artistes w3-display-container w3-center w3-col l12 m12">
                        <img className="img-artistes w3-left w3-round-large w3-col l3 m4" alt="image de Nordine Ganso" src={img_Gonso}/>
                        <div className="w3-container w3-col l9 m8">
                            <h2 className="titre-artistes">NORDINE GANSO</h2>
                            <p>Nordine est un jeune humoriste montant.
                                Elu étudiant le plus drôle de l'année par le concours Campus Comedy Tour, Originaire de Bordeaux.
                            </p>
                        </div>
                        <div className="w3-container w3-gray w3-display-bottomright w3-col l9">
                            <div className="w3-third w3-right">
                                <div className="w3-container w3-third">
                                    <a href="https://www.instagram.com/nordine.ganso/?hl=fr" target="_blank">
                                        <img className="lien-logo w3-col l5 m7 s8" alt="logo instagram" src={logo_insta}/>
                                    </a>
                                </div>

                                <div className="w3-container w3-third">
                                    <a href="https://www.facebook.com/nordineganso3/" target="_blank">
                                        <img className="lien-logo w3-col l5 m7 s8" alt="logo facebook" src={logo_facebook}/>
                                    </a>
                                </div>

                                <div className="w3-container w3-third">
                                    <a href="https://www.youtube.com/channel/UCqej5wZ8JySbR6JGofCjS4A" target="_blank">
                                        <img className="lien-logo w3-col l5 m7 s8" alt="logo youtube" src={logo_youtube}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-artistes w3-display-container w3-center w3-col l12 m12">
                        <img className="img-artistes w3-left w3-round-large w3-col l3 m4" alt="image de Fodje Sissoko" src={img_Fodjet}/>
                        <div className="w3-container w3-col l9 m8">
                            <h2 className="titre-artistes">FODJE SISSOKO</h2>
                            <p>Fodjé est un humoriste qui se démarque par son style décontracté.
                                Il a notamment joué dans le film "Les Misérables"
                            </p>
                        </div>
                        <div className="w3-container w3-gray w3-display-bottomright w3-right w3-col l9">
                        <div className="w3-third w3-right">
                                <div className="w3-container w3-third">
                                    <a href="https://www.instagram.com/fodjesissoko/?hl=fr" target="_blank">
                                        <img className="lien-logo w3-col l5 m7 s8" alt="logo instagram" src={logo_insta}/>
                                    </a>
                                </div>

                                <div className="w3-container w3-third">
                                    <a href="https://fr-fr.facebook.com/fodjesisso/" target="_blank">
                                        <img className="lien-logo w3-col l5 m7 s8" alt="logo facebook" src={logo_facebook}/>
                                    </a>
                                </div>

                                <div className="w3-container w3-third">
                                    <a href="https://www.youtube.com/channel/UCHt1T2c33s5Lh7kxIp6OIqg" target="_blank">
                                        <img className="lien-logo w3-col l5 m7 s8" alt="logo youtube" src={logo_youtube}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-artistes w3-display-container w3-center w3-col l12 m12">

                        <img className="img-artistes w3-left w3-round-large w3-col l3 m4" alt="image de Zack Origami" src={img_Zack}/>
                        <div className="w3-container w3-col l9 m8">
                            <h2 className="titre-artistes">ZACK ORIGAMI</h2>
                            <p>Zack est humoriste...
                            </p>
                        </div>

                        <div className="w3-container w3-gray w3-display-bottomright w3-right w3-col l9">
                            <div className="w3-third w3-right">

                                <div className="w3-container w3-third">
                                </div>

                                <div className="w3-container w3-third">
                                    <a href="https://www.instagram.com/zackorigami/" target="_blank">
                                        <img className="lien-logo w3-col l5 m7 s2" alt="logo instagram" src={logo_insta}/>
                                    </a>
                                </div>

                                <div className="w3-container w3-third">
                                    <a href="https://www.facebook.com/ZackOrigami/" target="_blank">
                                        <img className="lien-logo w3-col l5 m7 s2" alt="logo facebook" src={logo_facebook}/>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Version mobile - affichage des artistes */}
                <div className="w3-hide-medium w3-hide-large">
                    <div className="container-artistes w3-display-container w3-center w3-col">
                        <img className="img-artistes w3-left w3-round-large w3-col" alt="image de Nordine Ganso" src={img_Gonso}/>
                        <div className="w3-container w3-col">
                            <h2 className="titre-artistes">NORDINE GANSO</h2>
                            <p>Nordine est un jeune humoriste montant.
                                Elu étudiant le plus drôle de l'année par le concours Campus Comedy Tour, Originaire de Bordeaux.
                            </p>
                        </div>
                        <div className="w3-container w3-gray w3-display-bottomright w3-col s12">
                            <div className="w3-container w3-col s4">
                                <a href="https://www.instagram.com/nordine.ganso/?hl=fr" target="_blank">
                                    <img className="lien-logo w3-col l5 m7 s8" alt="logo instagram" src={logo_insta}/>
                                </a>
                            </div>

                            <div className="w3-container w3-col s4">
                                <a href="https://www.facebook.com/nordineganso3/" target="_blank">
                                    <img className="lien-logo w3-col l5 m7 s8" alt="logo facebook" src={logo_facebook}/>
                                </a>
                            </div>

                            <div className="w3-container w3-col s4">
                                <a href="https://www.youtube.com/channel/UCqej5wZ8JySbR6JGofCjS4A" target="_blank">
                                    <img className="lien-logo w3-col l5 m7 s8" alt="logo youtube" src={logo_youtube}/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="container-artistes w3-display-container w3-center w3-col l12 m12">
                        <img className="img-artistes w3-left w3-round-large w3-col l3 m4" alt="image de Fodje Sissoko" src={img_Fodjet}/>
                        <div className="w3-container w3-col l9 m8">
                            <h2 className="titre-artistes">FODJE SISSOKO</h2>
                            <p>Fodjé est un humoriste qui se démarque par son style décontracté.
                                Il a notamment joué dans le film "Les Misérables"
                            </p>
                        </div>
                        <div className="w3-container w3-gray w3-display-bottomright w3-right w3-col l9">
                        <div className="w3-container w3-gray w3-display-bottomright w3-col s12">
                                <div className="w3-container w3-col s4">
                                    <a href="https://www.instagram.com/fodjesissoko/?hl=fr" target="_blank">
                                        <img className="lien-logo w3-col l5 m7 s8" alt="logo instagram" src={logo_insta}/>
                                    </a>
                                </div>

                                <div className="w3-container w3-col s4">
                                    <a href="https://fr-fr.facebook.com/fodjesisso/" target="_blank">
                                        <img className="lien-logo w3-col l5 m7 s8" alt="logo facebook" src={logo_facebook}/>
                                    </a>
                                </div>

                                <div className="w3-container w3-col s4">
                                    <a href="https://www.youtube.com/channel/UCHt1T2c33s5Lh7kxIp6OIqg" target="_blank">
                                        <img className="lien-logo w3-col l5 m7 s8" alt="logo youtube" src={logo_youtube}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-artistes w3-display-container w3-center w3-col l12 m12">

                        <img className="img-artistes w3-left w3-round-large w3-col l3 m4" alt="image de Zack Origami" src={img_Zack}/>
                        <div className="w3-container w3-col l9 m8">
                            <h2 className="titre-artistes">ZACK ORIGAMI</h2>
                            <p>Zack est humoriste...
                            </p>
                        </div>

                        <div className="w3-container w3-gray w3-display-bottomright w3-right w3-col">
                            <div className="w3-container w3-gray w3-display-bottomright w3-col ">

                                <div className="w3-container w3-col s2">
                                </div>

                                <div className="w3-container w3-col s4">
                                    <a href="https://www.instagram.com/zackorigami/" target="_blank">
                                        <img className="lien-logo w3-col l5 m7 s8" alt="logo instagram" src={logo_insta}/>
                                    </a>
                                </div>

                                <div className="w3-container w3-col s4">
                                    <a href="https://www.facebook.com/ZackOrigami/" target="_blank">
                                        <img className="lien-logo w3-col l5 m7 s8" alt="logo facebook" src={logo_facebook}/>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <p className="description"></p>
            </div>
        </div>
    )
}

export default Shows