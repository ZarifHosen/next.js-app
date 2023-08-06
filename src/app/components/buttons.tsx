"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export function SignInButton() {
  const { data: session, status } = useSession(); // Fixed: Added "status" from useSession()
  console.log(session, status);

  if (status === "loading") {
    return <>Loading...</>;
  }

  if (status === "authenticated") {
    return (
      <Link href={"/dashboard"}>
        <Image
          src={session?.user?.image ?? "/mememan.webp"}
          width={32}
          height={32}
          alt="User Name"
        />
      </Link>
    );
  }

  return <button onClick={() => signIn()}>Sign in</button>;
}

export function SignOutButton() {
  // Fixed typo: "SingOutButton" -> "SignOutButton"
  return <button onClick={() => signOut()}>Sign out</button>;
}
