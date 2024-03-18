import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
    return (
        <div className="h-screen grid place-items-center">
            <SignIn />
        </div>
    );
};

export default SignInPage;
