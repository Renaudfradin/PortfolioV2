import JobData from "@/data/Job.json";
import StackData from "@/data/Stack.json";
import styles from "./Skills.module.css";

export default function SkillsComponent() {
  return (
    <div className={styles.SkillsStackJob}>
      <div className={styles.exprerience}>
        <h2 className={styles.titleExprerience}>Compétences &amp; Parcours</h2>
        <p>Développeur passionné, je me spécialise dans le back-end et l&apos;écosystème Laravel, tout en gardant un œil sur les dernières tendances du web.</p>
        <p>J&apos;aime créer des solutions performantes et sur-mesure avec Laravel, React.js et Node.js, en alliant technique et créativité.</p>
        <p>Curieux d&apos;en découvrir davantage ? Retrouvez mon parcours complet sur <a href="https://www.linkedin.com/in/Renaudfradin/">LinkedIn</a> ou explorez mes projets sur <a href="https://github.com/Renaudfradin">GitHub</a>.</p>
        <div className={styles.stackWrap}>
          {StackData.Stack.map((stack, index) => (
            <div key={index}>
              <img src={stack.imgStack} alt="" className={styles.imgStack} />
              <p className={styles.titleStack}>{stack.titleStack}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.StackJob}>
        <div className={styles.jobWrapper}>
          {JobData.Job.map((job, index) => (
            <div key={index}>
              <h5 className={styles.tileJob}>{job.titleJob}</h5>
              <p>{job.entrepriseJob}</p>
              <p>{job.dateJob}</p>
              <p>{job.typeJob}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
