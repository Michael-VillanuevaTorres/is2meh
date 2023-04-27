import React from 'react'
import Form  from "../components/Form";
import Header from "../components/Header";


type Props = {}

const IngresarBug = (props: Props) => {


  return (
    <div>
      <Header />
      <h2> Ingresa tu duda o inquetud </h2>
      <Form></Form>
    </div>
  );
}


export default IngresarBug