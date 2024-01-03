import React from 'react'
import { Placeholder } from 'react-bootstrap'

const Loader = () => {
    return (
        <>
            <div className='m-0 p-0'>
                <Placeholder as="p" animation="glow">
                    <Placeholder xs={12} bg="primary" />
                </Placeholder>
            </div>
        </>
    )
}

export default Loader