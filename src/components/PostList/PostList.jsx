import React, { useEffect, useContext } from 'react'
import Post from '../Post/Post'
import Pagination from '../Pagination/Pagination'
import { postsContext } from '../../postContext'
import postStyle from '../PostList/postStyle.css'

const PostList = () => {
	const { getPosts, posts } = useContext(postsContext)
	useEffect(() => {
		getPosts()
	}, [])
	console.log(posts)

	return (
		<div>
			<div className='posts-list'>
					{posts?.map((item) => (
						<Post key={item.id} card={item} />
					))}
			</div>
			<Pagination />
		</div>
	)
}

export default PostList