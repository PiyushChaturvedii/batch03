import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent{
    
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[PersonS.js] getDerivedStateFromProps')
    //     return state;
    // }
    
//     componentWillReceiveProps(props) {
//         console.log('[PersonS.js] willComponentUpdate');
    
// }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[PersonS.js] shouldComponentUpdate');
    //     if (
    //         nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.changed

    //     ) {
    //         return true;
    //     }else{
    //         return false;
    //     }
    //     // return true;
    // }
    
    getSnapshotBeforeUpdate(prevProps, prevState) {
        // console.log('[PersonS.js] getSnapShotBeforeUpdate');
        return {message: 'SnapShot!!'};
    }    
    



    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log('[PersonS.js] componentDidUpdate');
        // console.log(snapshot)
        
    }

    componentWillUnmount(){
    // console.log('[PeronS.js] componentWillUnmount');
    }
    render() {
        console.log('[Persons.js] rendering...')
        return this.props.persons.map((person, index) => {
        
            return (
                <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.props.changed(event, person.id)}
                />
            );
        });
    }
}

    


export default Persons;