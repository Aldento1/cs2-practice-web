import dynamic from "next/dynamic";

const CalloutMap = dynamic(
  () => import("../../components/CalloutMap"),
  { ssr: false }
);