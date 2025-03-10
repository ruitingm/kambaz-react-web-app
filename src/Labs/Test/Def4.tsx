import { useParams } from "react-router";

export default function Def() {
  const { v, t } = useParams();
  return (
    <div>
      {v} x {t} = {v * t}
    </div>
  );
}
