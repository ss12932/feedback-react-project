function App() {
  const title = 'Blog Post';
  const body = 'this is my blog post';
  const comments = [
    { id: 1, text: 'comment one' },
    { id: 2, text: 'comment two' },
    { id: 3, text: 'comment three' },
  ];

  const loading = false;
  const showComments = true;

  if (loading) return <h1>Loading....</h1>;
  //can use ternary operator if showcomments true, output jsx, if no return 'no' or null. otherwise could use AND operator to short circuit this.

  const commentBlock = (
    <div className='comments'>
      <h3>Comments ({comments.length})</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className='container'>
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>

      {showComments && commentBlock}
    </div>
  );
}

export default App;
