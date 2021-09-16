import React from 'react'

import '../css/presentation.css'
import img_sandwich_cuisine from '../images/IMG-20210607-WA0004.jpg'
import img_convivial from '../images/IMG-20210607-WA0013.jpg'
import img_salle from '../images/IMG-20210322-WA0028.jpg'

function Presentation(){
    document.title = "A propos de Nous | 7ArtCafe"
    return(
        <div className="pres">
            <div className="pres-cont-titre">
                <h1 className="pres-titre">7 ART CAFE OU L'ART DE VOUS SATISFAIRE</h1>
            </div>
            <div className="pres-body w3-container">

                <div className="cont-desc-img w3-container w3-round-xxlarge">

                    {/* Version mobile */}
                    <div className="w3-col w3-round-xxlarge w3-hide-large">
                        <img className="w3-col l11 w3-round-xxlarge" src={img_sandwich_cuisine}/>
                    </div>
                    {/* Fin mobile */}

                    <div className="desc-img w3-col l6 m12">
                        <p className="desc">Pour la première fois à Paris, 7 Art Cafe vous propose un concept où vous pourrez déguster une variété de plats préparés par notre Chef qui vous offrira la meilleure expérience culinaire.</p>
                    </div>
                    <div className="w3-col l6 m12 w3-hide-medium w3-hide-small">
                        <img className="w3-col w3-circle" src={img_sandwich_cuisine}/>
                    </div>
                </div>

                <hr/>
                <p className="desc">Fidèle à notre devise de manger sainement, 7 Art Café vous sert des aliments frais, finement choisis et de la plus haute qualité.</p>
                <hr/>
                <p className="desc">L'ensemble de notre personnel s'engage à ne servir que des produits finement choisit. Avec une grande variété d'éléments au menu, il y aura certainement quelque chose qui comblera vos envies.  Tel est notre défi!</p>
                <hr/>

                <div className="cont-desc-img w3-container w3-round-xxlarge">

                    {/* Version Mobile */}
                    <div className="w3-col w3-round-xxlarge w3-hide-large">
                        <img className="w3-col w3-round-xxlarge" src={img_convivial}/>
                    </div>
                    {/* Fin mobile */}

                    <div className="w3-col l6 m12 w3-hide-small w3-hide-medium">
                        <img className="w3-col w3-circle" src={img_convivial}/>
                    </div>
                    <div className="desc-img-2 w3-col l6 m12">
                        <p className="desc">Nous proposons une excellente cuisine à un excellent rapport qualité-prix, dans un restaurant de quartier adapté à la communauté où nos clients sont vraiment valorisés, appréciés et se sentent chez eux.</p>
                    </div>
                </div>

                <hr/>
                <p className="desc">Nous vous proposons une grande variété de plats, chacun créé à la perfection que vous pouvez déguster avec votre famille et vos amis dans un environnement paisible et convivial.</p>
                <hr/>

                <div className="cont-desc-img w3-container w3-round-xxlarge">
                    
                    {/* Version mobile */}
                    <div className="w3-col w3-round-xxlarge w3-hide-large">
                        <img className="w3-col w3-round-xxlarge" src={img_salle}/>
                    </div>
                    {/* Fin mobile */}

                    <div className="desc-img-3 w3-col l6 m12">
                        <p className="desc">Nous sommes établis pour répondre aux besoins d'un lieu où la qualité rime avec cohérence en termes de nourriture et de services, et d’un lieu où vous pouvez vous rencontrer, vous détendre et passer un bon moment ensemble.</p>
                    </div>

                    <div className="w3-col l6 m12 w3-hide-medium w3-hide-small">
                        <img className="w3-col w3-circle" src={img_salle}/>
                    </div>
                    {/* <div className="w3-col l6 m12 w3-circle w3-dark-grey w3-hide-medium w3-hide-small">
                        <img className="w3-col l11 w3-circle" src={img_salle}/>
                    </div> */}
                </div>

                <hr/>
                <p className="desc">Nous avons anticipé les besoins de nos clients, avec un service engagé et attentif. Avec une meilleure nourriture et des spectacles dans la ville créant des souvenirs pour la vie.</p>
                <hr/>

            </div>
        </div>
    )
}

export default Presentation