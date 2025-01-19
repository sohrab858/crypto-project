import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";

import { RotatingLines } from "react-loader-spinner";

import PropTypes from "prop-types";
import styles from "./TableCoin.module.css";

function Tablecoin({ coins, isLoading }) {
  return (
    <div className={styles.container}>
      {isLoading ? (
        <p>
          <RotatingLines strokeColor="#3874ff" strokeWidth="2" />
        </p>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>coin</th>
              <th>name</th>
              <th>price</th>
              <th>24h</th>
              <th>total valume</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <TableRow coin={coin} key={coin.id} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Tablecoin;

const TableRow = ({
  coin: {
    name,
    image,
    symbol,
    total_volume,
    price_change_percentage_24h: price_change,
    current_price,
  },
}) => {
  return (
    <tr>
      <td>
        <div className={styles.symbol}>
          <img src={image} alt={name} />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>${current_price.toLocaleString()}</td>
      <td className={price_change > 0 ? styles.success : styles.error}>
        {price_change.toFixed(2)}%
      </td>
      <td>{total_volume.toLocaleString()}</td>
      <td>
        <img src={price_change > 0 ? chartUp : chartDown} alt={name}></img>
      </td>
    </tr>
  );
};

TableRow.propTypes = {
  coin: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    total_volume: PropTypes.number.isRequired,
    price_change_percentage_24h: PropTypes.number.isRequired,
    current_price: PropTypes.number.isRequired,
  }).isRequired,
};
Tablecoin.propTypes = {
  coins: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Adjust based on your data
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      symbol: PropTypes.string.isRequired,
      total_volume: PropTypes.number.isRequired,
      price_change_percentage_24h: PropTypes.number.isRequired,
      current_price: PropTypes.number.isRequired,
    })
  ).isRequired,
};
