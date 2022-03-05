import { useRouter } from "next/router";
import classes from "./crew-left.module.scss";
import Link from "next/link";

function CrewLeft(props) {
  const router = useRouter();
  const query = router.query.slug;

  return (
    <section className={classes.crewLeft}>
      {/* header */}
      <div className={classes.title}>
        <span>02</span>Meet Your Crew
      </div>

      {/* contennt */}
      <div className={classes.content}>
        <h3>{props.role} </h3>
        <h1>{props.name}</h1>
        <p>{props.bio}</p>
      </div>

      {/* dot indicators */}
      <div className={classes.dotIndicators}>
        <Link href={`/crew/douglas-hurley`}>
          <a className={query === "douglas-hurley" ? classes.active : null}>
            <span className="sr-only">Slide title</span>
          </a>
        </Link>
        <Link href={`/crew/mark-shuttleworth`}>
          <a className={query === "mark-shuttleworth" ? classes.active : null}>
            <span className="sr-only">Slide title</span>
          </a>
        </Link>
        <Link href={`/crew/victor-glover`}>
          <a className={query === "victor-glover" ? classes.active : null}>
            <span className="sr-only">Slide title</span>
          </a>
        </Link>
        <Link href={`/crew/anousheh-ansari`}>
          <a className={query === "anousheh-ansari" ? classes.active : null}>
            <span className="sr-only">Slide title</span>
          </a>
        </Link>
      </div>
    </section>
  );
}

export default CrewLeft;
