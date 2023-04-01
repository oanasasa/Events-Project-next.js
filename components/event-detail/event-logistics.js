import AddressIcon from "../icons/address-icon";
import DateIcon from "../icons/date-icon";
import classes from "./event-logistics.module.css";
import LogisticsItem from "./logistics-item";

export default function EventLogistics(props) {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(",", "\n");

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <time>{formattedAddress}</time>
        </LogisticsItem>
      </ul>
    </section>
  );
}
