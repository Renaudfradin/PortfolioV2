import type { Metadata } from "next";
import WorkComponent from "@/components/Work/Work";

type Props = {
  params: { name: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: decodeURIComponent(params.name),
  };
}

export default function WorkPage({ params }: Props) {
  return <WorkComponent name={decodeURIComponent(params.name)} />;
}
