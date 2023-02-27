import classNames from 'classnames'
import { ForwardedRef, forwardRef } from 'react'
import { FieldError } from 'react-hook-form'

import './Input.scss'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: FieldError
}

function Input(
  { label, error, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  const inputClasses = classNames('Input', {
    'Input--invalid': error?.type
  })

  return (
    <>
      <div className="input-group">
        <label className={inputClasses}>
          {label && (
            <span
              data-testid="Input__label"
              className="Input__label input-group__label"
            >
              {label}
            </span>
          )}
          <input
            className="Input__field input-group__input"
            ref={ref}
            {...props}
          />
        </label>
      </div>
      {error && <div className="Input__invalid-feedback">{error.message}</div>}
    </>
  )
}

export default forwardRef(Input)
