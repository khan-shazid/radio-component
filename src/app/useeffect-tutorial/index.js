import React, { useEffect, useState } from 'react';
import { Hello } from './hello';
import { useForm } from './useForm';

export default function useStateTutorial() {
    const [showHello, setShowHello] = useState(true);
    const [values, handleChange] = useForm({email: '', password: '', firstName: ''});

    useEffect(() => {
        console.log("rendered");
    }, [values.password, values.firstName])

    return (
      <div>
        {
          showHello && <Hello/>
        }
        <button onClick={() => setShowHello(!showHello)}>Show hello</button>
        <form>
          <input name="email" placeholder="Email" value={values.email} onChange={handleChange}/>
          <input name="firstName" placeholder="First Name" value={values.firstName} onChange={handleChange}/>
          <input type="password" placeholder="Password" name="password" value={values.password} onChange={handleChange}/>
        </form>
      </div>
    )
}
