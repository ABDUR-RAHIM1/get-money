import Heading from "@/app/Conponents/Utils/Heading";
import PageHero from "@/app/Conponents/Utils/PageHero";
import blogsData from "@/app/Data/Blogs"
import Blog from "./Blog";


// blogs page / routes
export default async function BlogPage() {
    const blogs = await blogsData;

    return (
        <div >
            <PageHero text={"Blogs"} />

            <div>
                {
                    blogs.map((data, index) => (
                        <Blog
                            data={data}
                            key={index}
                        />
                    ))
                }
            </div>
        </div>
    )
}
