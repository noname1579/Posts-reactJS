import './style/Post.css'

export default function Post({id, title, body}) {
 return (
    <>
        <div className="post">
          <h1>{title}</h1>
          <p>{body}</p>
          <h2>{id}</h2>
        </div>
    </>
  )
}
