import React from 'react'
import PersonalInfo from "./components/PersonalInfo";
import SelectPlan from "./components/SelectPlan";
import AddOn from "./components/AddOn";
import Sidebar from './Sidebar';
import Summary from './components/Summary';
import { useState,useEffect } from 'react';

function App() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  const [formData, setFormData] = useState(
    {
      name: "",
      email: "",
      phone: "",
      plan: "arcade",
      planLength: "monthly",
      onlineService: false,
      largerStorage: false,
      customizable: false,
    }
  )

  const [cost, setCost] = useState(
    {
      monthly: {
        plan: 9,
        onlineService: 1,
        largerStorage: 2,
        customizable: 2,
      },
      yearly: {
        plan: 90,
        onlineService: 10,
        largerStorage: 20,
        customizable: 20,
      }
    }
  )

  useEffect(() => {
    setCost(prevCost => {
      if (formData.plan === "arcade") {
        prevCost.monthly.plan = 9;
        prevCost.yearly.plan = 90
      } else if (formData.plan === "advanced") {
        prevCost.monthly.plan = 12;
        prevCost.yearly.plan = 120
      } else {
        prevCost.monthly.plan = 15;
        prevCost.yearly.plan = 150
      }
      if (formData.onlineService) {
        prevCost.monthly.onlineService = 1;
        prevCost.yearly.onlineService = 10
      } else {
        prevCost.monthly.onlineService = 0;
        prevCost.yearly.onlineService = 0
      }
      if (formData.largerStorage) {
        prevCost.monthly.largerStorage = 2;
        prevCost.yearly.largerStorage = 20
      } else {
        prevCost.monthly.largerStorage = 0;
        prevCost.yearly.largerStorage = 0
      }
      if (formData.customizable) {
        prevCost.monthly.customizable = 2;
        prevCost.yearly.customizable = 20
      } else {
        prevCost.monthly.customizable = 0;
        prevCost.yearly.customizable = 0
      }
      
      return prevCost
    })
    
  }, [formData])

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData(prevData => {
      return {...prevData, 
        [name]: type === "checkbox" ? checked : value}
    })
    
  }
  console.log(cost)
  const steps = [
    <PersonalInfo 
      currentStepIndex={currentStepIndex}
      back={back}
      next={next}
      formData={formData}
      handleChange={handleChange}
      onSubmit={onSubmit}
    />,
    <SelectPlan 
      currentStepIndex={currentStepIndex}
      back={back}
      formData={formData}
      handleChange={handleChange}
      onSubmit={onSubmit}
      togglePlanLength={togglePlanLength}
    />,
    <AddOn
      currentStepIndex={currentStepIndex}
      back={back}
      formData={formData}
      handleChange={handleChange}
      onSubmit={onSubmit}
    />,
    <Summary 
      currentStepIndex={currentStepIndex}
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
