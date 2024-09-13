import { CartItem } from "@/types/CartItem"
import { db } from "./db";
import { eventData } from "@/constants";

type recievedData = {
    collegeName: string,
    cart: CartItem[]
}

export async function storeData(data: recievedData) {
    for (const cartItem of data.cart) {
        const { eventCategory, eventName, team } = cartItem;

        const event = eventData.find((eve) => eve.name === eventName && eve.category === eventCategory);

        if(!event) throw Error("event that was entered does not exist, please check the event name and category");

        const teamCreated = await db.team.create({
            data: {
                event: {
                    connect: {
                        id: event.id
                    }
                }
            }
        });

        console.log(`team created: ${teamCreated.id} and linked with event: ${event.id}`);

        for(const student of team){
            await db.student.create({
                data: {
                    name: student.name,
                    phone: student.phone,
                    collegeName: data.collegeName,
                    event: {
                        connect: {
                            id: event.id
                        }
                    },
                    team: {
                        connect: {
                            id: teamCreated.id
                        }
                    }
                }
            })
        }

        console.log(`students added to team: ${teamCreated}`);
    }
}