import JsonData from "@/data/Projet.json";
import styles from "./Work.module.css";

interface StackItem {
  stack1?: string;
  stack2?: string;
  stack3?: string;
  stack4?: string;
  stack5?: string;
}

interface Project {
  nameProject: string;
  descriptionProject: string;
  stackProject: StackItem[];
  imgProject: string;
  imgProject1: string;
  urlCodeProject?: string;
  urlSiteProject?: string;
}

export default function WorkComponent({ name }: { name: string }) {
  const project = (JsonData.project as Project[]).find(
    (p) => p.nameProject === name
  );

  if (!project) {
    return (
      <div className={styles.cardWork}>
        <h3 className={styles.titleWork}>Projet non trouvé</h3>
      </div>
    );
  }

  return (
    <div className={styles.cardWork}>
      <h3 className={styles.titleWork}>{project.nameProject}</h3>
      <img className={styles.imgWork} src={project.imgProject1} alt={project.nameProject} />
      <p className={styles.descriptionWork}>{project.descriptionProject}</p>
      <div className={styles.stackWork}>
        {project.stackProject.map((stack, index) => (
          <p key={index} className={styles.stack}>
            {stack.stack1}
            {stack.stack2}
            {stack.stack3}
            {stack.stack4}
            {stack.stack5}
          </p>
        ))}
      </div>
      <div className={styles.Workbtn}>
        {project.urlCodeProject && (
          <a href={project.urlCodeProject} className={styles.btnWork} target="_blank" rel="noopener noreferrer">code</a>
        )}
        {project.urlSiteProject && (
          <a href={project.urlSiteProject} className={styles.btnWork} target="_blank" rel="noopener noreferrer">site</a>
        )}
      </div>
    </div>
  );
}
