import { FormGroup, Col, Row, Input, Button, Card, CardHeader, CardBody, Label, Media } from 'reactstrap'
import { useState } from 'react'
import logoDefault from '../../images/default.png'

const SignIn = () => {
    const [image, OnChangeImage] = useState(null)
    const [name, setName] = useState(null)
    const [lastname, setLastName] = useState(null)
    const [job, setJob] = useState(null)

    return (
        <div className="container">
            <h1 className="fs-1 text-center mt-2" style={{fontFamily: 'Roboto', color: '#379EC1'}}>Sign In</h1>
                <Card className='mt-3'>
                <CardBody>
                        <Col sm="12">
                            <div className="divider">
                            <div className="divider-text">Informations utilisateur</div>
                            </div>
                        </Col>
                        <Row className='mt-3'>
                            <Col md={6}>
                            <FormGroup>
                                <Label for="firstname">
                                Fistname
                                </Label>
                                <Input
                                defaultValue={name}
                                id="firstname"
                                name="firstname"
                                placeholder="Enter your firstname..."
                                onChange={e => setName(e.target.value)}
                                />
                            </FormGroup>
                            </Col>
                            <Col md={6}>
                            <FormGroup>
                                <Label for="lastname">
                                Lastname
                                </Label>
                                <Input
                                defaultValue={lastname}
                                id="lastname"
                                name="lastname"
                                placeholder="Enter your lastname..."
                                onChange={e => setLastName(e.target.value)}
                                />
                            </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="poste">
                                Poste
                                </Label>
                                <Input
                                defaultValue={job}
                                id="poste"
                                name="poste"
                                placeholder="Enter your job..."
                                type="text"
                                onChange={e => setJob(e.target.value)}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                            <Media className="mt-4 ml-1" body>
                                {image === null ? <img src={logoDefault} alt=''/> : <img src={image} alt=''/>}
                                <div className='d-flex mt-3 align-items-center' style={{gap: '10px'}}>
                                    <Button
                                        tag={Label}
                                        className="mr-75"
                                        size="sm"
                                        color="primary"
                                    >
                                        Upload
                                        <Input
                                        type="file"
                                        onChange={e => OnChangeImage(URL.createObjectURL(e.target.files[0]))}
                                        hidden
                                        accept="image/*"
                                        />
                                    </Button>
                                    <p>Format autorisé JPG, GIF ou PNG. Taille max. de 500Ko</p>
                                </div>
                            </Media>
                            </FormGroup>
                        </Col>
                        </Row>
                        <Button color='btn btn-outline-info w-25 mt-2' onClick={() => console.log(name, lastname, image, job)}>
                            Sign in
                        </Button>   
                </CardBody>
            </Card>
        </div>

    );
}

export default SignIn;