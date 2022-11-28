import './Modal.css';
import { FiX } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Modal({ showModal, setShowModal, selectApparel }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://63818d8653081dd54983ff49.mockapi.io/apparel?name=' +
          selectApparel
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [selectApparel]);

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-close">
          <FiX
            onClick={() => setShowModal(false)}
            className="modal-close-button"
          />
        </div>
        <div className="modal-name">
          <p className="modal-name-label">Apparel Name</p>
          <p>{data[0]?.name}</p>
        </div>
        <div className="description">
          <p className="description-label">Description</p>
          <p>{data[0]?.description}</p>
        </div>
      </div>
    </div>
  );
}
