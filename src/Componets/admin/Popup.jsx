


function ConfirmPopup({ isOpen, onConfirm, onCancel, message }) {
    if (!isOpen) return null;

    return (
        <div className="modal modal-open">
            <div className="modal-box">
                <h3 className="text-lg font-bold">Hello!</h3>
                <p className="py-4">{message}</p>
                <div className="modal-action">
                    <button onClick={onCancel} className="btn btn-ghost">Cancel</button>
                    <button onClick={onConfirm} className="btn btn-primary">Confirm</button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmPopup