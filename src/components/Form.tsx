"use client";

import { useMultiForm } from "@/hooks/useMultiForm";
import { FormEvent, useState } from "react";
// import UserForm from "./UseForm";
import EventSelectionForm from "./EventSelectionForm";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEventCart } from "@/hooks/useEventCart";

export default function Form() {

    const initialData = {
        collegeName: "",
        eventName: "",
        eventCategory: "",
        team: [{
            name: "",
            phone: ""
        }]
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
        // <UserForm {...data} updateFields={updateFields} />,
        <EventSelectionForm {...data} updateFields={updateFields} />
    ]);

    const { cart } = useEventCart();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        // console.log(data);
        if (!isLastStep) return next();
        if (cart.length === 0) {
            toast.warning("Please select atleast one event", {
                theme: "dark",
                position: "top-right",
            });
            return;
        }
        setIsSubmitting(true);
        const response = await fetch("/api/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                collegeName: data.collegeName,
                cart: JSON.stringify(cart)
            }),
        });

        const result = await response.text();

        setIsSubmitting(false);
        toast.success(result, {
            theme: "dark",
            position: "top-right",
        });
    }

    const handleViewCart = () => {
        toast.info(JSON.stringify(cart), {
            theme: "dark",
            position: "top-right",
        });
    }


    return (

        <div className="py-10 flex justify-center ">
            <form className="p-10 flex flex-col items-center bg-gradient-to-tr from-gray-800 to-yellow-950  text-white  rounded-xl md:w-1/2 shadow-2xl text-sm " onSubmit={handleSubmit}>
                {step}
                <ToastContainer />
                <div className="p-3 rounded-xl flex w-1/2 justify-between">
                    {!isFirstStep && <button type="button" className="navbutton" onClick={back}>Back</button>}
                    <button
                        type="button"
                        className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 relative"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                    >
                        {isLastStep ? "Submit" : "Next"}
                        {isSubmitting && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
                            </div>
                        )}
                    </button>
                </div>
            </form>
            <button type="button" className="fixed z-10 bottom-10 right-10 bg-yellow-600 px-6 py-2 text-base text-background rounded-lg" onClick={handleViewCart}>
                View Cart
            </button>
        </div>

    )
}