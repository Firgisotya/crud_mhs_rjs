import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import axios from "axios";
import {Dropdown, Button} from "react-bootstrap";
import { Link } from "react-router-dom";

const Index = () => {
  const [mhs, setMhs] = useState([]);

  const getAllMhs = async () => {
    let res = await axios.get("http://192.168.144.81:5000/mahasiswa");
    setMhs(res.data);
    console.log(res.data);
  };

  
  useEffect(() => {
      getAllMhs();
    }, []);
    const handleDelete = (id) => async () => {
        try {
            await axios.delete(`http://192.168.144.81:5000/mahasiswa/${id}`)
            getAllMhs()
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className="my-3 mx-5">
           <Link to="/mahasiswa" className="btn btn-primary mb-3">
            Create
           </Link>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>No</th>
            <th>NIM</th>
            <th>Nama</th>
            <th>Alamat</th>
            <th>HP</th>
            <th>angkatan</th>
            <th>Status</th>
            <th>Jurusan</th>
            <th>AKSI</th>
          </tr>
        </thead>
        <tbody>
          {mhs.map((mhs, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{mhs.nim}</td>
              <td>{mhs.nama}</td>
              <td>{mhs.alamat}</td>
              <td>{mhs.hp}</td>
              <td>{mhs.angkatan}</td>
              <td>{mhs.status}</td>
              <td>{mhs.jurusan}</td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Action
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to={`/mahasiswa/${mhs.id}`}>Edit</Dropdown.Item>
                    <Dropdown.Item as={Link} onClick={handleDelete(mhs.id)}>
                      Hapus
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Index;
