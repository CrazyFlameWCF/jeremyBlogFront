import { MdAdd, MdCancel } from "react-icons/md";

const ArticleFrom = ({articleSubmit, submitHandler, changeHandler, tagChangeHangler, deleteTag, tagSubmitHandler, tags, typedTag}) => {

  const { title, markdown, email } = articleSubmit;
  const { tag } = typedTag;

  return (
    <section className="w-full">
      <div className='w-full flex flex-col text-sm'>
        {/* TOP portion */}
        <div className='w-full flex flex-col gap-2 mt-4'>
          {/* TITLE */}
          <label htmlFor='title' className='text-white text-xs mt-2'>
            Title
          </label>
          <input type='title' name='title' className='px-4 py-2 rounded-md text-black' value={title} onChange={changeHandler} />

          {/* email */}
          <label htmlFor='email' className='text-white text-xs mt-2'>
            E-mail
          </label>
          <input type='email' name='email' className='px-4 py-2 rounded-md text-black' value={email} onChange={changeHandler} />

          {/* tags */}
          <label htmlFor='tag' className='text-white text-xs mt-2'>
            Tags
          </label>
          <div className='w-full flex flex-row flex-nowrap gap-4'>
            <input type='tag' name='tag' className='px-4 py-2 rounded-md text-black w-full' value={tag} onChange={tagChangeHangler} />
            <button type='submit' className='px-2 py-1 font-bold bg-yellow-600/40 hover:bg-transparent rounded-md border border-transparent hover:border-white' onClick={(e) => tagSubmitHandler (e, typedTag)}><MdAdd className="w-5 h-5 text-white"/></button>
          </div>

          <div className='flex flex-wrap gap-2'>
            {tags.length > 0 &&
              tags.map((tag) => {
                return <div key={tag._id} className='flex bg-white rounded-full justify-center px-4 py-1 text-xs items-center bg-yellow-600/40 text-white gap-2'>{tag.tag}<button onClick={(e) => deleteTag(e, tag)}><MdCancel className="w-5 h-5 hover:text-black/40" /></button></div>
              })
            }
          </div>
        </div>

        {/* bottom */}
        <div className='flex flex-col w-full mt-2 gap-2'>
          <p className='text-white text-xs mt-2'>Description</p>
          <textarea rows='6' className="p-2 w-full rounded-md text-black" name='markdown' value={markdown} onChange={changeHandler}
            placeholder='Remark.md format will be submitted. Please write posts with remerk format.'
          >
          </textarea>
          <button type='submit' className='mt-2 px-4 py-2 font-bold bg-yellow-600/40 text-white hover:bg-transparent border border-transparent hover:border-white rounded-md' onClick={(submitHandler)}>Submit
          </button>
        </div>
      </div>

    </section>
  );
}
export default ArticleFrom;