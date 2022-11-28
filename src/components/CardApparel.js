import './CardApparel.css';

export default function CardApparel({ item, setSelectApparel, setShowModal }) {
  return (
    <div
      className="card-apparel"
      onClick={() => {
        setSelectApparel(item.name);
        setShowModal(true);
      }}
    >
      <img src={item.image} alt={item.apparel} />
    </div>
  );
}
