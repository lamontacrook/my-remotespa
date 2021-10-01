import React from 'react';

function Text() {
    
    return (
        <div>
            <p>{process.env.REACT_APP_PUBLIC_URI}</p>
            <p>hello world</p>
        </div>
    );
}

export default Text;