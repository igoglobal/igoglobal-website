import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { db } from '../../firebase';
import { collection, addDoc, where, getDocs, query } from 'firebase/firestore';
import emailjs from 'emailjs-com';
import { v4 as uuidv4 } from 'uuid';

import TextField from '../../components/LandingPage/Textfield';
import loaderSpinner from '../../components/LandingPage/Loader';
import ProcessForm from '../../components/LandingPage/FormProcess';


interface LandingPageProps {
    showNotif: (
        title: string, msg: string, 
        code: 'success' | 'error' | 'notif' | 'warning'
    ) => void;
}
const LandingPage: React.FC<LandingPageProps> = ({ showNotif }) => {
    const { OvalLoader } = loaderSpinner;
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const { control, handleSubmit, reset } = useForm();


    const registerUser = async (formData: any) => {
        setIsSubmitting(true);

        const email = formData.email;

        try {
            const emailQuery = query(collection(db, 'registrations'), where('email', '==', email));
            const emailQuerySnapshot = await getDocs(emailQuery);

            if(!emailQuerySnapshot.empty){
                showNotif('Error', `${email} is already registered`, 'error')
                return;
            }

            const registrationId = uuidv4();
            const body = {
                firsname: formData.firstName,
                lastname: formData.lastName,
                email: formData.email,
                phoneNo: formData.phoneNo,
                createdAt: new Date(),
                registrationId
            }
            await addDoc(collection(db, 'registrations'), body)

            const templateParams = {
                user_email: formData.email,
                registration_id: registrationId,
                first_name: formData.firstName,
            }
            await emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID!,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
                templateParams,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY!,
            )

            showNotif('Registration successful', 'check your email for your id', 'success')
            reset();

        } catch (error: any) {
            showNotif('Error', error, 'error')
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="landing">
            <div className='landing-header'>
                <img src='/assets/img/landing-page/igoglobal.png' width={120}></img>
                <h3 className='landing-header-title'>Wealth Conference Registration</h3>
            </div>
            <div className='landing-body'>
                <div className='register'>
                    <div className='register-profile'>
                        <img src='/assets/img/landing-page/user-add.png'></img>
                    </div>
                    <div className='register-names'>
                        <div className='register-names-first'>
                            <TextField 
                                name='firstName' label='Enter first name' placeholder='Enter first name'
                                rules={{ required: 'First name cannot be blank' }} control={control} />
                        </div>
                        <div className='register-names-second'>
                            <TextField 
                                name='lastName' label='Enter last name' placeholder='Enter last name'
                                rules={{ required: 'Last name cannot be blank' }} control={control} />
                        </div>
                    </div>
                    <TextField 
                        name='email' label='Enter email' placeholder='Enter email' type='email'
                        rules={{ 
                            pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address" },
                            required: 'Email cannot be blank' }} 
                        control={control} 
                    />
                    <TextField 
                        name='phoneNo' label='Phone number' placeholder='Phone number'
                        rules={{ 
                            maxLength: { value: 15, message: "Max length of 15 exceeded" },
                            minLength: { value: 10, message: "Minimum length of 10" },
                            pattern: { value: /^\+?\d+$/, message: "Invalid phone number. Only numbers allowed" },
                            required: 'Phone Number not set' }} 
                        control={control} 
                    />
                    <button 
                        className='submit-button'
                        onClick={handleSubmit(registerUser)}
                    > 
                        <div className='button-container'>
                            {isSubmitting && (
                                <OvalLoader />
                            )}
                            <span>{`${isSubmitting ? 'Registering...' : 'Register'}`}</span>
                        </div> 
                    </button>
                </div>
                <div className='about-us'>
                    <ProcessForm number='1' title='Fill Form' msg='Complete the form with your details'/>
                    <ProcessForm number='2' title='Get ID' msg='Check your email for your unique identification'/>
                    <ProcessForm number='3' title='Attend Event' msg='Use the address sent to your email to locate the event'/>
                </div>
            </div>
            <div className='landing-footer'>
                Landmark Hotels Ltd. 4, Worlu Street D Line, Off Olu Obasanjo Road, PortHarcourt
            </div>
        </div>
    )
}

export default LandingPage;