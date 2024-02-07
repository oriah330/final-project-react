import pnina from '../../images/pnina.png';
import logo from '../../images/logo.png';
import '../../App.css';


function Header() {
    const imageCount = 60;
    const images = [];

    for (let i = 0; i < imageCount; i++) {
        images.push(<img key={i} id={`image-${i}`} src={pnina} alt="Pnina" />);
    }

    return (
        <>
            <div className='header'>
                <p className='title'>CARE AND BEAUTY</p>
                <div className="animation">{images}</div>
            </div>
            <img id='logo' src={logo} />
        </>
    )
}

export default Header
