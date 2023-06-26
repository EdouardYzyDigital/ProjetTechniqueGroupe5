import Webcam  from 'react-webcam'
import { useState, useRef, useCallback } from 'react';
import { Button, Col } from 'reactstrap';

const WebcamCapture = props => {
    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null);
  
    const capture = useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
      props.setImage(imgSrc)
    }, [webcamRef, setImgSrc]);
  
    return (
        <>
        <Col md={6}>
            <Webcam
            mirrored={true}
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            />
        </Col>
        <Col md={6} className='d-flex flex-column'>
            <Button onClick={capture}>
                Capture photo
            </Button>
            {imgSrc && (
            <img
                src={imgSrc}
                alt=''
            />
            )}
        </Col>
        </>
    );
  };

  export default WebcamCapture;