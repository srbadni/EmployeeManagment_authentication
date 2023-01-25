import React, {FC} from 'react'
import {CardGroup, Col, Container, Row, Card, Form, Button, InputGroup, Image} from "react-bootstrap";
import LoginLayout, {loginProps} from "../../../HOC/LoginLayout";

const Login: FC<loginProps> = ({
                                   state,
                                   HandleChange,
                                   setExplicitField,
                                   HandleSubmit
                               }) => {
    return (
        <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
            <Container>
                <Row className="justify-content-center">
                    <Col md={8}>
                        <CardGroup>
                            <Form onSubmit={HandleSubmit}>
                                <Card className="p-4">
                                    <Card.Body>
                                        <h2>ورود</h2>
                                        <p className="text-medium-emphasis">به حساب خود وارد شوید</p>
                                        <InputGroup className="mb-3">
                                            <Form.Control name="username"
                                                          onKeyUp={HandleChange}
                                                          onBlur={() => setExplicitField("username", true)}
                                                          placeholder="نام کاربری"/>
                                            <InputGroup.Text>
                                                نام کاربری
                                            </InputGroup.Text>
                                        </InputGroup>
                                        <p className="text-danger">
                                            {state.$errors.username?.map((data: any) => data.$message).join(",")}
                                        </p>
                                        <InputGroup className="mb-4">
                                            <Form.Control name="password"
                                                          onKeyUp={HandleChange}
                                                          onBlur={() => setExplicitField("password", true)}
                                                          type="password"
                                                          placeholder="رمز عبور"
                                            />
                                            <InputGroup.Text>
                                                کلمه عبور
                                            </InputGroup.Text>
                                        </InputGroup>
                                        <p className="text-danger">
                                            {state.$errors.password?.map((data: any) => data.$message).join(",")}
                                        </p>
                                        <Row>
                                            <Col xs={6}>
                                                <Button color="primary"
                                                        className="px-4"
                                                        type={"submit"}>
                                                    ورود
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Form>
                            <Card className="text-white py-5"
                                  style={{width: '44%', backgroundColor: "#31aa89"}}>
                                <Card.Body className="text-center">
                                    <div>
                                        <h2>ورود کاربران و نمایندگان سازمان</h2>
                                        <p>
                                            از این طریق می توانید به پنل خود وارد شوید
                                        </p>
                                    </div>
                                    <Image className={'img-fluid w-50'} src={"/images/Asset 1tavana.png"}/>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LoginLayout(Login)
