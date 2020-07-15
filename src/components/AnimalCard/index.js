import React from "react";
import "./style.css";

class FriendCard extends React.Component {

    animalOnClick = () => {
        this.props.handleOnClick(this.props.id)
     };

    render() {
        return (
            <div className="card hvr-grow">
                <div className="img-container" onClick={this.animalOnClick} id={this.props.name}>
                    <img alt={this.props.name} src={this.props.image}/>
                </div>
            </div>
        );
    }
}

export default FriendCard;