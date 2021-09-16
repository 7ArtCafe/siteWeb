import React from 'react'

//import '../css/a_propos.css'

class Contact extends React.Component{
    // CopyText = () => {
    //     var copyText = document.getElementById("copy");
    //     copyText.select();
    //     copyText.setSelectionRange(0, 99999)
    //     document.execCommand("copy");
    //     alert("Copied the text: " + copyText.value);
    // }

    render(){
        document.title = "Nous contacter | 7ArtCafe"
        return(
            <>
                <div className='corps_propos w3-container w3-center'>
                    <p>Vous êtes intérressez pour ouvrir une franchise 7 Art Café ?</p>
                    <hr/>
                    <p>Vous souhaitez participer au Sunday Shows ?</p>
                    <hr/>
                    <p>Contactez nous sur ce mail : <span><p id="copy">7artcafe7@gmail.com</p></span></p>
                </div>
            </>
        )
    }
}

export default Contact