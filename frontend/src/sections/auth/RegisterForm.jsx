import React, { useState } from 'react'
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from '../../components/FormHook/FormProvider';
import { CustomInput } from '../../components/FormHook';

const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const RegisterSchema = Yup.object().shape({
        firstName: Yup.string().required("First name required"),
        lastName: Yup.string().required("Last name required"),
        email: Yup.string().required("Email is required").email("Email must be a valid email address"),
        password: Yup.string().required("Password is required"),
        confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "Passwords Don't Match").required("Confirm Password is required"),
    });

    const defaultValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    };

    const methods = useForm({
        resolver: yupResolver(RegisterSchema),
        defaultValues
    });

    const {
        reset,
        setError,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = methods;

    const onSubmit = async (data) => {
        try {
            console.log(data);
            // make register api call here          
        } catch (error) {
            console.error(error);
            reset();
            setError("afterSubmit", {
                ...error,
                message: error.message,
            });
        }
    };


    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col'>
                <div className="flex mb-3">
                    <div className="h-20 mr-6 w-full">
                        <h1 className="pb-2 font-medium text-slate-600">First Name</h1>
                        <CustomInput name="firstName" label="First Name" placeholderText="Enter your first name" />

                    </div>
                    <div className="h-20 w-full">
                        <h1 className="pb-2 font-medium text-slate-600">Last Name</h1>
                        <CustomInput name="lastName" label="Last Name" placeholderText="Enter your last name" />

                    </div>
                </div>

                <div className="mb-3 mt-5">
                    <h1 className="pb-2 font-medium text-slate-600">Email</h1>
                    <CustomInput name="email" label="Email address" placeholderText="Enter your email" />
                </div>

                <div className="flex mb-3">
                    <div className="w-full h-20 mr-6">
                        <h1 className="pb-2 font-medium text-slate-600">Password</h1>
                        <CustomInput name="password" label="Password" placeholderText="Enter your password" type="password"/>

                    </div>
                    <div className="h-20 w-full">
                        <h1 className="pb-2 font-medium text-slate-600">Confirm Password</h1>
                        <CustomInput name="confirmPassword" label="Confirm Password" placeholderText="Confirm your password" type="password"/>
                    </div>
                </div>

                <button className="bg-blue-500 hover:bg-blue-600 mt-8 rounded-md text-white px-5 py-2" type='submit'>
                    Register
                </button>
            </div>
        </FormProvider>
    )
}

export default RegisterForm
