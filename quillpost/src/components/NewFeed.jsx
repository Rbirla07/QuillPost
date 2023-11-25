import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { loadAllPosts } from '../services/post-service'
import {Row, Col} from 'reactstrap'
import Post from './Post'

function NewFeed() {

  const [postContent, setPostContent] = useState({
    content: []
  })

  useEffect(() => {

    //load all the post from the server
    loadAllPosts().then((data) => {
      console.log(data);
      setPostContent(data)
    }).catch(error => {
      console.log(error);
    })

  },[])

  return (

    <div className="container-fluid">
      <Row>
        <Col md = {
                { 
                    size: 10,
                    offset: 1
                }
            }>
              <h1>Total Number of Blog Post -  {postContent?.totalElements}</h1>

                {
                  postContent.content.map((post) => (
                    <Post post = {post} key={post.postId} />
                  ))
                }

        </Col>
      </Row>
    </div>
    
  )
}

export default NewFeed