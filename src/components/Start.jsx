import React, { Component } from 'react'

export default class Start extends Component {
    state = { name: '' }
    handleNameChange = (e) => {
        this.setState({ name: e.target.value })
    }
    handleCreateClick = e => {
        e.preventDefault();
        if (this.state.name.trim() === '') {
            window.alert("Kerrothan nimesi ennenkuin aloitat pelin.");
            return;
        }
        this.props.history.push('/quiz', this.state.name )
        //nimi highscoreen mutta skippaa pelin läpi
        // this.props.history.push('/highscore', this.state.name)
        console.log('Lets go, ' + this.state.name + '!')
    }
    render() {
        return (
            <div>
                <form>
                    <h1>Pelataanko peliä?</h1>
                    <label htmlFor='name'>Mikä on nimesi?</label><br />
                    <input type='text' placeholder='Nimi' id='name' autoComplete="off" onChange={this.handleNameChange} required='required' /><br />
                    <input type='submit' value='Aloita peli' onClick={this.handleCreateClick} />
                </form>
            </div>
        )
    }
}
