import { SignUp } from "@clerk/nextjs";
const SignUpPage = () => {
    return (
        <div className="h-screen grid place-items-center">
            <SignUp />
        </div>
    );
};

export default SignUpPage;
