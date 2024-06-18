// components/ButtonWithTracking.js
'use client'; // Asegúrate de que este componente se ejecute del lado del cliente
import './ButtonStyle.css'

const ButtonWithTracking = ({ href, text }) => {
    const handleButtonClick = () => {
        gtag('event', 'conversion', {'send_to': 'AW-16565622841/GuaICLnUs7AZELmwjds9'});
    };

    return (
        <div className="button-container">
            <a 
                href={href}
                className="wrapper-link"
                onClick={handleButtonClick}
            >
                <div className="button-wrapper">
                    <div className="button-wrapper__div">
                        <span className="button-wrapper__span">
                            {text}
                        </span>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default ButtonWithTracking;
