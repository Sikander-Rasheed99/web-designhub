import React from 'react'
// import { Container, Row, Col } from 'react-bootstrap'
import styles from '../../../style/BlogListBody.module.css'


const BlogListing = () => {

    return (
        <>
            <section className={`${styles.blogListBody} mt-[50px]`}>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-cols-12 justify-content-between'>
                        <div className='lg:col-span-2'>
                            <h2 className='text-3xl black fontf font-bold leading-4 text-center black'>Insight</h2>
                        </div>
                        <div className='lg:col-span-7'>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogListing
