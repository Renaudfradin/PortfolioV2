import StackData from "@/data/Stack.json";
import { Experience } from "@/types";
import "./skills.css";
import { callApi } from "@/lib/api";

export default async function SkillsComponent() {
  let experiences: Experience[] = [];

  try {
    const data = await callApi<Experience[] | Record<string, unknown>>(
      "/api/experiences",
    );
    if (Array.isArray(data)) {
      experiences = data;
    } else if (data && typeof data === "object") {
      const arrayField = Object.values(data).find(Array.isArray);
      if (arrayField) {
        experiences = arrayField as Experience[];
      }
    }
  } catch (e) {
    console.error(e);
  }

  return (
    <div className="SkillsStackJob">
      <div className="exprerience">
        <h2 className="titleExprerience">Compétences &amp; Parcours</h2>
        <p>
          Développeur passionné, je me spécialise dans le back-end et
          l&apos;écosystème Laravel, tout en gardant un œil sur les dernières
          tendances du web.
        </p>
        <p>
          J&apos;aime créer des solutions performantes et sur-mesure avec
          Laravel, React.js et Node.js, en alliant technique et créativité.
        </p>
        <p>
          Curieux d&apos;en découvrir davantage ? Retrouvez mon parcours complet
          sur <a href="https://www.linkedin.com/in/Renaudfradin/">LinkedIn</a>{" "}
          ou explorez mes projets sur{" "}
          <a href="https://github.com/Renaudfradin">GitHub</a>.
        </p>
        <div className="stackWrap">
          {StackData.Stack.map((stack, index) => (
            <div key={index}>
              <img src={stack.imgStack} alt="" className="imgStack" />
              <p className="titleStack">{stack.titleStack}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="StackJob">
        <div className="jobWrapper">
          {experiences.map((experience, index) => (
            <div key={index}>
              <h5 className="tileJob">{experience.title}</h5>
              <p>{experience.company}</p>
              <p>
                {experience.start_date} / {experience.end_date}
              </p>
              <p>
                {experience.type.charAt(0).toUpperCase() +
                  experience.type.slice(1)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
