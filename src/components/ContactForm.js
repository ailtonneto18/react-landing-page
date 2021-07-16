import emailjs from "emailjs-com";
import React from 'react';
import "./ContactForm.css"

export default function ContactForm() {


    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gmailMenssage', 'template_ofdr06j', e.target, 'user_i7CGhoKOVMYzcVDKmDVP8')

        .then((result) => {
            alert("Escrição enviada com sucesso! 👍");
           
        }, (error) => {
            alert(error.message)
            
        });
        e.target.reset()

 
    }
    return(
        <div>
            <div  className="container">
            <h2>Contato</h2>
            <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        
                        <div className="col-lg-8 col-sm-12 form-group mx-auto">
                            <label>Nome</label>
                            <input type="text" autoFocus className="form-control" required placeholder="Nome" name="name"/>
                        </div>
                        <div className="col-lg-8 col-sm-12 form-group pt-1 mx-auto">
                        <label>Email</label>
                            <input type="email" className="form-control" required placeholder="Seu email" name="email"/>
                        </div>

                        
                        <div className="col-lg-8 col-sm-12 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Enviar escrição"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}