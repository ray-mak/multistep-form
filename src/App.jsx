import React from 'react'
import PersonalInfo from "./components/PersonalInfo";
import SelectPlan from "./components/SelectPlan";
import AddOn from "./components/AddOn";
import Sidebar from './Sidebar';
import { useState } from 'react';

function App() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  const [formData, setFormData] = useState(
    {
      name: "",
      email: "",
      phone: "",
      plan: "arcade",
      planLength: "monthly"
    }
  )

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData(prevData => {
      return {...prevData, 
        [name]: type === "checkbox" ? checked : value}
    })
    
  }
  console.log(formData)
  const steps = [
    <PersonalInfo 
      currentStepIndex={currentStepIndex}
      next={next}
      back={back}
      formData={formData}
      handleChange={handleChange}
      onSubmit={onSubmit}
    />,
    <SelectPlan 
      currentStepIndex={currentStepIndex}
      next={next}
      back={back}
      formData={formData}
      handleChange={handleChange}
      onSubmit={onSubmit}
      togglePlanLength={togglePlanLength}
    />,
    <AddOn
      currentStepIndex={currentStepIndex}
      next={next}
      back={back}
    />
  ]

  function onSubmit(e) {
    e.preventDefault()
    next()
  }

  function next() {
      setCurrentStepIndex(i => {
          if (i >= steps.length - 1) return i
          return i + 1
      })
  }

  function back() {
    setCurrentStepIndex(i => {
      if (i <= 0) return i
      return i - 1
  })
  }

  function togglePlanLength() {
    setFormData(prevData => ({
      ...prevData,
      planLength: prevData.planLength === "monthly" ? "yearly" :"monthly" 
    }))
  }
  
  return (
    <div className='main-container'>
      <Sidebar
        currentStepIndex={currentStepIndex}
      />
      {steps[currentStepIndex]}
    </div>
  )
}

export default App
