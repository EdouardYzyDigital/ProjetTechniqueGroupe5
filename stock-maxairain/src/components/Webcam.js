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

    console.log(imgSrc)
  
    return (
        <div className="mt-4">
        <Col md={6}>
            <div className='d-flex' style={{gap:'20px'}}>
            <Webcam
            mirrored={true}
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            />
            {imgSrc && (
            <img
                src={imgSrc}
                alt=''
            />
            )}
            </div> 
        </Col>
        <Col md={12} className='text-center mt-5'>
            <Button onClick={capture}>
                Capture photo
            </Button>
        </Col>
        </div>
    );
  };

  export default WebcamCapture;