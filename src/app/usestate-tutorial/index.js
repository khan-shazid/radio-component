import React, { useState } from 'react';
import { useForm } from './useForm';

export default function useStateTutorial() {
    const [values, handleChange] = useForm({email: '', password: ''});

    return (
      <div>
        <form>
          <input name="email" value={values.email} onChange={handleChange}/>
          <input type="password" name="password" value={values.password} onChange={handleChange}/>
        </form>
      </div>
    )
}
