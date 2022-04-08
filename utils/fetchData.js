import axios from "axios"

const baseUrl = process.env.CLIENT_URL

export const getData = async (url) => {
    const res = await axios.get(`${baseUrl}/api/${url}`)
    const data = await res.data
    return data
}

export const postData = async (url, body) => {
    const res = await axios.post(`${baseUrl}/api/${url}`, body, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const data = await res.data
    return data
}

export const patchData = async (url, body) => {
    const res = await axios.patch(`${baseUrl}/api/${url}`, body, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const data = await res.data
    return data
}

export const deleteData = async (url) => {
    const res = await axios.delete(`${baseUrl}/api/${url}`)
    const data = await res.data
    return data
}