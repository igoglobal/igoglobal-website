import React, {useState} from 'react';
import { Controller, Control, FieldError } from "react-hook-form";

interface TextFieldProps {
    name: string;
    label: string;
    rules: any;
    floatAnim?: boolean;
    type?: 'text' | 'email' | 'password'
    placeholder?: string;
    className?: string;
    control: Control<any>;
    error?: FieldError;
}

const TextField : React.FC<TextFieldProps> = ({
    name, 
    type='text', 
    control, 
    placeholder, 
    rules, 
    className,
    floatAnim = true,
}) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);    

    return (
        <div className='control-container'>
            <Controller 
                name={name}
                control={control}
                rules={rules}
                render={({field, fieldState}) => (
                    <div className='container-div'>
                        <div className='label-head-div'>
                            <label
                                className={`label-main 
                                    ${(field.value || isFocused) && floatAnim 
                                        ? 'label-alt-pri' 
                                        : 'label-alt-sec'
                                    }
                                    ${(!floatAnim && (isFocused || field.value)) && 'label-text'}
                                `}
                            >
                                <span className={`${fieldState.error && 'label-span'}`}> {placeholder}</span>
                            </label>
                        </div>

                        <input
                            type={type}
                            {...field}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            className={`input-div
                                ${fieldState.error ? 'input-error' : ''} 
                                ${field.value && !fieldState.error ? 'input-focused-error' : ''}
                                ${isFocused && 'input-focused-error'} 
                            `}    
                        />
                        {
                            fieldState.error && 
                            <div className='error-div'>
                                <img className='error-img' src={'/assets/img/landing-page/error-icon.png'} alt='errLogo'></img>
                                <span className='error-span'> {fieldState.error?.message}
                                </span>
                            </div>
                        }
                    </div>
                )}
            />
        </div>
    )
}

export default TextField;