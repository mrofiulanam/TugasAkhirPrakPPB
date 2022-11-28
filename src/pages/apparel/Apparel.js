import './Apparel.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CardApparel from '../../components/CardApparel';
import Modal from '../../components/Modal';

export default function Apparel() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectApparel, setSelectApparel] = useState('');

  useEffect(() => {
    axios
      .get('https://63818d8653081dd54983ff49.mockapi.io/apparel')
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {showModal && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          selectApparel={selectApparel}
        />
      )}
      <div className="apparel">
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          data.map((item, index) => (
            <CardApparel
              item={item}
              key={index}
              setShowModal={setShowModal}
              setSelectApparel={setSelectApparel}
            />
          ))
        )}
      </div>
    </>
  );
}
