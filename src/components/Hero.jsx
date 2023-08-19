import styles from "../style";
import { discount } from "../assets";
import GetStarted from "./GetStarted";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-col flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 xs:px-2 bg-discount-gradient rounded-[10px] mb-4">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`font-poppins font-normal text-[18px] leading-[30.8px] text-dimWhite xs:text-[16px] ml-2`}>
            Get<span className="text-white"> 10%</span> more on first deposit{" "}
          </p>
        </div>

        <div className="flex flex-col justify-between items-center w-full">
          <h1 className="flex-1 text-center font-poppins font-semibold ss:text-[40px] xs:text-[32px] text-[64px] text-neutral-900 ss:leading-[65.8px] xs:leading-[50.8px] leading-[75px]">
          Where the power of knowledge meets the art of financial 
            <span className="text-gradient"> growth</span>{" "}
          </h1>
          <p className={`${styles.paragraph} text-neutral-900 text-center items-center max-w-[770px] mt-5 mb-12`}>
          We are your partners in making informed investment decisions and building a secure future through strategic savings. Our platform is your guide to unlocking the potential of your money and navigating the world of finance with confidence.
        </p>
          <Link to="/sign-up">
            <div className="ss:flex hidden md:mr-4 mr-0">
                <GetStarted />
            </div>
          </Link>
        </div>

       
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-3 relative`}>
        {/* <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" /> */}

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
      
      <Link to="/sign-up">
        <div className={`ss:hidden ${styles.flexCenter}`}>
          <GetStarted />
        </div>
      </Link>
    </section>
  );
};

export default Hero;
