import { NextResponse } from "next/server"

export const blogs = [
     {
"id": 12,
"title": "Ipsum rem ab magnam",
"content": "Asperiores non esse ",
"thumbnail": "https://i.ibb.co.com/p6LFQTZf/postgresql.png",
"isFeatured": true,
"tags": [
"Repudiandae nisi qua"
],
"views": 2,
"authorId": 1,
"createdAt": "2025-10-19T14:30:59.693Z",
"updatedAt": "2025-10-20T02:36:49.709Z",
"author": {
"id": 1,
"name": "PK",
"email": "pk@gmail.com",
"password": "pk25",
"role": "USER",
"phone": "1254",
"picture": null,
"status": "ACTIVE",
"isVerified": false,
"createdAt": "2025-10-11T15:35:22.555Z",
"updatedAt": "2025-10-11T15:35:22.555Z"
}
},
{
"id": 11,
"title": "Qui qui sed quibusda",
"content": "Rerum impedit enim ",
"thumbnail": "https://www.fyrafepyper.mobi",
"isFeatured": true,
"tags": [
"Perspiciatis conseq"
],
"views": 0,
"authorId": 1,
"createdAt": "2025-10-19T14:25:27.194Z",
"updatedAt": "2025-10-19T14:25:27.194Z",
"author": {
"id": 1,
"name": "PK",
"email": "pk@gmail.com",
"password": "pk25",
"role": "USER",
"phone": "1254",
"picture": null,
"status": "ACTIVE",
"isVerified": false,
"createdAt": "2025-10-11T15:35:22.555Z",
"updatedAt": "2025-10-11T15:35:22.555Z"
}
},
{
"id": 10,
"title": "Dolore repudiandae e",
"content": "Porro dolorem itaque",
"thumbnail": "https://www.lelowocavywymam.us",
"isFeatured": true,
"tags": [
"Vel pariatur Invent"
],
"views": 0,
"authorId": 1,
"createdAt": "2025-10-19T14:23:23.943Z",
"updatedAt": "2025-10-19T14:23:23.943Z",
"author": {
"id": 1,
"name": "PK",
"email": "pk@gmail.com",
"password": "pk25",
"role": "USER",
"phone": "1254",
"picture": null,
"status": "ACTIVE",
"isVerified": false,
"createdAt": "2025-10-11T15:35:22.555Z",
"updatedAt": "2025-10-11T15:35:22.555Z"
}
},
{
"id": 9,
"title": "Officia quidem liber",
"content": "Odio tempore ut qui",
"thumbnail": "https://www.gidomatehafy.me",
"isFeatured": true,
"tags": [
"Ut tempora id ullam"
],
"views": 3,
"authorId": 1,
"createdAt": "2025-10-19T14:18:50.135Z",
"updatedAt": "2025-10-19T14:19:21.491Z",
"author": {
"id": 1,
"name": "PK",
"email": "pk@gmail.com",
"password": "pk25",
"role": "USER",
"phone": "1254",
"picture": null,
"status": "ACTIVE",
"isVerified": false,
"createdAt": "2025-10-11T15:35:22.555Z",
"updatedAt": "2025-10-11T15:35:22.555Z"
}
},
{
"id": 8,
"title": "Do amet voluptatem ",
"content": "Consectetur voluptat",
"thumbnail": "https://www.qabycyc.ca",
"isFeatured": true,
"tags": [
"Quis consequatur at"
],
"views": 0,
"authorId": 1,
"createdAt": "2025-10-19T14:18:12.382Z",
"updatedAt": "2025-10-19T14:18:12.382Z",
"author": {
"id": 1,
"name": "PK",
"email": "pk@gmail.com",
"password": "pk25",
"role": "USER",
"phone": "1254",
"picture": null,
"status": "ACTIVE",
"isVerified": false,
"createdAt": "2025-10-11T15:35:22.555Z",
"updatedAt": "2025-10-11T15:35:22.555Z"
}
},
{
"id": 7,
"title": "Exploring PostgreSQL Joins",
"content": "A deep dive into PostgreSQL joins — inner, left, right, and full joins explained with real examples. Perfect for anyone learning SQL.",
"thumbnail": "https://i.ibb.co.com/p6LFQTZf/postgresql.png",
"isFeatured": false,
"tags": [
"PostgreSQL",
"SQL",
"Database"
],
"views": 15,
"authorId": 8,
"createdAt": "2025-10-13T14:34:23.328Z",
"updatedAt": "2025-10-18T12:16:27.921Z",
"author": {
"id": 8,
"name": "Rakib Khan",
"email": "rakib@gmail.com",
"password": "rakib5678",
"role": "USER",
"phone": "01644445566",
"picture": null,
"status": "ACTIVE",
"isVerified": false,
"createdAt": "2025-10-13T14:24:24.209Z",
"updatedAt": "2025-10-13T14:24:24.209Z"
}
},
{
"id": 6,
"title": "Docker for Beginners",
"content": "Learn how to containerize your Node.js apps with Docker. Understand the use of Dockerfiles, images, and containers for easy deployment.",
"thumbnail": "https://i.ibb.co.com/9mv7HN94/docker.png",
"isFeatured": true,
"tags": [
"Docker",
"DevOps",
"Backend"
],
"views": 6,
"authorId": 7,
"createdAt": "2025-10-13T14:34:12.596Z",
"updatedAt": "2025-10-18T12:16:28.274Z",
"author": {
"id": 7,
"name": "Nishat Rahman",
"email": "nishat@gmail.com",
"password": "nishat987",
"role": "USER",
"phone": "01933334455",
"picture": null,
"status": "ACTIVE",
"isVerified": false,
"createdAt": "2025-10-13T14:23:42.937Z",
"updatedAt": "2025-10-13T14:23:42.937Z"
}
},
{
"id": 5,
"title": "Understanding React Hooks Deeply",
"content": "React Hooks changed the way developers write components. This article explains useState, useEffect, and custom hooks with practical examples.",
"thumbnail": "https://i.ibb.co.com/90V5tF7/react-hooks.png",
"isFeatured": false,
"tags": [
"React",
"JavaScript",
"Frontend"
],
"views": 4,
"authorId": 6,
"createdAt": "2025-10-13T14:33:49.729Z",
"updatedAt": "2025-10-18T12:16:40.584Z",
"author": {
"id": 6,
"name": "Mou Saha",
"email": "mou@gmail.com",
"password": "mou@123",
"role": "USER",
"phone": "01822223344",
"picture": null,
"status": "ACTIVE",
"isVerified": false,
"createdAt": "2025-10-13T14:23:08.154Z",
"updatedAt": "2025-10-13T14:23:08.154Z"
}
},
{
"id": 4,
"title": "Mastering Prisma ORM",
"content": "This post explores how Prisma ORM simplifies database management with TypeScript and Node.js. You'll learn how to model data, run migrations, and perform queries efficiently.",
"thumbnail": "https://i.ibb.co.com/Lhtt0vxs/prisma.jpg",
"isFeatured": true,
"tags": [
"Prisma",
"TypeScript",
"Database"
],
"views": 2,
"authorId": 5,
"createdAt": "2025-10-13T14:33:06.509Z",
"updatedAt": "2025-10-18T12:31:42.251Z",
"author": {
"id": 5,
"name": "Arif Hasan",
"email": "arif@gmail.com",
"password": "arif2025",
"role": "USER",
"phone": "01711112233",
"picture": null,
"status": "ACTIVE",
"isVerified": false,
"createdAt": "2025-10-13T14:22:41.357Z",
"updatedAt": "2025-10-13T14:22:41.357Z"
}
},
{
"id": 3,
"title": "Getting Started with Next.js",
"content": "Next.js introduces new features for building fast and scalable web applications. Learn how to set up your first project and explore its App Router.",
"thumbnail": "https://teamraft.com/wp-content/uploads/nextjs.jpg",
"isFeatured": true,
"tags": [
"Next.js",
"React",
"Web Development"
],
"views": 4,
"authorId": 4,
"createdAt": "2025-10-13T14:18:43.391Z",
"updatedAt": "2025-10-18T12:19:43.092Z",
"author": {
"id": 4,
"name": "Tanmoy Parvez",
"email": "tanmoy@gmail.com",
"password": "tanmoy1234",
"role": "USER",
"phone": "01234567890",
"picture": null,
"status": "ACTIVE",
"isVerified": false,
"createdAt": "2025-10-13T14:18:23.171Z",
"updatedAt": "2025-10-13T14:18:23.171Z"
}
}
]


export async function GET() {
  return Response.json(blogs)
}

export const POST = async (request : Request ) =>{
    const blog = await request.json()
    const newBlog ={
        ...blog,
        id: blogs.length+1
    }
    blogs.push(newBlog)

    return new NextResponse(JSON.stringify(newBlog),{
        status : 201,
        headers : {
            "content-type" : "application-json"
        } 
    })
}