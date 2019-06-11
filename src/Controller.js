import React from "react";
import html2canvas from "html2canvas";
import saveAs from "file-saver";
import ReactTooltip from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCamera, faBirthdayCake, faBuilding, faMinus} from '@fortawesome/free-solid-svg-icons';


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

        <ReactTooltip id='toggle' type='dark' effect='solid'>
            <span>Trocar de template</span>
        </ReactTooltip>

        
        

        <button className="save-photo btn btn-print" data-tip data-for="print" onClick={
                () => {
                    window.scrollTo(0,0);  
                    const element = document.querySelector("#aplicacao");
                    html2canvas(element, 
                        {
                            letterRendering: 1,
                            allowTaint: true
                        }
                        ).then(
                    canvas => { 
                        
                        canvas.toBlob(function(blob) {
                            saveAs(blob, "pretty image.png");
                        });
                    }
                );
            }
        }>{iconePrint}
        </button>
        <button className="save-photo btn btn-toggle" data-tip data-for="toggle" onClick={handleToggle}>
            {toggle ? iconBdCake : iconBuilding}
        </button>


        <button className="card-list-button btn btn-add" data-tip data-for="adicionar" onClick={onAddCard}>{iconeAdicionar}</button> 
        <button className="card-list-button btn btn-remove" data-tip data-for="remover" onClick={onRemoveCard}>{iconMinus}</button>
    </div>

)

export default Controller;