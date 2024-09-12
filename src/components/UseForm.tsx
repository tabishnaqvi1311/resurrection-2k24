import { UserFormProps } from "@/types/UserFormProps";
import FormWrapper from "./FormWrapper";

export default function UserForm({
    name,
    email,
    collegeName,
    updateFields
}: UserFormProps) {
    return (
        <FormWrapper title="Personal Details" subtitle="Please fill in your details">
            <div className="flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Name"
                    className="p-2 focus:outline-none w-full rounded-lg  text-background"
                    required
                    value={name}
                    onChange={(e) => updateFields({ name: e.target.value })}
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="p-2 focus:outline-none w-full rounded-lg text-background"
                    required
                    value={email}
                    onChange={(e) => updateFields({ email: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="College Name"
                    className="p-2 focus:outline-none w-full rounded-lg text-background"
                    required
                    value={collegeName}
                    onChange={(e) => updateFields({ collegeName: e.target.value })}
                />
            </div>
        </FormWrapper>
    )
}