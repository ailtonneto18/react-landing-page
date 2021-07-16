import React from 'react'
import "./Banner.css"

let bannerData = {
    title: "COACH DE LEAGUE OF LEGENDS",
    desc: "Olá, aqui é o Ailton. Queria me apresentar antes de falar sobre o meu treinamento. Sou um jogador, assim como você. Não sou nada extraordinário. Jogo diariamente. Às vezes diversas partidas, outras uma ou duas. Mas decidi que queria ser bom nesse jogo."
}

function Banner() {
    return (
        <div className="banner-bg">
            <div className="container">
                <div className="banner-con">
                    <div className="banner-text">
                        <h1>{bannerData.title}</h1>
                        <p>
                            {bannerData.desc}
                        </p>
                        <p>
                        Contratou e não gostou? pegue o seu dinheiro de volta!
                        </p>
                        <a href="#" className="banner-btn">Saiba Mais</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
