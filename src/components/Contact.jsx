import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from '../hoc/SectionWrapper'

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({name:'',email:'',message:''})
  const [loading, setLoading] = useState(false)

  return (
    <div>Contact</div>
  )
}

export default SectionWrapper(Contact,"contact") 