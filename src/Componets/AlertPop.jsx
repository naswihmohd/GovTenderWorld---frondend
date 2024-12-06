import React from 'react'

function AlertPop({isOpen, close, message}) {
    if (!isOpen) return null;
  return (
    <div>
      <div className="modal modal-open">
            <div className="modal-box">
                <h3 className="text-lg font-bold">Hello!</h3>
                <p className="py-4">{message}</p>
                <div className="modal-action">
                    <button onClick={close} className="btn btn-primary px-6">OK</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AlertPop
