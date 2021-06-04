import React, { Component } from 'react';

const validate = values => {
    const errors = {}
    if(!values.pregunta0){
        errors.pregunta0='Esta campo es hobligatorio 0'
    }
    if(!values.pregunta1){
        errors.pregunta1='Esta campo es hobligatorio 1'
    }
    if(!values.pregunta2){
        errors.pregunta2='Esta campo es hobligatorio 2'
    }
    return errors
}

export default class Formulario extends Component{
    state = {
        errors:{}
    }

    handleChange = ({ target }) => {
        const {name,value} = target
        this.setState({[name]:value})
    }

    handleSubmit = e =>{
        e.preventDefault()
        const {errors, ...sinErrors} = this.state
        const result = validate(sinErrors)
    
        this.setState({errors:result})
            if(!Object.keys(result).length){
                alert('formulario enviado con exito')
                e.target.reset()
            }
    }


    render(){
        const{errors} = this.state
        let cuestionario={
            preguntas:['¿Cual es tu Nombre?','¿Cual es tu apellido?','¿Cual es tu edad?']
        }
        return(
            <div className="boxForm">
                <form onSubmit={this.handleSubmit}>

                    {
                        cuestionario.preguntas.map((preguntas,i)=>{
                            return(
                                <div className="itemCuestion">
                                    <p key={i}>{preguntas}</p>
                                    <input type="text" name={`pregunta${i}`} onChange={this.handleChange} />
                                    {errors.pregunta0 && <p>{errors.pregunta0}</p> }
                                </div>
                            )
                        })

                    }

                    {/* <input name="nombre" onChange={this.handleChange} />
                    {errors.nombre && <p>{errors.nombre}</p> }
                    <input name="apellido" onChange={this.handleChange} />
                    {errors.apellido && <p>{errors.apellido}</p> } */}
                    <input type="submit" value="enviar" />
                </form>
            </div>
        )
    };
}