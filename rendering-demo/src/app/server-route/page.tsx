import ImageSlider from "@/component/image-slider"
import { ClientSideFunction } from "@/utils/client-utils"
import { ServerSideFunction } from "@/utils/server-utils"

export default function ServerRoutePage() {
    const result = ServerSideFunction()
    const clientResult = ClientSideFunction()
    return (
        <>
            <h1>Server Route: {result}</h1>
            <h1>Client Route: {clientResult}</h1>
            <ImageSlider />
        </>)
}