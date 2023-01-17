import {GetStaticProps, NextPage} from "next";
import Home from "../app/components/pages/home/Home";
import {homeData} from "../app/components/pages/home/home.data";
import {postApi} from "../app/store/api/post.api";
import {IHome} from "../app/components/pages/home/home.interface";
import {IPost} from "../app/types/post/post.interface";
import {PostService} from "../app/services/post.service";

export interface IHomePage {
    data: IHome;
    randomPosts: IPost[];
}

const HomePage: NextPage<IHomePage> = (props) => {
    return <Home randomPosts={props.randomPosts} data={props.data}/>;
}

export const getStaticProps: GetStaticProps = async () => {
    try {
        const { data: data } = await PostService.getLatest();

        return {
            props: {
                randomPosts: data.posts,
                data: homeData
            } as IHomePage
        }

    } catch (e) {
        return {
            props: {
                randomPosts: [],
                data: homeData
            } as IHomePage
        }
    }
}

export default HomePage;