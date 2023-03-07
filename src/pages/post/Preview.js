import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Preview = ({articleSubmit}) => {

  const { markdown } = articleSubmit;

  return (
    <section className='w-full mt-4 flex flex-col'>
      <p className='text-xs text-white mb-4'>preview</p>
      <div className='w-full bg-white rounded-md'>
        <ReactMarkdown className='p-2 prose prose-indigo' remarkPlugins={[remarkGfm]}>
          {markdown}
        </ReactMarkdown>
      </div>
    </section>
  );
}
export default Preview;