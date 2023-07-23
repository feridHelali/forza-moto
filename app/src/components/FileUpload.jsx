
import { useState } from 'react'
import axios from 'axios'
import { useAlert } from './Alert/AlertContext'
import { AlertActions } from './Alert/alert.actions'
import { Box, FormLabel } from '@mui/material'
import './FileUpload.css'


// eslint-disable-next-line react/prop-types
function FileUpload({ id }) {
    const [preview, setPreview] = useState("")
    const [file, setFile] = useState({})
    const [readyToUpload, setReadyToUpload] = useState(false)

    // eslint-disable-next-line no-unused-vars
    const [_, dispatch] = useAlert()


    const handleChange = (e) => {

        setPreview(URL.createObjectURL(e.target.files[0]))
        setFile(e.target.files[0])
        setReadyToUpload(true)
    }

    const handleUpload = (id) => {
        const formData = new FormData();
        formData.append("cover", file);

        const config = {
            url: `http://localhost:3000/motor/upload/${id}`,
            method: 'PUT',
            headers: { "Content-Type": "multipart/form-data" },
            data: formData
        }

        axios(config).then(data => {
            console.log(data)
            dispatch(AlertActions.showSuccessAlert('Photo Uploaded Successfully'))
            setReadyToUpload(false)
        }).catch(error => {
            dispatch(AlertActions.showErrorAlert(`Error :${error.message}`))
        })
    }

    return (

        <Box component="form" onSubmit={(e) => {
            e.preventDefault()
            handleUpload(id)
        }
        }>
            <FormLabel >Upload new Cover</FormLabel>
            <input
                className="selectFile"
                accept="image/*"
                type="file"
                onChange={(e) => handleChange(e)} />

            {readyToUpload ? <img src={preview} alt="previewer" style={{ width: 600 }} /> : null}
            <input type='submit' className="uploadFile" disabled={!readyToUpload} value="Upload" />
        </Box>


    )
}

export default FileUpload