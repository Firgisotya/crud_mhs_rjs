import React, { useState } from 'react'
import {Button, Form} from 'react-bootstrap';
import axios from "axios";
import {  Navigate, useNavigate } from 'react-router-dom';

const Create = () => {

    const navigate = useNavigate();
    const [form, setForm] = useState({
    nim: '',
    nama: '',
    alamat: '',
    hp: '',
    angkatan: '',
    status: '',
    jurusan: '',
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
    try {
        e.preventDefault()
        const cr = await axios.post('http://192.168.144.81:5000/mahasiswa', form)
        if(cr.status === 201){
            navigate('/')
        }
    } catch (error) {
        console.log(error)
    }

    }
  return (
   <div className='m-auto w-50 '>
    {/* buatkan form create */}
   <div className='my-5'>
   <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>NIM</Form.Label>
            <Form.Control type="text" placeholder="Masukkan NIM" name='nim' onChange={handleChange} value={form.nim} />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Nama</Form.Label>
            <Form.Control type="text" placeholder="Masukkan Nama"  name='nama' onChange={handleChange} value={form.nama}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword"> 
            <Form.Label>Alamat</Form.Label>
            <Form.Control type="text" placeholder="Masukkan Alamat" name='alamat' onChange={handleChange} value={form.alamat} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>HP</Form.Label>
            <Form.Control type="text" placeholder="Masukkan HP" name='hp' onChange={handleChange} value={form.hp}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Angkatan</Form.Label>
            <Form.Control type="text" placeholder="Masukkan angkatan" name='angkatan' onChange={handleChange} value={form.angkatan} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Status</Form.Label>
            <Form.Control type="text" placeholder="Masukkan status" name='status' onChange={handleChange} value={form.status}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Jurusan</Form.Label>
            <Form.Control type="text" placeholder="Masukkan jurusan" name='jurusan' onChange={handleChange} value={form.jurusan}/>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
        </Button>
        </Form>
   </div>
   </div>
  )
}

export default Create