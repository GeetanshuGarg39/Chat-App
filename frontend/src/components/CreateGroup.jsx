import React from 'react'
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FormProvider from './FormHook/FormProvider';
import { CustomInput } from './FormHook';
import GroupDropDown from './FormHook/GroupDropDown';

const CreateGroupForm = () => {
    const MEMBERS = [
        "Addisyn Buck",
        "Franco Guzman",
        "Adelina Sutton",
        "Ari Gonzalez",
        "Maxton Castillo",
        "Max Peterson",
        "Forrest Grant",
    ];

    const NewGroupSchema = Yup.object().shape({
        title: Yup.string().required("Title is required"),
        members: Yup.array().required("Members are required").min(2, "Group must have at least 2 members"),
    });

    const defaultValues = {
        title: "",
        members: [],
    };

    const methods = useForm({
        resolver: yupResolver(NewGroupSchema),
        defaultValues,
    });

    const {
        reset,
        watch,
        setValue,
        handleSubmit,
        formState: { isSubmitting, isValid },
    } = methods;

    const onSubmit = async (data) => {
        try {
            console.log(data);
            // the api call to be made here
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col'>
                <div className="mb-4">
                    <label className="block text-gray-700">Title</label>
                    <CustomInput name="title" label="Title" placeholderText="Enter your group name" />
                </div>                
                <GroupDropDown
                    name="members"
                    label="Members"
                    multiple
                    options={MEMBERS.map((option) => ({ label: option, value: option }))}
                    ChipProps={{ size: "medium" }}
                />

                <div className="flex justify-end mt-5">
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-5 rounded-lg" type='submit'
                    >
                        Create
                    </button>
                </div>
            </div>

        </FormProvider>
    )
}

const CreateGroup = ({ open, handleClose }) => {
    return (
        <div
            className={`fixed inset-0 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                } transition-opacity flex flex-col items-center justify-center`}
        >
            <div className="fixed inset-0 bg-blue-50 opacity-50" />

            <div className="bg-white p-6 w-96 rounded-lg shadow-xl relative">
                <div className='flex items-center justify-between mb-4'>

                    <div>
                        <h1 className="text-xl font-semibold">Create New Group</h1>
                    </div>

                    <button
                        onClick={handleClose}
                        className="text-xl hover:text-blue-500"
                    >
                        <i className="ph ph-x" />
                    </button>
                </div>
                <CreateGroupForm />
            </div>
        </div>
    );
}

export default CreateGroup
