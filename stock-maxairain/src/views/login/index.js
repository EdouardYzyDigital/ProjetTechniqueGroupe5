import { Button, Col } from "reactstrap";
import WebcamCapture from "../../components/Webcam";
import { useEffect, useState} from 'react'

const Login = () => {

    const [image, setImage] = useState(null)

    useEffect(() => {
        console.log(image)
    }, [image])

    return (
        <div className="container">
            <h1 className="fs-1 text-center mt-4" style={{fontFamily: 'Roboto', color: '#379EC1'}}>Login</h1>
            <Col md='12'>
                <WebcamCapture setImage={setImage}/>
            </Col>
        </div>
    );
}

export default Login;