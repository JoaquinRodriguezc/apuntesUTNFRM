import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  router.push(`/list/${process.env.NEXT_PUBLIC_TARGET_FOLDER}`);
}
