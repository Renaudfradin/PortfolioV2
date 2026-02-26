import HomeComponent from "@/components/Home/Home";
import Wolf from "@/components/Wolf/Wolf";
import "./page.css";

export default function HomePage() {
  return (
    <div className="parentHome">
      <HomeComponent />
      <Wolf />
    </div>
  );
}
