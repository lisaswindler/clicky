import React, { Component } from "react";
import AnimalCard from "./components/AnimalCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
// import Nav from "./components/Nav";
import animals from "./animals.json";

class App extends Component {
    state = {
        animals,
        correctGuesses: 0,
        bestScore: 0,
        clickMessage: "Click away! But don't click on the same animal twice."
    };

    clickOnAnimal = id => {
        console.log("clicked");
        this.shuffleAnimals();
    };

    shuffleAnimals = () => {
        let cards = this.state.animals;
        for (let i = 0; i < cards.length - 1; i++) {
            const j = i + Math.floor(Math.random() * (cards.length - i));

            const temp = cards[j];
            cards[j] = cards[i];
            cards[i] = temp;
        }
        this.setState({ matches: cards });
    };

    // Map over this.state.friends and render a FriendCard component for each friend object
    render() {
        return (
            <Wrapper>
                <>
                    <nav className="navbar">
                        <div className="container-fluid">
                            <p className="navbar-text">
                                Score: {this.props.score} | Top Score: {this.props.topScore}
                            </p>
                        </div>
                    </nav>
                </>
                <Title>Wild & Clicky</Title>
                {this.state.animals.map(animal => (
                    <AnimalCard
                        clickOnAnimal={this.clickOnAnimal}
                        id={animal.id}
                        key={animal.id}
                        name={animal.name}
                        image={animal.image}
                    />
                ))}
            </Wrapper>
        );
    }
}

export default App;
