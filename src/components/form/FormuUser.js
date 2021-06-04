import React, {useState} from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ContainerMessage } from "./../styles/styles";

const FormUser = () => {
    const [validated, setValidated] = useState(false);
    const [showMessage, setShowMessage] = useState([]);
    const [questions, setQuestions] = useState({
        question1: " ",
        question2: " ",
        question3: " ",
      });
    
    
    const handleInputChange = (event) => {
        localStorage.setItem("user", JSON.stringify(questions));
        console.log(event.target.value);
        setQuestions({
          ...questions,
          [event.target.name]: event.target.value,
        });
      };

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if(form.checkValidity()===false){
            event.preventDefault()
            event.stopPropagation();
        }else{
            setShowMessage([
                ...showMessage,
                {
                    allQuestions: questions,
                },
            ])
        }
        event.preventDefault();
        setValidated(true);
    }
    return(
        <>
            <Form noValidate validated={validated} onSubmit={handleSubmit} >
                <Form.Group>
                    <Form.Label>Pregunta 1</Form.Label>
                    <Form.Control 
                        required
                        type="Text"
                        name="question1"
                        onChange={handleInputChange}
                        aria-describedby="question1Help"
                    />
                    <Form.Control.Feedback type="invalid">
                        Por favor complete el campo
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                <Form.Label>pregunta2</Form.Label>
                    <Form.Control 
                        required
                        type="Text"
                        name="question2"
                        onChange={handleInputChange}
                        aria-describedby="question2Help"
                    />
                    <Form.Control.Feedback type="invalid">
                        Por favor complete el campo
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label>pregunta3</Form.Label>
                    <Form.Control 
                        required
                        type="Text"
                        name="question3"
                        onChange={handleInputChange}
                        aria-describedby="question3Help"
                    />
                    <Form.Control.Feedback type="invalid">
                        Por favor complete el campo
                    </Form.Control.Feedback>
                </Form.Group>

                <Button className="btn btn-primary" type="submit">
                    Enviar
                </Button>

                </Form>
                <div>
                {showMessage.map((item, index) => (
                <ContainerMessage key={index}>
                    <p>
                    {" "}
                    {item.allQuestions.question1}
                    {item.allQuestions.question2}
                    {item.allQuestions.question3}
                    </p>
                </ContainerMessage>
                ))}
                </div>
            </>
    )
}
export default FormUser;