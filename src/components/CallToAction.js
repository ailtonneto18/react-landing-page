import React from 'react'
import "./CallToAction.css"
import { FiCode } from 'react-icons/fi'

function CallToAction() {
    return (
        <div className="cta-bg">
            <div className="overlay"></div>
            <div className="container">
                <div className="cta-text">
                    <FiCode className="FiCode" />
                    <h2>Como Funciona</h2>
                    <p>As aulas são divididas em: individuais, teóricas e de apoio.</p>
                    <p><strong>Aulas individuais:</strong> tem duração média de 45 minutos e são ministradas por coaches da minha equipe, através do skype. Agendadas de acordo com a disponibilidade do aluno.</p>
                    <p><strong>Aulas teóricas:</strong> fornecidas em vídeo e servem para otimizar o tempo de aula. A duração de cada vídeo varia entre 11 a 22 minutos e abrange, de forma objetiva, a teoria necessária para você melhorar no LoL e subir de Elo.</p>
                    <p><strong>Aulas de apoio:</strong>aulas em grupo, em horários fixos, ministradas semanalmente para os alunos tirarem dúvidas. A duração é de 30 minutos e são ministradas por mim,</p>
                    <p><strong>Valores:</strong></p>
                    <p>As aulas são oferecidas em pacotes promocionais</p>
                    <p><strong>Pacote Simples:</strong> 3 aulas individuais +
                    3 videos teóricos +
                    aulas de apoio
                    por R$230,00
                    </p>
                    <p><strong>Pacote Completo:</strong> 6 aulas individuais+
                    8 videos teóricos +
                    aulas de apoio +
                    <strong>garantia de subir uma divisão</strong>
                    por R$460,00</p>
                    
                </div>
            </div>
        </div>
    )
}

export default CallToAction
