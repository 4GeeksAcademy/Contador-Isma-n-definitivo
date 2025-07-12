import React, {useState, useEffect} from "react";
const Counter =() => {
	const [count,setCount] = useState(0)
	const [isCountingUp, setIsCountingUp] = useState(false)
	const [leverPulled, setLeverPulled] = useState(false)
	//Funcion para tirar la palanca
	const pullLever =() =>{
		if(isCountingUp) return;
		//Aquí hacemos la animación de la palanquita
		setLeverPulled(true)
		setTimeout(() => setLeverPulled(false) , 200)
		// iniciar contador Progresivo
		setIsCountingUp(true)
	 }
	//Funcion para parar el contador
	 const stopCounter =() => {
	   setIsCountingUp(false)
	 }
	 //Funcion para resetear
	 const resetCounter =() =>{
		setIsCountingUp(false)
		setCount(0)
	 }
	//useEffect para el contador automatico
	useEffect(() => {
		let interval = null
		if(isCountingUp){
			interval = setInterval(()=>{
			 setCount(prevCount => prevCount + 1)
			}, 1000)
		}
		return () => {
			if (interval) clearInterval(interval)
		}
	}, [isCountingUp])
	return (
		<div className="container">
		<div className="machine">
		 <h1 className="title">Máquina Contadora</h1>
		 <div className="screen">
			<div className={`counter-display  ${isCountingUp ? "counting" : ""}`}>
				{count}
			</div>
		 </div>
		 <div className="lever-container">
			<button onClick={pullLever} disabled={isCountingUp} className="lever">
			   <div className={`lever-handle  ${leverPulled ? "pulled" : ""}`}>
				<div className="lever-ball"></div>
			   </div>
			</button>
		 </div>
		 <button onClick={stopCounter} disabled={!isCountingUp} className="stop-button">
			Parar la cuenta!
		 </button>
			 <div className="status">
				{isCountingUp ? " ¡Contado automático!" : `Parado en:${count}`}
			 </div>
			<button onClick={resetCounter} className="reset-button">
				Resetear
			</button>
		</div>
		</div>
	)
}
export default Counter