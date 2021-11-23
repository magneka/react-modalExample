import React, {useState, useEffect, useRef } from 'react'
import { Button } from "react-bootstrap";
import { MyModal} from '../components/MyModal'
import { useMyModal } from '../components/useMyModal'

export const SomeShitContainer = () => {

  const [textValue, setTextValue] = useState('good day')

  const outerOkHandler = () => console.log('outerOkHandler running')
  
  const myModalFuncs = useMyModal(outerOkHandler)

  // NB denne funksjonen rendrer ikke modalt vindu med mindre det er nødvenig
  // Det kan typisk være mange modale vinduer inni denne funksjonen
  const getModalWindows = () => {
    return (
        <>                                       
            {myModalFuncs.dialogVisible && <MyModal myModalFuncs={myModalFuncs} />}               
        </>
    )
}

  return (
    <>
      {getModalWindows()}

      <h1>You are now in some shit container</h1>   

      Input <input value={textValue} onChange={(e) => setTextValue(e.target.value)} /> <br/><br/>

      <Button variant="primary" onClick={() => myModalFuncs.showDialog(textValue)}>
        Vis modalt vindu
      </Button>

    </>

  )
}