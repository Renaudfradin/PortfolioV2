import "./about.css";

export default function AboutComponent() {
  return (
    <div className="presentationCard">
      <h3 className="presentationtitle">Présentation</h3>
      <p>
        Développeur web passionné de 26 ans, je suis actuellement en CDI en tant
        que Full-Stack Developer.
      </p>
      <p>
        Diplômé d&apos;un Mastère CTO &amp; Tech Lead à l&apos;école EEMI,
        j&apos;ai également obtenu un Bachelor Développeur Web à HETIC, un BTS
        SIO SLAM, ainsi qu&apos;un Titre professionnel Développeur Web &amp; Web
        Mobile à l&apos;AFPA.
      </p>
      <p>
        J&apos;aime concevoir des solutions innovantes, apprendre en continu et
        relever de nouveaux défis techniques. Mon parcours m&apos;a permis
        d&apos;acquérir une solide expérience sur des projets variés, du
        back-end au front-end.
      </p>
      <p>
        En dehors du développement, je me passionne pour le sport,
        l&apos;histoire, la photographie, les jeux vidéo et je m&apos;investis
        activement pour la cause animale.
      </p>
      <a
        href="/cv/cv_renaud.pdf"
        download="CV_Renaud_Fradin.pdf"
        className="btnCV"
      >
        Voir mon CV
      </a>
    </div>
  );
}
