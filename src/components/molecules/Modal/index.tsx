import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { v4 as uuidv4 } from 'uuid'

const generateWrapper = (id: string) => {
  const wrapper = document.createElement('div')
  wrapper.id = id

  wrapper.style.position = 'fixed'
  wrapper.style.zIndex = '100'
  wrapper.style.left = '0px'
  wrapper.style.right = '0px'
  wrapper.style.top = '0px'
  wrapper.style.bottom = '0px'
  wrapper.style.display = 'flex'
  wrapper.style.justifyContent = 'center'
  wrapper.style.alignItems = 'center'
  wrapper.style.backgroundColor = 'rgb(0 0 0 / 50%)'

  return wrapper
}

const htmlBody = document.getElementsByTagName('body')[0]

interface IModalProps {
  open: boolean
}

const Modal: React.FC<IModalProps> = ({ open = false, children }) => {
  const [modalId] = useState(uuidv4())
  const wrapper = generateWrapper(modalId)

  useEffect(() => {
    if (open) {
      htmlBody.style.overflow = 'hidden'
      htmlBody.appendChild(wrapper)
    }

    return () => {
      const findNodeR = document.getElementById(modalId)

      htmlBody.removeAttribute('style')
      if (findNodeR) htmlBody.removeChild(findNodeR)
    }
  }, [modalId, open, wrapper])

  return open ? createPortal(children, wrapper) : null
}

export default Modal
