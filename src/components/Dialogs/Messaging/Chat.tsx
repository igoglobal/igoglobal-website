import React, { useEffect, useState } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";

import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

function ChatDialog() {
    const location = useLocation();
    const islandingPage = location.pathname === '/landing-page/wealth-conference'

    const [visibility, setVisibility] = useState(true); // Show the dialog on page load
    const navigate = useNavigate();

    useEffect(() => {
        setVisibility(true);
    }, [])

    // Handle "Yes" button click to navigate to the chat section
    const onHandleYes = () => {
        setVisibility(false);
        navigate('/chat');
    };

    const onHandleCancel = () => {
        setVisibility(false);
    };

    return (
        <div>
            <Outlet />
            {!islandingPage && (
                <Dialog 
                    header="Confirm"
                    visible={visibility} 
                    modal={true}
                    style={{backgroundColor: "white", padding: ".1rem 2rem", opacity: ".6"}}
                    onHide={() => setVisibility(false)}
                    footer={() => (
                        <div style={{display: "flex", justifyContent: "space-between", color: "white"}}>
                            <Button 
                                label="No" 
                                icon="pi pi-times" 
                                onClick={onHandleCancel}
                                className="p-button-success"
                            />
                            <Button 
                                label="Yes" 
                                icon="pi pi-check" 
                                onClick={onHandleYes} 
                                autoFocus
                            />
                        </div>
                    )}
                > 
                <p> Would you like to visit igoBot</p>
                </Dialog>                
            )}
        </div>
    );
}

export default ChatDialog;
