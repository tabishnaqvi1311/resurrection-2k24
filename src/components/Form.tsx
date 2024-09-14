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
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

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
    const [checked, setChecked] = useState(false);

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

    const { cart, setCart } = useEventCart();

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
        if (!checked) {
            toast.warning("Please agree to the terms and conditions", {
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
        setCart([]);
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
                <div className="p-3 rounded-xl flex md:flex-row flex-col w-[92%] justify-between items-center md:gap-0 gap-7">
                    {!isFirstStep && <button type="button" className="navbutton" onClick={back}>Back</button>}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                type="button"
                                className="bg-yellow-600 hover:bg-yellow-700 text-black flex gap-2 items-center"
                                disabled={cart.length === 0}
                            >
                                <ShoppingCart /> View Cart ({cart.length})
                            </Button>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>All Selected Events</SheetTitle>
                                <SheetDescription>
                                    This is the list of all the events you have selected
                                </SheetDescription>
                            </SheetHeader>
                            <div className="mb-4">
                                {cart.map((item, index) => (
                                    <div key={index} className="flex flex-col justify-between items-start p-2 border-b border-gray-300">
                                        <div>
                                            <p className="text-lg">{item.eventName}</p>
                                            <p className="text-sm">{item.eventCategory}</p>
                                        </div>
                                        <div className="w-full">
                                            <Table>
                                                <TableHeader>
                                                    <TableRow>
                                                        <TableHead>Name</TableHead>
                                                        <TableHead>Phone</TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    {item.team.map((team, index) => (
                                                        <TableRow key={index}>
                                                            <TableCell>{team.name}</TableCell>
                                                            <TableCell>{team.phone}</TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <SheetFooter>
                                <SheetClose>
                                    <Button type="button" className="bg-yellow-600 hover:bg-yellow-700 text-black w-full">
                                        Proceed To Payment
                                    </Button>
                                </SheetClose>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
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
                <div className="flex items-center space-x-2 w-3/4">
                    <input
                        type="checkbox"
                        id="terms"
                        name="terms"
                        checked={checked}
                        onChange={(e) => setChecked(e.target.checked)}
                    />
                    <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        I have read and agreed to the <a href="#" className="text-yellow-600">terms and conditions</a> and will not ask for refunds or adjustments.
                    </label>
                </div>
            </form>
        </div>

    )
}