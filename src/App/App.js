import './App.css';

import wip from '../images/wip.png';

import { TopNavbar, Body } from '../components';
import { useEffect } from 'react';

function App() {
    useEffect(() => { document.title = "Server Status • Chris' Gaymer Bar" })

    return (
        <div className="App vh-100 position-relative">
            <TopNavbar />
            <Body>
                <h1 className="text-center mb-5">Welcome to Chris' Gaymer Bar !</h1>

                <h3 className="text-center">OI! Site's still work in progress, come back later. Majima Construction's got it !</h3>

                <img
                    src={wip}
                    width="500"
                    height="500"
                    alt="Majima Construction chibi by @Desuplex on Twitter"
                    title="Majima Construction chibi by @Desuplex on Twitter"
                    className="clickable mx-auto d-block"
                    onClick={() => { window.open("https://twitter.com/Desuplex/status/941126877338509313", "_blank"); }}
                />
            </Body>
        </div>
    );
}

export default App;
