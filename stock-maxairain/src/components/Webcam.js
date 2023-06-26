import Webcam  from 'react-webcam'
import { useState, useRef, useCallback } from 'react';
import { Button } from 'reactstrap';

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
        <Webcam
          mirrored={true}
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
        />
        <Button onClick={capture}>
            Capture photo
        </Button>
        {imgSrc && (
          <img
            src={imgSrc}
            alt=''
          />
        )}
      </>
    );
  };

  export default WebcamCapture;