import React, { Component } from "react";
import AnimalCard from "./components/AnimalCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import animals from "./animals.json";

class App extends Component {
    state = {
        animals,
        correctClicks: 0,
        bestScore: 0,
        navMessage: "Click away! But don't click on the same animal twice."
    };

    animalClick = async id => {
        var clickedCard = this.state.animals.filter(animal => animal.id === id);
        if(clickedCard[0].clicked) {
          this.setState({
            correctClicks: 0,
            navMessage:"Oops! Better start over...",
          });
          this.resetCards();
        } else if(this.state.correctClicks < 11) {
          clickedCard[0].clicked = true;
          // increment the scores
          this.setState({correctClicks: this.state.correctClicks + 1}, () => {
            if (this.state.correctClicks > this.state.bestScore){
              this.setState({ bestScore: this.state.correctClicks });
            }
          });
          this.setState({navMessage: "So far so good!" });
          this.shuffleCards();
        } else {
          clickedCard[0].clicked = true;
          // set counters
          this.state.correctClicks = 0;
          this.state.navMessage = "Great job! Your memory is AMAZING!";
          this.setState({ bestScore: 12 });
          this.resetCards();
        }
      };
    
      shuffleCards = () => {
        let cards = this.state.animals;
        for (let i = 0; i < cards.length - 1; i++) {
          const j = i + Math.floor(Math.random() * (cards.length - i));
          const temp = cards[j];
          cards[j] = cards[i];
          cards[i] = temp;
        }
        this.setState({animals: cards});
      };
    
      resetCards = () => {
        for (let i = 0; i < this.state.animals.length ; i++){
        // Mark all as clicked: false
          animals[i].clicked = false;
          this.setState({
            correctClicks: 0,
            animals: animals
          });
          this.shuffleCards();
        }
      };

    render() {
        return (
            <Wrapper>
                <nav className="navbar">
                    <div className="container-fluid">
                        <div className="navbar-text">
                            <p className="mb-0">{this.state.navMessage}</p>
                            Score: {this.state.correctClicks} | Your Top Score: {this.state.bestScore}
                        </div>
                    </div>
                </nav>
                <Title>Wild & Clicky</Title>   
              {this.state.animals.map((animals, index) => {
                return <AnimalCard
                    key={index}
                    id={animals.id}
                    name={animals.name}
                    image={animals.image}
                    handleOnClick={this.animalClick}
                />
              })}
           
            </Wrapper>
        );
    }
}

export default App;
