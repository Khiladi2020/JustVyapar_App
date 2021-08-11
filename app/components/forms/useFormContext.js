import {useState,useContext} from 'react'
import * as yup from 'yup'

const validator = (validationSchema,formData)=>{
  return new Promise((resolve,reject)=> validationSchema.validate({
    ...formData
    },{abortEarly:false})
    .then((validated)=>{
      resolve("OK")
    })
    .catch(err=>{
      const new_state = {}
      err.inner.forEach((e,i)=>{
        // console.log(e.name,e.message,e.path)
        new_state[e.path] = e.message
      })
      reject(new_state)
    })
  )
}

const createInitialBlur = (initialFormFields)=>{
  const new_obj = Object.assign({},initialFormFields)
  for(const key in new_obj){
    new_obj[key] = false
  }
  // console.log('new blur',new_obj)
  return new_obj
}

const useFormContext = (initialFormFields,validationSchema)=>{
  const initialBlur = createInitialBlur(initialFormFields)

  const [formFields,setFormFields] = useState(initialFormFields)
  const [errors,setErrors] = useState({})
  const [blurState,setBlurState] = useState(initialBlur)
  // console.log('current blur',blurState)
  
  const handleBlur = (field)=>{
    setBlurState(prevState=> { 
      return {...prevState,[field]:true}
    })
    // console.log(blurState)
  }

  const handleInputChange = (field,input)=>{
    // console.log('called with',input)
    setFormFields(prevState=>{
      return {...prevState,[field]:input}
    })
  }

  const validate_form = async ()=>{
    return validator(validationSchema,formFields)
    .then((res)=>{
      // console.log(res);
      setErrors({}) //delete all errors
      return "OK"
    })
    .catch((err)=>{
      setErrors(err)
      // console.log(err)
      return Promise.reject("NOT OK")
    })
  }

  return {
    formFields,
    errors,
    blurState,
    handleBlur,
    handleInputChange,
    validate_form
  }

}

export default useFormContext