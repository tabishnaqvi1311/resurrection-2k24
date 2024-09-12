import { Team } from "@prisma/client";

export type EventSelectionFormProps = {
    eventCategory: string,
    eventName: string,
    team: Team[]
    updateFields: (fields: any) => void;
}