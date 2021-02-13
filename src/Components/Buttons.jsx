import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Button extends React.Component{
    render(){
        return(
                <button type="button" 
                    className={this.props.isSelected ? "btn btn-primary" : "btn btn-light"}
                    onClick={this.props.onClick}>
                    {this.props.children}</button>
            
        )
    }
}
export default Button;