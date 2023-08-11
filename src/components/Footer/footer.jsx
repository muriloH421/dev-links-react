import "./footer.module.css";

const Footer = ({children, link}) => {
  return (
    <footer>
      <p>
        feito por <ion-icon name="heart" /> por {" "}<a href={link} target="_blank">{" "}{children}</a>
      </p>
    </footer>
  );
};

export default Footer;
