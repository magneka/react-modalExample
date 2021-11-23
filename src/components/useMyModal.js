import { useContext, useEffect, useState } from "react"

export const useMyModal = (outerOkHandler) => {

  const [dialogVisible, setDialogVisible] = useState(false);

  const [string1, setString1] = useState('')

  // Kalles med parametre som skal settes i local state
  const showDialog = (inparam1) => {
    console.log('show modal..')
    setString1(inparam1)
    setDialogVisible(true)
  }
  
  const handleCancel = () => {
    console.log ('Skjul den modale')
    setDialogVisible(false);
  }
  
  /*  
  Dersom du ønsker bare en OK/Cancel funksjon, da kan du sende inn en okhandler fra 
  utsikden, og la det modale vinduet avgjøre om den skal kjøres.

  Andre ganger har man en modal med mange input controller, og da kan det være aktuelt 
  å håndtere alt inni useMyModal, f.eks. kall til rest api
  Da trenger du ikke outerOkHandler.
  */
  const handleOK = () => {
    console.log ('Good shit, OK Clicked')

    // Kall til rest api?....

    // Dersom logikk defineres på utsiden brukes ekstern handler
    if (outerOkHandler) {
      outerOkHandler()
    }

    setDialogVisible(false);
  }

  return {dialogVisible, showDialog, handleOK, handleCancel, string1}

}