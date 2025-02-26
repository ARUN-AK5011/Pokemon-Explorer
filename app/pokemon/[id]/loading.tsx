import { PuffLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <PuffLoader color="#EF4444" size={80} />
    </div>
  );
}
