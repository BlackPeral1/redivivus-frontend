import "./login.css";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Nav from "react-bootstrap/Nav";
import animationData from '../../../assets/helloAnimation.json';
import Lottie from 'react-lottie'

export default function Login() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <>
            <Container >
                <Row>
                    <Col >
                        <Lottie
                            options={defaultOptions}
                            height={300}
                            width={300} />
                    </Col>
                    <Col>
                        <Form className="mt-5 " >
                            <Form.Group className="mb-3 w-75 ms-5" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Username" />
                            </Form.Group>
                            <Form.Group className="mb-3 w-75 ms-5" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="text-center">
                                <Button variant="primary" type="submit" >
                                    Login
                                </Button>
                            </Form.Group>
                            <Form.Group className="text-center  mt-3" controlId="formBasicCheckbox">
                                <Form.Text className="text-primary">
                                    <Nav.Link>
                                        Not a member? Let's Sign Up!
                                    </Nav.Link>
                                </Form.Text>

                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>

        </>
    );

}
