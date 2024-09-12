"use client";

import { useMultiForm } from "@/hooks/useMultiForm";
import { FormEvent, useState } from "react";
import UserForm from "./UseForm";
import EventSelectionForm from "./EventSelectionForm";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EventCartProvider } from "@/context/EventCartContext";
import { useEventCart } from "@/hooks/useEventCart";

export default function Form() {

    const initialData = {
        name: "",
        phone: "",
        collegeName: "",
        eventName: "",
        eventCategory: "",
        team: []
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

    const { cart } = useEventCart();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        // console.log(data);
        if (!isLastStep) return next();
        console.log(cart)

        toast.success(JSON.stringify({
            name: data.name,
            phone: data.phone,
            collegeName: data.collegeName,
            cart: JSON.stringify(cart)
        }), {
            theme: "dark",
            position: "bottom-right"
        })
        // if (!data.name || !data.phone || !data.collegeName) {
        //     toast.warning("Please fill all the fields", {
        //         theme: "dark",
        //         position: "bottom-right",
        //     });
        //     return;
        // }
        // try {
        //     const response = await fetch("/api/send", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify(data),
        //     });

        //     const result = await response.json();
        //     console.log(result);
        //     toast.success("Registered Successfully", {
        //         theme: "dark",
        //         position: "bottom-right",
        //     });

        // }
        // catch (error) {
        //     toast.error("Something went wrong", {
        //         theme: "dark",
        //         position: "bottom-right",
        //     });
        // }
    }


    return (

        <div className="py-10 flex justify-center ">
            <form className="p-10 flex flex-col items-center bg-gradient-to-tr from-gray-800 to-yellow-950 text-white  rounded-xl md:w-1/2 shadow-2xl text-sm " onSubmit={handleSubmit}>
                {step}
                <ToastContainer />
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