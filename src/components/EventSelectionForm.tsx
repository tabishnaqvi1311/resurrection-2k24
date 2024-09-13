import { EventSelectionFormProps } from "@/types/EventSelectionForm";
import FormWrapper from "./FormWrapper";
import { useEventCart } from "@/hooks/useEventCart";
import { eventCategories, eventData } from "@/constants";
import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "./ui/button";


export default function EventSelectionForm({
    collegeName,
    eventCategory,
    eventName,
    team,
    updateFields
}: EventSelectionFormProps) {


    const { addToCart, cart } = useEventCart();

    const [teamState, setTeamState] = useState(team);

    const getEventNames = (category: string): string[] => {
        let eventNames: string[] = [];
        eventData.map((eve) => {
            if (eve.category === category) {
                eventNames.push(eve.name);
            }
        })
        return eventNames;
    }


    return (
        <FormWrapper title={`Event Details`} subtitle="Please fill in the event details">
            <div className="flex md:flex-row flex-col justify-center md:items-center items-start gap-4 ">
                <div className="flex flex-col items-start flex-[0_0_33.33%]">
                    <label className="">College Name</label>
                    <input
                        type="text"
                        placeholder="College Name"
                        className="p-2 focus:outline-none mt-1 w-full rounded-lg text-black"
                        required
                        value={collegeName}
                        onChange={(e) => updateFields({ collegeName: e.target.value })}
                    />
                </div>

                <div className="flex flex-col items-start flex-[0_0_20%]">
                    <label htmlFor="eventCategory" className="block text-sm font-medium text-gray-200">Event Category</label>
                    <select
                        id="eventCategory"
                        value={eventCategory}
                        onChange={(e) => updateFields({ eventCategory: e.target.value })}
                        className="mt-1 block w-full p-2 bg-white rounded-md shadow-sm focus:outline-none sm:text-sm text-black"
                        disabled={collegeName.length === 0}
                    >
                        <option value="" disabled>Select Event Category</option>
                        {eventCategories.map((category) => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </div>

                <div className="flex flex-col items-start flex-[0_0_33.33%]">
                    <label htmlFor="eventName" className="block text-sm font-medium text-gray-200">Event Name</label>
                    <select
                        id="eventName"
                        value={eventName}
                        onChange={(e) => updateFields({ eventName: e.target.value })}
                        className="mt-1 block w-full p-2 bg-white rounded-md shadow-sm focus:outline-none sm:text-sm text-black"
                        disabled={getEventNames(eventCategory).length === 0}
                    >
                        <option value="" disabled>Select Event Name</option>
                        {getEventNames(eventCategory).map((event) => (
                            <option key={event} value={event}>{event}</option>
                        ))}
                    </select>

                </div>
            </div>

            {
                teamState.map((team, index) => (
                    <div key={index} className="flex md:flex-row flex-col justify-center items-center  gap-4 w-full">
                        <div className="flex flex-col items-start flex-[0_0_44.44%] ">
                            <label className="">Team Member {index + 1}</label>
                            <input
                                type="text"
                                placeholder="Team Member Name"
                                className="p-2 focus:outline-none w-full rounded-lg text-black disabled:opacity-50 disabled:bg-white"
                                required
                                value={team.name}
                                onChange={(e) => {
                                    let newTeam = teamState;
                                    newTeam[index].name = e.target.value;
                                    setTeamState([...newTeam]);
                                    updateFields({ team: newTeam });
                                }}
                                disabled={eventName.length === 0}
                            />
                        </div>
                        <div className="flex flex-col items-start flex-[0_0_44.44%]">
                            <label className="">Member {index + 1} Phone</label>
                            <input
                                type="text"
                                placeholder="Team Member Name"
                                className="p-2 focus:outline-none w-full rounded-lg text-black disabled:opacity-50 disabled:bg-white" 
                                required
                                value={team.phone}
                                onChange={(e) => {
                                    let newTeam = teamState;
                                    newTeam[index].phone = e.target.value;
                                    setTeamState([...newTeam]);
                                    updateFields({ team: newTeam });
                                }}
                                disabled={eventName.length === 0}
                            />
                        </div>
                    </div>
                ))
            }
            <div className="flex justify-center w-full">
                <button
                    type="button"
                    onClick={() => {
                        setTeamState([...teamState, { name: "", phone: "" }]);
                    }}
                    className="flex-[0_0_92%] border p-3 border-dashed flex items-center gap-2 justify-center rounded-xl" >
                    <Plus/> Add Member
                </button>
            </div>

            {eventName.length > 0 && eventCategory.length > 0 && team[0].name.length > 0 && team[0].phone.length > 0 && (
                <Button
                    type="button"
                    onClick={() => {
                        addToCart({
                            eventCategory,
                            eventName,
                            team: teamState
                        });
                        updateFields({ eventCategory: "" });
                        updateFields({ eventName: "" });
                        updateFields({ team: [] });
                        setTeamState([]);
                    }}
                    className="bg-red-700 hover:bg-red-800 w-[92%]"
                >
                    Add to Cart
                </Button>
            )}

        </FormWrapper>
    )
}