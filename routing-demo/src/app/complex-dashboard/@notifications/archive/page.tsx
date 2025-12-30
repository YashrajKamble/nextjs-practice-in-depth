import { Card } from "@/app/components/card";
import Link from "next/link";

export default function archiveNotifications() {
    return <>
        <Card>
            <div>
                Archive Notifications
            </div>
            <br />
            <Link href="/complex-dashboard">
                Default
            </Link>
        </Card>
    </>
}