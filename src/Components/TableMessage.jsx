import React from 'react'

function TableMessage({ message }) {
  return (
    <div className="table-row-message">
        <p className="note-no">{message}</p>
    </div>
  )
}

export default TableMessage
