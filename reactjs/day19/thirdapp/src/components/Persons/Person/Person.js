import React, {Component} from "react";
import classes from './Person.module.css';
import Aux from '../../../hoc/Auxx';
import withClass from "../../../hoc/withClass";
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context'
class Person extends Component{
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount(){
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
    // console.log('[Person.js] rendering...')
        return( 
            <Aux>
                {/* <AuthContext.Consumer>
                    {(context)=>context.authenticated?<p>Authenicated!</p>:<p>Please log in</p>}
                </AuthContext.Consumer> */}
                    
                {this.context.authenticated ? <p>Authenicated!</p> : <p>Please log in</p>}

                    {/* {this.props.isAuth ? <p>Authenticated Passed!</p> : <p>Please Log in</p>}    */}
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