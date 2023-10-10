import React, { useState } from 'react'
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from '../../components/FormHook/FormProvider'
import { CustomInput } from '../../components/FormHook';
import { LoginUser } from '../../redux/slices/auth';
import { useDispatch } from "react-redux"

const LoginForm = () => {
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false); 

    const LoginSchema = Yup.object().shape({
        email: Yup.string().required("Email is required").email("Email must be a valid email address"),
        password: Yup.string().required("Password is required"),
    });

    const defaultValues = {
        email: "",
        password: "",
    };

    const methods = useForm({
        resolver: yupResolver(LoginSchema),
        defaultValues,
    });

    const {
        reset,
        setError,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = methods;

    const onSubmit = async (data) => {
        try {
            // console.log(data);
            // make login api call here         
            dispatch(LoginUser(data)); 
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
                <div className="h-20mr-6 relative pt-4">
                    <h1 className="pb-2 font-medium text-slate-600">Email</h1>

                    <CustomInput name="email" label="Email address" placeholderText="Enter your email"/>
                </div>

                <div className="h-20 w-full mr-6 relative pt-4">
                    <h1 className="pb-2 flex items-center justify-between font-medium text-slate-600">
                        Password
                    </h1>
                    <div className="relative">
                        <CustomInput name="password" label="Password" placeholderText="Enter your password" type={showPassword ? "text" : "password"} />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
                        >
                            {showPassword ? <i class="ph ph-eye text-2xl"></i> : <i class="ph ph-eye-slash  text-2xl"></i>}
                        </button>

                    </div>
                </div>

                <button className="bg-blue-500 hover:bg-blue-600 mt-14 rounded-md text-white px-5 py-2" type='submit'>
                    Login
                </button>
            </div>
        </FormProvider>
    )
}

export default LoginForm
