import LiveMarkdown from "./LiveMarkdown";

const BlogLanding = ({callBlog, setCallBlog}) => {
  return (
    <>
      <p className='text-2xl font-bold pl-4'>Jeremy's Story! or Ask Me Anything!</p>
      <LiveMarkdown callBlog={callBlog} setCallBlog={setCallBlog} />
    </>
  );
}
export default BlogLanding;