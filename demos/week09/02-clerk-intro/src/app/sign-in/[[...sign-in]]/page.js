import { SignIn } from "@clerk/nextjs"
export default function SignInPage() {
    return (
        <div>
            <h2>Sign in to the application</h2>
            <SignIn />
        </div>
    )
}