import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardDetail from '../../components/CardDetail';
import './DetailKit.css';

export default function DetailKit() {
  const params = useParams();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        'https://63818d8653081dd54983ff49.mockapi.io/kits?club_name=' +
          params.name
      )
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  console.log(data);
  return (
    <div className="detail-kit">
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        data.map((item, index) => <CardDetail item={item} key={index} />)
      )}
    </div>
  );
}
