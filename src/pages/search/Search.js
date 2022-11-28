import axios from 'axios';
import { useState } from 'react';
import CardTeam from '../../components/CardTeam';
import './Search.css';

export default function Search() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    axios
      .get(
        'https://63818d8653081dd54983ff49.mockapi.io/kits?club_name=' + input
      )
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  console.log(data);
  return (
    <div className="search">
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search club by name"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="search-result">
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          data.map((item, index) => <CardTeam item={item} key={index} />)
        )}
      </div>
    </div>
  );
}
