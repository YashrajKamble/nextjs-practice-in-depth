import { ClientComponentOne } from "@/component/client-component-one";
import { ServerComponentOne } from "@/component/server-component-one";

export default function InterLeavingPage() {
    return (
        <>
            <h1>Interleaving Page</h1>
            <ClientComponentOne>
                <ServerComponentOne />
            </ClientComponentOne>
        </>
    )
}