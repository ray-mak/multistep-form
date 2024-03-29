import React from 'react'
import Info from './Info'
import useMultistepForm from './useMultistepForm'
import PersonalInfo from "./components/PersonalInfo";
import SelectPlan from "./components/SelectPlan";
import AddOn from "./components/AddOn";

function App() {
  const { steps, currentStepIndex, step } = useMultistepForm([
    <PersonalInfo />, 
    <SelectPlan />, 
    <AddOn />
  ])


  return (
    <div>
      <Info 
        selection={step}
        currentStepIndex={currentStepIndex}
      />
    </div>
  )
}

export default App
