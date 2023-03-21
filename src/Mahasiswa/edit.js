import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Edit = () => {
    const {id} = useParams();

    const navigate = useNavigate();
   
    const [mahasiswa, setMahasiswa] = useState({})

    useEffect(() => {
       const res = async () => {
            try {
                let response = await axios.get(`http://192.168.144.81:5000/mahasiswa/${id}`)
                setMahasiswa(response.data)
                console.log(response.data)
            } catch (error) {
                console.log(error);                
            }
       }
       res()
    }, [])

    const handleEdit = async (e) => {
        e.preventDefault()
        try {
           const edit = await axios.put(`http://192.168.144.81:5000/mahasiswa/${id}`, mahasiswa)
            if(edit.status === 200){
                navigate('/')
            }
        } catch (error) {
            console.log(error);
        }
    }

  
  return (
    <div className='m-auto w-50 '>
    {/* buatkan form create */}
   <div className='my-5'>
   <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>NIM</Form.Label>
            <Form.Control type="text" placeholder="Masukkan NIM" name='nim' value={mahasiswa.nim} onChange={(e) => setMahasiswa({...mahasiswa, nim: e.target.value})} />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Nama</Form.Label>
            <Form.Control type="text" placeholder="Masukkan Nama"  name='nama' value={mahasiswa.nama} onChange={(e) => setMahasiswa({...mahasiswa, nama: e.target.value})}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword"> 
            <Form.Label>Alamat</Form.Label>
            <Form.Control type="text" placeholder="Masukkan Alamat" name='alamat' value={mahasiswa.alamat} onChange={(e) => setMahasiswa({...mahasiswa, alamat: e.target.value})}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>HP</Form.Label>
            <Form.Control type="text" placeholder="Masukkan HP" name='hp'  value={mahasiswa.hp} onChange={(e) => setMahasiswa({...mahasiswa, hp: e.target.value})}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Angkatan</Form.Label>
            <Form.Control type="text" placeholder="Masukkan angkatan" name='angkatan' value={mahasiswa.angkatan} onChange={(e) => setMahasiswa({...mahasiswa, angkatan: e.target.value})}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Status</Form.Label>
            <Form.Control type="text" placeholder="Masukkan status" name='status' value={mahasiswa.status} onChange={(e) => setMahasiswa({...mahasiswa, status: e.target.value})}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Jurusan</Form.Label>
            <Form.Control type="text" placeholder="Masukkan jurusan" name='jurusan' value={mahasiswa.jurusan} onChange={(e) => setMahasiswa({...mahasiswa, jurusan: e.target.value})}/>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleEdit}>
            Submit
        </Button>
        </Form>
   </div>
   </div>
  )
}

export default Edit