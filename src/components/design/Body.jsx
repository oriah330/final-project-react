import bride from '../../images/bride.png';
import group from '../../images/group.jpg';
import red from '../../images/red.png';
import cons from '../../images/cons.png';
import '../../App.css';


function Body() {

    return (
        <>
            <div id='imgDiv'>
                <img id='imgBody' src={group} />
                <img id='imgBody' src={bride} />
                <img id='imgBody' src={cons} />
                <img id='imgBody' src={red} />
            </div>
        </>
    )
}

export default Body
