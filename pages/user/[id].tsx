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

// export async function getServerSideProps(context) {
//   const userDetails = fetch(`http://localhost:3000/abc`);
//   console.log(userDetails)
//   if (!userDetails) {
//     return {
//       notFound: true,
//     }
//   }
//   return {
//     props: {}, // will be passed to the page component as props
//   };
// }
