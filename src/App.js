import React from "react";
import uuid from "uuid/v1"; // gera hash a partir do timestamp

import Header from "./Header";
import CardList from "./CardList";
import Controller from "./Controller";

import generic from './images/ico.png';

class App extends React.Component {
    state = {
        items : [
            {id: uuid(), image: generic}
        ]
    }

    handleChange = (id, file) => {
        this.setState( prevState => {
            const newItems = prevState.items;
            const index = newItems.findIndex(card => card.id === id);
            if(file){
                newItems[index].image = URL.createObjectURL(file);
            }

            return {
                items : newItems
            };
        });
    }

    handleAddCard = () => {
        this.setState(
            prevState => {
                return{
                    items: prevState.items.concat({id: uuid(), image: generic})
                }
            }
        )
    }

    render() {
        return (
            <React.Fragment>
                <div className="container" id="aplicacao">
                    <div className="app">
                        <Header/>
                        <CardList cards={this.state.items} handleChange={this.handleChange}/>
                        {/* <Footer size={this.state.items.length}/> */}
                    </div>
                </div>
                <div className="container">
                    <Controller onAddCard={this.handleAddCard}/>
                </div>
            </React.Fragment>
        );
    }
}

export default App;