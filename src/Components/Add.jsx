import React from 'react';

class Add extends React.Component{
    constructor(props) {
    super(props);
        this.state = {
            productName : "",
            price : "1",
        }
        this.updatePrice = this.updatePrice.bind(this);
        this.updateProductName = this.updateProductName.bind(this);
    }
    updatePrice (event) {
        console.log("price :" )
        this.setState({
            price : event.target.value
        })
    }
    updateProductName (event) {
        console.log("Product :" )
        this.setState({
            productName : event.target.value
        })
    }
    onClick = () => {
        this.props.addItem(this.state.productName, this.state.price)
    }
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-6">
                        <input type="text" 
                                onChange = {this.updateProductName}
                                value = {this.state.productName}></input>
                        <button onClick = {this.onClick}>Add</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        {this.state.price} $
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <input type="range" min="1" max="10"
                        onChange = {this.updatePrice}
                        value = {this.state.price}
                        ></input>
                    </div>
                </div>
                
                
            </div>
        )
    }
}
export default Add;