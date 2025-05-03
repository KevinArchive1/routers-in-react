import './components-css/Footer.css';

export default function Footer() {
  return (
    <div className="footer-holder">
      <marquee behavior="" direction="" scrollamount="10">
        <img src={`${process.env.PUBLIC_URL}/Images/apple.gif`} alt="Apple" />
        <img src={`${process.env.PUBLIC_URL}/Images/banana.gif`} alt="Banana" />
      </marquee>
      <footer>
        <h1>© 2025 Harold Veleña. All rights reserved.</h1>
      </footer>
    </div>
  );
}
