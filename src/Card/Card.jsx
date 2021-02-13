import React from 'react';
import './Card.css'
class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: "./image/image.png"
        }
    }
    componentDidMount() {
        fetch(`https://raw.githubusercontent.com/konexio/digitous-assest/main/bakery/${this.props.itemName}.png`)
        .then(response => response.blob())
        .then(response => {
            this.setState(
                {
                    image: URL.createObjectURL(response)
                }
            )
        })
    }
    render() {
        return (
            <div>
                <img
                    className="bakeryImage"
                    onClick={() => {
                        this.props.onClick(this.props.itemName, this.props.price);
                    }}
                    src={this.state.image}
                    alt="patisserie"
                />
            </div>
        )
    }
}
export default Card;