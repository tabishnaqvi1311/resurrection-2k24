"use client";

import { useMultiForm } from "@/hooks/useMultiForm";
import { FormEvent, useState } from "react";
// import UserForm from "./UseForm";
import EventSelectionForm from "./EventSelectionForm";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEventCart } from "@/hooks/useEventCart";
import { Button } from "./ui/button";
import { Loader2, ShoppingCart } from "lucide-react";

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

        <div className="p-10 flex justify-center">
            <form className="flex flex-col items-center text-white w-full text-sm " onSubmit={handleSubmit}>
                {step}
                <ToastContainer />
                <div className="p-3 rounded-xl flex w-[92%] justify-between items-center">
                    {!isFirstStep && <button type="button" className="navbutton" onClick={back}>Back</button>}
                    <Button
                        type="button"
                        className="bg-yellow-600 hover:bg-yellow-700 text-black flex gap-2 items-center"
                        onClick={handleViewCart}
                        disabled={cart.length === 0}
                    >
                        <ShoppingCart /> View Cart ({cart.length})
                    </Button>
                    <Button
                        type="button"
                        className="bg-yellow-600 hover:bg-yellow-700 text-black  disabled:opacity-50 relative"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                    >
                        {isSubmitting && (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        {isLastStep ? "Submit" : "Next"}
                    </Button>
                </div>
            </form>
        </div>

    )
}