const React = require('react');

class New extends React.Component {
    render(){
        return (
            <>
            <h1>Create a New Log</h1>
            <nav>
                <a href="/logs">Return Home</a>
            </nav><br></br>
            <form method="POST" action="/logs">
                Title: <input type="text" name="title" placeholder='Title here'></input><br/>
                Entry: <input type="textarea" name="entry" placeholder='Your Entry Here'></input><br/>
                Is Ship Broken: <input type="checkbox" name="shipIsBroken"></input><br/>
                <input type="submit" value="Submit Log"></input>
            </form>
            </>
        )
    }
}

module.exports = New