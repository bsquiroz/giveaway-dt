import { useSearchParams } from "react-router-dom";

const VerifyDiscord = () => {

    const [searchParams] = useSearchParams();
    const code = searchParams.get('code');
    console.log(code);

    return (
        <div>VerifyDiscord</div>
    )
}

export default VerifyDiscord