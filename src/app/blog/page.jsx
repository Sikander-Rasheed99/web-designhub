"use client"

import Head from 'next/head'
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
// import { Container, Row, Col } from 'react-bootstrap'
import styles from '../../../style/BlogListBody.module.css'
//
import { getPostList } from "../../../lib/posts";
import FeaturedImage from "@/components/featuredImage/FeaturedImage";
import Date from "@/components/Date/Date";
import LoadMore from "@/components/LoadMore/LoadMore";
import BlogListing from '../../components/blogListing/BlogListing'
//
import arrow from 'public/blogs/right-arrow.webp'
import Header from "@/components/header/header";
import Banner from '@/components/blogBanner/Banner';



// export async function getStaticProps() {
//     const allPosts = await getPostList();

//     return {
//         props: {
//             allPosts: allPosts,
//         },
//     }
// }


export default function BlogHome({ allPosts }) {


    const [posts, setPosts] = useState(allPosts || { nodes: [] });


    return (
        <>
            <Header />

            <Banner />


            {/* <BlogListing /> */}


            <main>
                <section className={`${styles.postList} mt-[90px]`}>
                    <div className='max-w-7xl mx-auto'>
                        <div className='grid grid-cols-12'>
                            <div className='lg:col-span-9'>
                                <div className={`${styles.blogCard}`}>
                                    {
                                        posts && posts.nodes && posts.nodes.map((post) => (
                                            <div key={post.slug} className={`${styles.blogRow} grid grid-cols-12 align-items-center mb-0 mb-lg-5`}>
                                                <div className='md:col-span-5'>
                                                    <FeaturedImage post={post} />
                                                </div>
                                                <div className='md:col-span-7'>
                                                    <div className={styles.cardCntnt}>
                                                        <h4 className={`${styles.blogTitle} mb-0`}>
                                                            <Link href={`/blog/${post.slug}`}>
                                                                {post.title}
                                                            </Link>
                                                        </h4>

                                                        {
                                                            post.categories.nodes.map((category) => (
                                                                <h5 className={`${styles.blogCategory} mt-2`} key={category.slug}>
                                                                    {category.name} - Blog
                                                                </h5>
                                                            ))
                                                        }

                                                        <div dangerouslySetInnerHTML={{ __html: post.excerpt }} className={styles.blogDesciption}>
                                                        </div>

                                                        <h6 className={styles.detailDate}>
                                                            Published on <Date dateString={post.date} />
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="pt-lg-0 pt-4 pb-4 text-center">
                                    <LoadMore posts={posts} setPosts={setPosts} />
                                </div>
                            </div>
                            <div className='lg:col-span-3 mb-5 mb-lg-0'>
                                <div className={`${styles.cta}`}>
                                    <div className={styles.ctaImg}>
                                        <Link href="/blog" className={`mt-5 bg-[#9E7DE9] text-white inline-flex items-center gap-3 w-max pr-3.5 pl-3.5 h-12 rounded-md hover:bg-[#000000]`}>
                                            get custom web designs
                                        </Link>
                                    </div>
                                </div>

                                <div className={`${styles.platForm} mt-5`}>
                                    <h5 className={styles.subTitle}>
                                        Endorsements on different Platforms
                                    </h5>
                                    <h5 className={styles.title}>
                                        Awards And Recognition
                                    </h5>
                                    <p className={styles.para}>
                                        Thriving on accelerating the path to disruption and value creation in all directions has enabled
                                        us to receive acknowledgment and recognition by leading ratings and review platforms.
                                    </p>
                                    <Link href="/blog" className={`flex items-center gap-x-3 mt-3 text-[20px] font-[600] group`}>
                                        <span className='text-[#202020]'>View Reviews</span>
                                        <Image className='img-fluid group-hover:ml-[15px]' src={arrow} alt="BitsWits" />
                                    </Link>
                                </div>

                                <div className={`${styles.newsLetter} mt-5`}>
                                    <h4>Signup for</h4>
                                    <h5>Newsletter</h5>
                                    <form className="mt-4">
                                        <div>
                                            <input type="text" name="name" id="name" placeholder="FULL NAME" />
                                        </div>
                                        <div className="mt-3">
                                            <input type="email" name="email" id="email" placeholder="EMAIL ADDRESS" />
                                        </div>
                                        <button type="submit" className={`flex items-center gap-x-3 mt-4 text-[17px] font-[700] group`}>
                                            <span className='text-[#202020]'>Submit Details</span>
                                            <Image className='img-fluid group-hover:ml-[15px]' src={arrow} alt="BitsWits" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

