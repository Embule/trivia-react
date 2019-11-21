import React, { Component } from 'react'
import * as audio from '../audio';  

export default class Start extends Component {
    state = { name: '' }
    handleNameChange = (e) => {
        this.setState({ name: e.target.value })
    }
    handleCreateClick = e => {
        audio.stop("start");
        e.preventDefault();
        if (this.state.name.trim() === '') {
            window.alert("Kerrothan nimesi ennenkuin aloitat pelin.");
            return;
        }
        this.props.history.push('/quiz', this.state.name)
        //nimi highscoreen mutta skippaa pelin läpi

        console.log('Lets go, ' + this.state.name + '!')
    }
    componentDidMount() {
    audio.play("start");
    }

    render() {
        return (
            <div className="container">
                <form>
                    <h1>Lämpimät onnittelut Academyyn pääsyn johdosta! </h1>
                    <p>Tee esi-esitesti ennen koulutuksen alkua. Tee testi niin monta kertaa, että saat kaikki oikein. Lisää alla olevaan laatikkoon nimesi aloittaaksesi testin.</p>
                    <input className="nameinput" type='text' placeholder='Nimi' id='name' autoComplete="off" onChange={this.handleNameChange} required='required' /><br />
                    <input id="startbutton" type='submit' value='Aloita' onClick={this.handleCreateClick} />
                    <p><i>Muistathan poistaa node_modules-kansion ennen kuin aloitat pelin.</i></p>
                </form>
            </div>
        )
    }
}
