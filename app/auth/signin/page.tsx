import { SignIn } from "@clerk/nextjs";
import BackgroundImage from "../../../public/assets/bg.png";

const SignInPage = () => {
    return (
        <div className="h-screen grid place-items-center">
            <div className="absolute inset-0 z-[-1]">
                <img
                    src={BackgroundImage.src}
                    alt="Background"
                    className="object-cover w-full h-full"
                />
            </div>
            <SignIn />
        </div>
    );
};

export default SignInPage;
