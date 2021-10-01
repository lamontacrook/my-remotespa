//Text.js

import React from 'react';

function Text() {
    
    return (
        <div>
            <p>{process.env.REACT_APP_PUBLIC_URI}</p>
            <p>Hello World!</p>
        </div>
    );
}

export default Text;