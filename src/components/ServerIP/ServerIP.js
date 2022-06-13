import { useState } from "react";
import { Navbar, Badge, Fade, Button } from "react-bootstrap";

function ServerIP() {
    const server_ip = "ChrisGaymerBar.aternos.me";

    const [hasCopied, setCopy] = useState(false);

    const copyToClipboard = async () => {
        setCopy(true);
        navigator.clipboard.writeText(server_ip);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setCopy(false);
    };

    return (
        <div className="d-inline-flex">
            <Navbar.Text
                as={Button}
                className={`no-caps clickable fs-5 font-monospace ${hasCopied ? "bg-info" : "bg-light"} bg-gradient border border-dark px-4 rounded-pill user-select-none`}
                onClick={copyToClipboard}
                aria-controls="copy-alert"
                aria-expanded={hasCopied}
            >
                {server_ip}
            </Navbar.Text>
            <Fade in={hasCopied}>
                <Badge id="copy-alert" pill bg="info" text="dark" transition="fade" className="no-bold ms-3 my-auto h-auto fs-6 border-dark border-2">Copied !</Badge>
            </Fade>
        </div >
    );
}

export default ServerIP;