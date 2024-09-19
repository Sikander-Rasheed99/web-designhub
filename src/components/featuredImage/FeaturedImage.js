import Image from "next/image";
import Link from "next/link";


export default function FeaturedImage({ post }) {

    let defaultFeaturedImage = "https://wp23.cryscampus.com/webdesginhubblogs/wp-admin/uploads/2023/08/moz-brand-authority-768x439-1.png";
    
    if (post.featuredImage) {
        defaultFeaturedImage = `https://wp23.cryscampus.com/webdesginhubblogs/wp-admin/uploads/${post.featuredImage.node.mediaDetails.file}`;
    }

    return (
        <Link href={`/blog/${post.slug}`} >
            <Image quality={75} src={defaultFeaturedImage} width="350" height="300" alt={post.title} className="img-fluid" />
        </Link>
    )
}