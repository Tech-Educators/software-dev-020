// import { auth } from "@clerk/nextjs/dist/types/server"
// the above is not the correct auth object!

import { auth, currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

export default async function Page() {
    // the auth function is best for if you simply want to check if someone is signed in/or just get their id
    const user = await auth()
    console.log(user)


    const current = await currentUser()
    console.log(current)
    // if we want more information about hte user, use currentUser()
  return (
    <div>
      <h2>User profile page:</h2>
      <p>{current.firstName}</p>
      <Image src={current.imageUrl} height={200} width={200} />
    </div>
  );
}
