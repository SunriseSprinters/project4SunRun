import { useState, useEffect } from "react";
import { FiSunrise } from 'react-icons/fi';
import { FiSunset } from 'react-icons/fi';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Form = (props) => {
    // de-structuring the props and using the passed down functions for onSubmit and onChange events.
    const {handleChange, handleSubmit, handleToggle, sunriseRun, sunsetRun} = props;

    const toggleDisplay = sunriseRun 
        ? <><FiSunrise className="left"/> Sunrise<span className="sr-only">sunrise</span></>
        : <><FiSunset className="right"/> Sunset<span className="sr-only">sunset</span></> 

    const today = new Date();
    const date = today.getFullYear() + '-' + 0+(today.getMonth()+1) + '-' + 0+today.getDate();

    return (
        <section className="form">
            <form onSubmit={handleSubmit} action="">
                <Link to="/" className="homepage"><AiOutlineArrowLeft/></Link>
                <label 
                    htmlFor="date" >
                        date
                    </label>
                <input 
                    onChange={handleChange} 
                    type="date" 
                    name="date" 
                    id="date" 
                    required
                    placeholder="yyyy-mm-dd" 
                    min={date}
                    value={props.dateInput}
                    />
                <label htmlFor="runTime" >Run at</label><button type="button" onClick={handleToggle}>{toggleDisplay}</button>
                {sunriseRun === false && 
                    <>
                        <label htmlFor="runTime" >Length of run</label>
                        <input
                            name="runTime"
                            onChange={sunsetRun}
                            type="number" 
                            placeholder="run time (min)"
                            required
                            value={props.typedValue}
                            min="1">
                        </input>
                    </>}
                <button type="submit" className="submit">Let's Run<span></span></button> 
            </form>
        </section>
    )
}

export default Form; 