import { UserFormProps } from "@/types/UserFormProps";
import FormWrapper from "./FormWrapper";

export default function UserForm({
    name,
    phone,
    
    updateFields
}: UserFormProps) {
    return (
        <FormWrapper title="Personal Details" subtitle="Please fill in your details">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col items-start">
                    <label className="">Name</label>
                    <input
                        type="text"
                        placeholder="Name"
                        className="p-2 focus:outline-none w-full rounded-lg  text-background"
                        required
                        value={name}
                        onChange={(e) => updateFields({ name: e.target.value })}
                    />
                </div>
                <div className="flex flex-col items-start">
                    <label className="">Email</label>
                    <input
                        type="email"
                        placeholder="Email"
                        className="p-2 focus:outline-none w-full rounded-lg text-background"
                        required
                        value={phone}
                        onChange={(e) => updateFields({ phone: e.target.value })}
                    />
                </div>

            </div>
        </FormWrapper>
    )
}