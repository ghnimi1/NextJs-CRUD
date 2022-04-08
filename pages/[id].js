import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getData, patchData } from '../utils/fetchData';

function EditPos() {
    const router = useRouter()
    const { id } = router.query
    const [data, setData] = useState({})
    const [title, setTitle] = useState(data?.title)
    const [desc, setDescription] = useState(data?.desc)
    useEffect(() => {
        const fetchData = async () => {
            const res = await getData(`posts/${id}`)
            setData(res)
        }
        fetchData()
    }, [id])
    const handleSubmit = async () => {
        try {
            await patchData(`posts/${id}`, { title, desc })
            router.push('/')
        } catch (error) {
            setErrors(error.response.data);
        }
    }
    return (
        <div className='container'>
            <div className="mb-3">
                <label className="form-label">Title</label>
                <input type="text" className="form-control"
                    placeholder="Enter Title"
                    defaultValue={data?.title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Description</label>
                <input type="text" className="form-control"
                    placeholder='Enter Description'
                    defaultValue={data?.desc}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <button
                onClick={() => handleSubmit()}
                className="btn btn-primary mb-3">Confirm</button>
        </div>
    );
}

export default EditPos;