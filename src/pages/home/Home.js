import axios from 'axios';
import { useEffect, useState } from 'react';
import CardTeam from '../../components/CardTeam';
import { competition } from '../../utils/data';
import './Home.css';

export default function Home() {
  const [label, setLabel] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect digunakan untuk merender data ketika pertama kali halaman load atau ketika dependencynya berubah
  // dependency useEffect berada pada bagian yang dibungkus oleh []
  useEffect(() => {
    setLoading(true);
    // melakukan fetch data berdasarkan jenis label
    axios
      .get('https://63818d8653081dd54983ff49.mockapi.io/kits?league=' + label)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [label]);

  return (
    <div className="home">
      <div className="label">
        {/* variable competition dipanggil dari file yang berada di folder utils */}
        {competition.map((item, index) => {
          return (
            <div
              key={index}
              className="label-item"
              // ternary operator yang digunakan apabila perulangan bernilai All maka akan memberikan nilai berupa string kosong, namun ketika bernilai selain All maka akan mengambil nilai dari item.name itu sendiri
              //setLabel ini berguna untuk melakukan update pada state label ketika mengklik label yang berbeda
              onClick={() => setLabel(item.name === 'All' ? '' : item.name)}
            >
              {item.name}
            </div>
          );
        })}
      </div>
      <div className="team">
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          data.map((item, index) => {
            // item dikirim kedalam komponen cardteam untuk diconsume menggunakan props
            return <CardTeam item={item} key={index} />;
          })
        )}
      </div>
    </div>
  );
}
