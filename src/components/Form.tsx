"use client";

import { useMultiForm } from "@/hooks/useMultiForm";
import { FormEvent, useState } from "react";
import UserForm from "./UseForm";
import EventSelectionForm from "./EventSelectionForm";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Form() {

    const initialData = {
        name: "",
        email: "",
        collegeName: "",
        eventCategory: "",
        eventName: "",
        participantCount: 0
    }

    const [data, setData] = useState(initialData);
    const [progress, setProgress] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const updateFields = (fields: any) => {
        setData((prev) => {
            return { ...prev, ...fields }
        })
    }

    const {
        steps,
        currentStepIndex,
        step,
        isFirstStep,
        back,
        next,
        isLastStep
    } = useMultiForm([
        <UserForm {...data} updateFields={updateFields} />,
        <EventSelectionForm {...data} updateFields={updateFields} />
    ]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!isLastStep) return next();
        if(!data.name || !data.email || !data.collegeName || !data.eventCategory || !data.eventName || !data.participantCount) {
            toast.warning("Please fill all the fields", {
                theme: "dark",
                position: "bottom-right",

            });
            return;
        }
        toast.success("Form submitted successfully", {
            theme: "dark",
            position: "bottom-right",
        });
        console.log(data);
      }
    
    


    return (
        <div className="py-10 flex justify-center ">
            <form className="p-10 flex flex-col items-center bg-gradient-to-tr from-gray-800 to-yellow-950 text-white  rounded-xl md:w-1/2 shadow-2xl text-sm " onSubmit={handleSubmit}>
                {step}
                <ToastContainer  />
                <div className="p-3 rounded-xl flex w-1/2 justify-between">
                    {!isFirstStep && <button type="button" className="navbutton" onClick={back}>Back</button>}
                    <button type="button" className="navbutton" onClick={handleSubmit} disabled={isSubmitting}>
                        {isLastStep ? "Submit" : "Next"}
                    </button>
                </div>
            </form>
        </div>
    )
}