import ScrollToTop from "./ScrollToTop";

function Footer() {
  return (
    <footer className="footer">
      <ScrollToTop />

      <ul className="footer__contacts">
        <li className="footer__contacts--item-title">Address</li>
        <li className="footer__contacts--item">
          Yerevan city, str. Buzand, d. 107 Corp. B{" "}
        </li>
        <li className="footer__contacts--item-title">Phone number</li>
        <li className="footer__contacts--item">+37433207333</li>
        <li className="footer__contacts--item-title">Email</li>
        <li className="footer__contacts--item">rooftopaparthotel@gmail.com</li>
      </ul>
    </footer>
  );
}

export default Footer;
