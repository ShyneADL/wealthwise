import { revenue } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import { Link } from "react-router-dom";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Discover Advanced Tools <br className="sm:block hidden" /> for Stock Analysis
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Experience a comprehensive suite of tools designed to provide deep insights into the stock market. Whether you're an experienced investor or just beginning your journey, our platform offers a range of features to empower you with the information you need to make informed decisions.
      </p>

      <Link to='/stocks'>
        <Button text={"View Stocks"} styles={`mt-10`} />
      </Link>
    </div>

    <div className={layout.sectionImg}>
      <img src={revenue} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
