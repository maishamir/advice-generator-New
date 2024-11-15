import React, { useEffect, useState } from "react";
import axios from "axios";
import "./QuoteCard.scss";
import dividerImg from "../../assets/images/pattern-divider-desktop.svg";
import diceImg from "../../assets/images/icon-dice.svg";

const URL = "https://api.adviceslip.com/advice";
// const URL = "https://api.adviceslip.com/advice/71";

function QuoteCard() {
  const [quote, setQuote] = useState({ id: null, advice: "" });

  useEffect(() => {
    const fetchQuote = async () => {
      const response = await axios.get(URL);
      const { id, advice } = response.data.slip;
      setQuote({ id, advice });
    };

    fetchQuote();
  }, []);

  console.log(quote);

  return (
    <div className="quoteCard">
      <div className="quoteCard__container">
        <h1 className="quoteCard__heading">Advice #{quote.id}</h1>
        <p className="quoteCard__quote">"{quote.advice}"</p>

              <img src={dividerImg} alt="" className="quoteCard__decor" />
              <a href="" className="quoteCard__button"><img src={diceImg} alt="" /></a>
      </div>
    </div>
  );
}

export default QuoteCard;
