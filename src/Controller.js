import React from "react";
import html2canvas from "html2canvas";
import saveAs from "file-saver";
import ReactTooltip from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCamera, faBirthdayCake, faBuilding, faMinus, faUserInjured} from '@fortawesome/free-solid-svg-icons';

const iconeAdicionar = <FontAwesomeIcon icon={faPlus} size='2x' />
const iconePrint = <FontAwesomeIcon icon={faCamera} size='2x'/>
const iconBdCake = <FontAwesomeIcon icon={faBirthdayCake} size='2x' />
const iconBuilding = <FontAwesomeIcon icon={faBuilding} size='2x' />
const iconMinus = <FontAwesomeIcon icon={faMinus} size='2x' />

const Controller = ({onAddCard, handleToggle, toggle, onRemoveCard}) => (
    <div className="botoes">
        <ReactTooltip id='adicionar' type='info' effect='solid'>
            <span>Adicionar Carta</span>
        </ReactTooltip>

        <ReactTooltip id='remover' type='error' effect='solid'>
            <span>Remover Carta</span>
        </ReactTooltip>
        <ReactTooltip id='print' type='success' effect='solid'>
            <span>Salvar como Imagem</span>
        </ReactTooltip>

        <ReactTooltip id='building' type='dark' effect='solid'>
            <span> Template - Bem-vindo</span>
        </ReactTooltip>

        <ReactTooltip id='cake' effect='solid'>
            <span> Template - Aniversario</span>
        </ReactTooltip>

        
        

        <button className="save-photo btn btn-print" data-tip data-for="print" onClick={
                () => {
                    window.scrollTo(0,0);  
                    var value = "";
                    console.info(value);
                    const element = document.querySelector("#application");
                    console.info(element)
                    html2canvas(element, 
                        {
                            letterRendering: 1,
                            allowTaint: true
                        }
                        ).then(
                    canvas => { 
                        
                        canvas.toBlob(function(blob) {
                            saveAs(blob, "template.png");
                        });
                    }
                );
            }
        }>{iconePrint}
        </button>
        <button className="save-photo btn btn-building" data-tip data-for="building" onClick={
            () => handleToggle(1)
            }>
            {iconBuilding}
        </button>

        <button className="save-photo btn btn-cake" data-tip data-for="cake" onClick={() => handleToggle(2)}>
            {iconBdCake}
        </button>
        <button className="card-list-button btn btn-add" data-tip data-for="adicionar" onClick={onAddCard}>{iconeAdicionar}</button> 
        <button className="card-list-button btn btn-remove" data-tip data-for="remover" onClick={onRemoveCard}>{iconMinus}</button>
    </div>

)

export default Controller;