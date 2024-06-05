import React from 'react'

export default function Input(props) {
    const { width, type, name, placeholder, label, required = true , handleChange } = props;
    return (
        <div className=' flex flex-col gap-1 my-5'>
            <label className='block text-sm font-medium text-gray-900 dark:text-white' htmlFor={name}>{label}</label>
            <input
                id={name}
                type={type}
                placeholder={placeholder}
                className={`input ${width}`}
                required={required}
                onChange={handleChange}
            />
        </div>
    )
}
