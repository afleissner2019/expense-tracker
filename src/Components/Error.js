import React from 'react'

function Error({type, text}) {
    return (
        <div className = {`error error-${type}`}> {text}
            
        </div>
    )
}

export default Error
