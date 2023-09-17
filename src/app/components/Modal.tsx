import { ReactNode } from 'react'
import ReactDOM from 'react-dom'

interface ModalProps {
  onClose: () => void
  children: ReactNode
}

const Modal = ({ onClose, children }: ModalProps) => {
  return ReactDOM.createPortal(
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        // eslint-disable-next-line react/jsx-no-bind
        onClick={(e) => e.stopPropagation()}
        style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}
      >
        {children}
      </div>
    </div>,
    document.body,
  )
}

export default Modal
