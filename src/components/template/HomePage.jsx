import { useEffect } from "react";
import { useState } from "react";
import Tablecoin from "../modules/Tablecoin";
import Pagination from "../modules/Pagination";
import Search from "../modules/Search";
import { getCoinList } from "../../services/crypto";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd");
  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      const res = await fetch(getCoinList(page, currency));
      const json = await res.json();
      setCoins(json);
      setIsLoading(false);
    };
    getData();
  }, [page, currency]);
  return (
    <div>
      <Search currency={currency} setCurrency={setCurrency} />
      <Tablecoin coins={coins} isLoading={isLoading} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default HomePage;
