import React, { useState } from 'react';

function Input({ handleSubmit, errors }) {
    const [title, setTitle] = useState('')
    const [desc, setDescription] = useState('')
    return (
        <div>
            <div className="mb-3">
                <label className="form-label">Title</label>
                <input type="text" className="form-control"
                    placeholder="Enter Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                {errors?.title && <div className="alert alert-danger" role="alert">
                    {errors?.title}
                </div>}
            </div>
            <div className="mb-3">
                <label className="form-label">Description</label>
                <input type="text" className="form-control"
                    placeholder='Enter Description'
                    value={desc}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                {errors?.desc && <div className="alert alert-danger" role="alert">
                    {errors?.desc}
                </div>}
            </div>
            <button
                onClick={() => {
                    handleSubmit(title, desc)
                    setTitle('')
                    setDescription('')
                }}
                className="btn btn-primary mb-3">Confirm</button>
        </div>
    );
}

export default Input;