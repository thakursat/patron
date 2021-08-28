import Navbar from "../../components/Navbar";
import { useRouter } from "next/router";
export default function user() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Navbar />
      <p>User: {id}</p>
    </div>
  );
}
