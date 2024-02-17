import { Spinner } from "react-bootstrap";

import React from 'react'

const Loaders = () => {
  return (
    <Spinner
    animation="border"
    role="status"
    style={{
        width: '100px',
        height: '100px',
        margin: 'auto',
        display: 'block',
    }}
    />
  )
}

export default Loaders