import { useEffect } from 'react'
import { useState } from 'react'
import Base from '../components/Base'
import {Link, useParams} from "react-router-dom"
import {Row, Col, Container} from "reactstrap"
import { loadPost } from '../services/post-service'
import {toast} from "react-toastify"
const PostPage = () => {


    const {postId} = useParams()
    const [post, setPost] = useState(null)

    useEffect(() => {
        //load post of postId
        loadPost(postId).then(data => {
            console.log(data);
            setPost(data)
        }).catch(error => {
            console.log(error)
            toast.error("Error in loading post")
        })
    }, [])
  return (
    <Base>
        <div>
            <Container className="mt-4">
                    <Link to = "/">Home</Link>
                    <Row>
                        <Col md = {{
                            size: 12
                        }}> 

                        <h1>Load the post from database</h1>




                        </Col>
                    </Row>

            </Container>
        </div>
    </Base>
  )
}

export default PostPage