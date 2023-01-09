import {NextPage} from "next";
import Home from "../app/components/pages/home/Home";
import {homeData} from "../app/components/pages/home/home.data";

const HomePage: NextPage = () => {
    return <Home props={homeData}/>;
}

export default HomePage;