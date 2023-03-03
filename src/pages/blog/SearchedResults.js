import moment from 'moment';

const dateFormatter = (string) => {
  let formattedDate = moment(string).format('LLL')
  return formattedDate
}

const SearchedResults = ({searchedPost}) => {
  return (
    <>
      {searchedPost &&
        <div>
          {searchedPost.map((post) => {
            return <div key={post._id} className='w-full bg-slate-200 mb-2 px-8 py-4 flex flex-col gap-2'>
                <p className="text-2xl font-bold">{post.title}</p>
              <div className='flex gap-4'>
                <p className='text-xs text-gray-600'>{post.email}</p>
                <p className="text-xs text-gray-600">{dateFormatter(post.createdAt)}</p>
              </div>
              {post.tag.length > 0 &&
              <div className="flex gap-2">
                {post.tag.map((tag) => {
                  return <div key={tag._id} className='bg-blue-700 text-xs text-white px-4 py-1 rounded-full'>
                    <p>{tag.tag}</p>
                  </div>
                })}
              </div>
              }
            </div>
          })}
        </div>
      }
    </>
  );
}
export default SearchedResults;