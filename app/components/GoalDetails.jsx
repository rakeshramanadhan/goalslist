import React from 'react'

export default async function UserPosts({promise}) {
    const posts = await promise
  return (
    <div>
 <ul>
            {posts.map((post) => (  
                <li key={post.code}>
                    <h2 className='text-center mt-20'>{post.title}</h2>
                    <p className='text-center mt-20'>{post.description}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}
