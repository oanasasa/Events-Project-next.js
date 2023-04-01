import { getEventById } from "../../dummy-data";
import { useRouter } from "next/router";

export default function EventDetailPage() {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return <p>No event found!</p>;
  }

  return (
    <div>
      <h1></h1>
      <p></p>
      <p>
        <em></em>
      </p>
    </div>
  );
}
