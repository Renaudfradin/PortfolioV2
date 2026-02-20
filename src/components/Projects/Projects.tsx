"use client";

import { useState } from "react";
import Link from "next/link";
import JsonData from "@/data/Projet.json";
import styles from "./Projects.module.css";

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
  timeProject?: string;
}

export default function ProjectsComponent() {
  const [searchwork, setSearchwork] = useState("");
  const allProjects: Project[] = JsonData.project as Project[];

  const filteredProjects = searchwork
    ? allProjects.filter((item) =>
        item.nameProject.toLowerCase().includes(searchwork.toLowerCase())
      )
    : allProjects;

  return (
    <div>
      <div className={styles.worksWrapper}>
        {filteredProjects.map((projet, index) => (
          <div key={index} className={styles.workCard}>
            <Link href={`/work/${encodeURIComponent(projet.nameProject)}`}>
              <img src={projet.imgProject} className={styles.workImg} alt={projet.nameProject} />
            </Link>
            <div className={styles.workCards}>
              <div className={styles.workInformation}>
                <h5 className={styles.workTitle}>{projet.nameProject}</h5>
                <p className={styles.workDescription}>{projet.descriptionProject}</p>
              </div>
              <div className={styles.workInformation}>
                <div className={styles.workStack}>
                  {projet.stackProject.map((stack, index2) => (
                    <p key={index2} className={styles.stack}>
                      {stack.stack1}
                      {stack.stack2}
                      {stack.stack3}
                      {stack.stack4}
                      {stack.stack5}
                    </p>
                  ))}
                </div>
                {projet.timeProject && <p className={styles.workTime}>{projet.timeProject}</p>}
                <div className={styles.workBlock}>
                  {projet.urlCodeProject && (
                    <a href={projet.urlCodeProject} className={styles.btnStyle} target="_blank" rel="noopener noreferrer">code</a>
                  )}
                  {projet.urlSiteProject && (
                    <a href={projet.urlSiteProject} className={styles.btnStyle} target="_blank" rel="noopener noreferrer">url</a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
        {filteredProjects.length === 0 && searchwork && (
          <div className={styles.nullResult}>
            <p>Aucun résultat pour &quot;{searchwork}&quot;</p>
            <p>Essayez de chercher autre chose ou Vérifiez l&apos;orthographe du projet recherché.</p>
            <img src="/pouletoo.png" alt="" />
          </div>
        )}
      </div>
    </div>
  );
}
