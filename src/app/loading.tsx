import Image from "next/image";
import loader from "@/assets/loader.gif";

export default function LoadingPage() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Image src={loader} height={150} width={150} alt="loading..." />
    </div>
  );
}
