import React, { useCallback, useState } from 'react'
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from '../../components/FormHook/FormProvider'
import { CustomInput } from '../../components/FormHook';

const ProfileForm = () => {

    const ProfileSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        about: Yup.string().required("About is required"),
        avataUrl: Yup.string().required("Avatar is required").nullable(true),
    });

    const defaultValues = {
        name: "",
        about: "",
    };

    const methods = useForm({
        resolver: yupResolver(ProfileSchema),
        defaultValues,
    });

    const {
        reset,
        watch,
        control,
        setError,
        setValue,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = methods;

    const values = watch();

    const handleDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];

        const newFile = Object.assign(file, {
            preview: URL.createObjectURL(file)
        })

        if (file) {
            setValue("avatarUrl", newFile, { shouldValidate: true })
        }

    }, [setValue])

    const onSubmit = async (data) => {
        try {
            console.log(data);
            // submit data to backend          
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
                <div className="h-20mr-6 pt-4">
                    <h1 className="pb-2 font-medium text-slate-600">Name</h1>

                    <CustomInput name="name" label="Name" placeholderText="Enter your name" />
                </div>

                <div className="h-20 w-full mr-6 pt-4">
                    <h1 className="pb-2 flex items-center justify-between font-medium text-slate-600">
                        About
                    </h1>

                    <CustomInput multiline rows={4} maxRows={5} name="about" label="About" placeholderText="Tell about yourself!" />
                </div>

                <div className="flex justify-end mt-32">
                    <button className="bg-blue-500 hover:bg-blue-600 rounded-md text-white px-5 py-2" type='submit'>
                        Save
                    </button>
                </div>
            </div>
        </FormProvider>
    )
}

export default ProfileForm
