import React ,{useState} from 'react'

const AddComments = ({articleName,setArticleInfo}) => {
    const [name,setName] = useState('')
    const label=`block text-blue-500 text-sm font-bold mb-3`;
    const input = `shadow appearance-none border rounded w-full py-2 px-3 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`
    const [comment,setComment] = useState('')
    const appendComments = async () => {
        const res = await fetch(`/api/articles/${articleName}/add-comments` , {
            method:'POST',
            body:JSON.stringify({username:name,text:comment}),
            headers:{
                "Content-Type":'application/json'
            },
        })
        const body = await res.json();
        setArticleInfo(body);
        setName('')
        setComment('')
    };

  return (
    <form className='px-8 pt-4 pb-8 mb-3 border border-blue-200 rounded-2xl'>
        <h3 className='p-3 font-semibold'>Add a comment</h3>
        <label className={label}>Name:</label>
        <input className={input} type="text" onChange = {(e) => setName(e.target.value)}/>
        <label className={label}>Comment:</label>
        <textarea row="4" cols="50" type="text" onChange = {(e) => setComment(e.target.value)}
        className={input}/>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rouded focus:outline-none focus:shadow-outline' 
        onClick={() => appendComments()}>Add Comment</button>
    </form>
  )
}

export default AddComments