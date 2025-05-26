
import Headline from "@/components/Headline";
import Register from "../components/register/Register";



const RegisterPage = () => {
    return (
        <div className="mt-10">
            <Headline text={"Sign up here"}></Headline>
            <Register></Register>
        </div>
    );
};

export default RegisterPage;