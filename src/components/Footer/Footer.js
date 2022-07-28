import "./style.css";

export default function Footer({ img, title }) {
    return (
        <footer>
            <div className="footer-container">
                <img src={img} />
            </div>
            <div>
                <span className="chosen-title">{title}</span>
            </div>
        </footer>
    );
}