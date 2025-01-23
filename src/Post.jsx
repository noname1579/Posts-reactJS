import './style/Post.css'
export default function Post({userid, id, title, body}) {
 return (
    <>
        <div className="post">
          <h2>userID = {userid}</h2>
          <h2>ID = {id}</h2>
          <h1>{title}</h1>
          <p>{body}</p>
        </div>
    </>
  )
}
