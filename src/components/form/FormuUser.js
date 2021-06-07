import React, {useState} from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ContainerMessage,ContainerForm } from "./../styles/styles";
import questionsFrom from "../questions/Questions.json"

const FormUser = () => {
    const [validated, setValidated] = useState(false);

    const [showMessage, setShowMessage] = useState([]);
    const [questions, setQuestions] = useState({
        question1: " ",
        question2: " ",
        question3: " ",
        question4: " ",
      });
    
    const handleInputChange = (event) => {
        console.log(event.target.value);
        localStorage.setItem("user", JSON.stringify(questions));
        console.log(event.target.value);
        setQuestions({
          ...questions,
          [event.target.name]: event.target.value,
        });
      };

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if(form.checkValidity() === false){
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
    };

    const Preguntas = questionsFrom.map((Pre,i) => {
        return (
            <div key={i}>
                <Form.Group controlId="validationCustom01">
                    <Form.Label>{Pre.Label}</Form.Label>
                    <Form.Control 
                        required
                        type="text"
                        name={Pre.name}
                        onChange={handleInputChange}
                    />
                    <Form.Control.Feedback type="invalid">
                        Por favor complete el campo
                    </Form.Control.Feedback>
                </Form.Group>
            </div>
        );
    });
    return(
        <ContainerForm>
            <h2>Formulario</h2>
            <hr/>
            <Form noValidate validated={validated} onSubmit={handleSubmit} >
                {Preguntas}
                <div class="d-flex justify-content-center">
                    <Button 
                    className="btn btn-lg btn-primary" 
                    type="submit"
                    onClick={handleInputChange}
                    >
                        Enviar
                    </Button>
                </div>
            </Form>
            <div>
                {showMessage.map((item, index) => (
                <ContainerMessage key={index}>
                    <h3>Datos enviados</h3>
                    <p>
                    {item.allQuestions.question1}{" "}
                    {item.allQuestions.question2}{" "}
                    {item.allQuestions.question3}{" "}
                    {item.allQuestions.question4}{" "}
                    </p>
                </ContainerMessage>
                ))}
            </div>
        </ContainerForm>
    );
};
export default FormUser;