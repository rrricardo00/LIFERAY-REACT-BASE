
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

export default function main({portletNamespace, contextPath, portletElementId, configuration}) {
    
    ReactDOM.render(
        <App/>, 
        document.getElementById(portletElementId)
    );
    
}