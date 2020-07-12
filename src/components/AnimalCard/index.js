import React from "react";
import "./style.css";

class FriendCard extends React.Component {

    clickOnAnimal = () => {
        this.props.handleOnClick(this.props.id)
    };

    render() {
        return (
            <div className="card">
                <div className="img-container" id={this.props.id}>
                    <img alt={this.props.name} src={this.props.image} onClick={this.clickOnAnimal}/>
                </div>
            </div>
        );
    }
}

export default FriendCard;