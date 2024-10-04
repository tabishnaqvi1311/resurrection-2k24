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
    participationType,
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
            <div className="flex md:flex-row flex-col justify-center md:items-center items-start gap-4  w-full">
                <div className="flex flex-col items-start flex-[0_0_33.33%] w-full">
                    <label className="">University/College Name</label>
                    <input
                        type="text"
                        placeholder="College Name"
                        className="p-2 focus:outline-none mt-1 w-full rounded-lg text-black"
                        required
                        value={collegeName}
                        onChange={(e) => updateFields({ collegeName: e.target.value })}
                    />
                </div>

                <div className="flex flex-col items-start flex-[0_0_20%] w-full">
                    <label htmlFor="eventCategory" className="block text-sm font-medium text-gray-200 ">Event Category</label>
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

                <div className="flex flex-col items-start flex-[0_0_33.33%] w-full">
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

            <div className="w-3/4">
                <label className="block text-sm font-medium text-gray-200">Participation Type</label>
                <div className="flex items-center gap-4 justify-evenly">
                    <div className="flex items-center gap-2">
                        <input
                            type="radio"
                            id="solo"
                            name="participationType"
                            value="solo"
                            checked={participationType === "solo"}
                            onChange={(e) => {
                                setTeamState([]);
                                updateFields({ participationType: e.target.value })
                            }}
                            className="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300"
                        />
                        <label htmlFor="solo" className="text-sm font-medium text-gray-200">Solo</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input
                            type="radio"
                            id="duet"
                            name="participationType"
                            value="duet"
                            checked={participationType === "duet"}
                            onChange={(e) => {
                                setTeamState([]);
                                updateFields({ participationType: e.target.value })
                            }}
                            className="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300"
                        />
                        <label htmlFor="duet" className="text-sm font-medium text-gray-200">Duet</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input
                            type="radio"
                            id="group"
                            name="participationType"
                            value="group"
                            checked={participationType === "group"}
                            onChange={(e) => {
                                setTeamState([]);
                                updateFields({ participationType: e.target.value })
                            }}
                            className="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300"
                        />
                        <label htmlFor="team" className="text-sm font-medium text-gray-200">Group</label>
                    </div>
                </div>
            </div>

            {
                teamState.map((team, index) => (
                    <div key={index} className="flex flex-col justify-center items-center  gap-4 w-full ">
                        <div className="flex flex-col items-start w-[90%]">
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
                        <div className="flex md:flex-row flex-col w-[90%] justify-between">
                            <div className="flex flex-col items-start flex-[0_0_44.44%] w-full">
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
                            <div className="flex flex-col items-start flex-[0_0_44.44%] w-full">
                                <label className="">Member {index + 1} Email</label>
                                <input
                                    type="text"
                                    placeholder="Team Member Name"
                                    className="p-2 focus:outline-none w-full rounded-lg text-black disabled:opacity-50 disabled:bg-white"
                                    required
                                    value={team.email}
                                    onChange={(e) => {
                                        let newTeam = teamState;
                                        newTeam[index].email = e.target.value;
                                        setTeamState([...newTeam]);
                                        updateFields({ team: newTeam });
                                    }}
                                    disabled={eventName.length === 0}
                                />
                            </div>
                        </div>
                    </div>
                ))
            }
            <div className="flex justify-center w-full">
                <button
                    type="button"
                    onClick={() => {
                        setTeamState([...teamState, { name: "", phone: "", email: "" }]);
                    }}
                    className={`flex-[0_0_92%] border p-3 border-dashed
                    items-center gap-2 justify-center rounded-xl 
                    ${participationType === "solo" && teamState.length >= 1 ? 
                        "hidden" : 
                        participationType === "duet" && teamState.length >= 2 ? "hidden" : "flex"}
                    `}>
                    <Plus /> Add Member
                </button>
            </div>

            {eventName.length > 0 && eventCategory.length > 0 && (
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