import React, {Component} from "react";
import classes from './Person.module.css';
import Aux from '../../../hoc/Auxx';
import withClass from "../../../hoc/withClass";
import PropTypes from 'prop-types';

class Person extends Component{
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }
    componentDidMount(){
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render() {
    console.log('[Person.js] rendering...')
        return( 
        <Aux>
                
                  <p key='i1' onClick={this.props.click} >
                    I'm a {this.props.name} and I am {this.props.age} years old!
                </p>,
                
                <p key='i2'>{this.props.children}</p>,
            <input
                    key='i3'
                    // ref={(inputEl)=>{this.inputElement=inputEl}}
                    ref={this.inputElementRef}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                    />
                    
            </Aux>
        
            )

}
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}
export default withClass(Person,classes.Person);