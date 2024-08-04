import logo1 from "src/assets/images/clients/1.png";
import logo2 from "src/assets/images/clients/2.png";
import logo3 from "src/assets/images/clients/3.png";
import logo4 from "src/assets/images/clients/4.png";
import logo5 from "src/assets/images/clients/5.png";
import logo6 from "src/assets/images/clients/6.png";
import logo7 from "src/assets/images/clients/7.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const ClientLogos = ({ number }: { number: number }) => {
  return (
    <>
      {logos.map(
        (logo, index) =>
          index < number && <img key={index} src={logo} alt="company logo" />
      )}
    </>
  );
};

export default ClientLogos;
