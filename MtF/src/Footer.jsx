import "./Footer.css";

function Footer(){

    return(
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Max the Fotograf</p>
        </footer>
    );
}

export default Footer