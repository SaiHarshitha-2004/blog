// import React , {useState , useEffect} from "react";
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';
// import CircularProgress from '@mui/material/CircularProgress';
// import { BentoGrid, BentoGridItem } from "../Ui/bento-grid.tsx";
// import { InitialState } from "../context/context.jsx";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// // import JSDOM from "jsdom"
// // import { Readability } from "@mozilla/readability";



// const CardData = ({ id, position, src, heading, description, date, reactions }) => {
//   const navigate = useNavigate();

//   const showSingleArticle = () => {
//     navigate(`/singleArticle/${id}`);
//   };

//   return (
//     <div
//       onClick={showSingleArticle}
//       className={`flex ${
//         position ? 'flex-row h-[250px] space-x-5' : 'flex-col space-y-4'
//       } text-clip max-h-full justify-center items-center overflow-hidden cursor-pointer`}
//     >
//       <div className={`${position ? 'w-1/2 h-full' : ''}`}>
//         <img
//           className='rounded-xl w-full h-full object-cover'
//           src={src}
//           alt={`Article ${position} cover`}
//         />
//       </div>
//       <div
//         className={`${
//           position ? 'w-1/2 flex flex-col space-y-4' : 'space-y-1'
//         } max-h-full justify-center items-center`}
//       >
//         <div className='text-lg text-white font-normal text-center'>
//           {heading}
//         </div>
//         <div className='text-sm text-gray-500 text-center'>{description}..</div>
//         <div className='flex flex-row justify-center space-x-6'>
//           <div className='text-sm text-gray-500'>{date}</div>
//         </div>
//       </div>
//     </div>
//   );
// };



// const ArticlesCardData = () => {

//   const [items, setItems] = useState([]);
//   const { page , setPage  , search} = InitialState();
//   const [foundData , setFoundData] = useState(false);

//   const isImageUrlValid = async (url) => {
//     try {
//       const res = await fetch(url, { method: 'HEAD' });
//       return res.ok;
//     } catch {
//       return false;
//     }
//   };


//   useEffect(() => {
//     const fetchArticles = async () => {
//       try {
//         let url = 'https://newsapi.org/v2/everything?' +
//                 'q=Apple&' +
//                 'sortBy=publishedAt&' +
//                 'apiKey=30750f0dd3e54e4e82c1117d4a1ca3c8';
//         // let res;
//         // if (search === 'latest') {
//         //   res = await fetch(`https://dev.to/api/articles/${search}?&page=${page}&per_page=30`);
//         // } else {
//         //   res = await fetch(`https://dev.to/api/articles?tag=${search}&page=${page}&per_page=30`);
//         // }

//         // if (!res.ok) {
//         //   throw new Error('Network response was not ok');
//         // }
        

//         // const data = await res.json();
//         // const validationPromises = data.map(async (article) => {
//         //   if (article.cover_image != null) {
//         //     const isValid = await isImageUrlValid(article.cover_image);
//         //     return isValid ? article : null;
//         //   }
//         //   return null;
//         // });

//         axios.get(url).then(function(r1) {

//           // At this point we will have some search results from the API. Take the first search result...
//           let firstResult = r1.data.articles[0];
        
//           // ...and download the HTML for it, again with axios
//           axios.get(firstResult.url).then(function(r2) {
        
//             // We now have the article HTML, but before we can use Readability to locate the article content we need jsdom to convert it into a DOM object
//             let dom = new JSDOM(r2.data, {
//               url: firstResult.url
//             });
        
//             // now pass the DOM document into readability to parse
//             let article = new Readability(dom.window.document).parse();
        
//             // Done! The article content is in the textContent property
//             console.log(article.textContent);
//           })
//         })


//         // const validatedArticles = await Promise.all(validationPromises);
//         // const validArticles = validatedArticles.filter(article => article !== null);

//         // setItems(validArticles);
//         // setFoundData(validArticles.length > 0);

//       } catch (error) {
//         console.error('Fetch error:', error);
//       }
//     };

//     fetchArticles();
//   }, [page, search]);


  
//   const handlePage = (e , val) => {
//     setPage(val);
//     window.scrollTo(0, 0);
    
//   };


//   return (
//     <>
//      {/* {foundData ? (
//        <div className="flex flex-col items-center justify-center">
//         <BentoGrid className="">
//           {items.map((it, i) => (
//             <BentoGridItem
//               className={`cursor-pointer bg-[#44315d89] ${
//                 (i % 3 === 0 && i % 6 === 0 && i !== 0) || (i === 3 ||  i === 11) ? "md:col-span-2 flex justify-center" : "p-5"
//               }`}
//               key={i}
//               title={
//                 <CardData
//                   id = {it.id}
//                   position={ (i % 3 === 0 && i % 6 === 0 && i !== 0) || (i === 3 || i === 11)}
//                   src={it.cover_image}
//                   heading={it.title}
//                   description={it.description}
//                   date={it.readable_publish_date}
//                   reactions={it.positive_reactions_count}
//                 />
//               }
              
//             />
//           ))}
//         </BentoGrid>
//         <Stack spacing={2} color="primary" sx={{mt : 6 }}>
//           <Pagination
//             sx={{
//               '& .MuiPaginationItem-root': {
//                 color: 'white',
//               },
//               '& .MuiPaginationItem-root.Mui-selected': {
//                 backgroundColor: 'secondary.main',
//                 color: 'white',
//               },
//             }}
//             count={15}
//             color="secondary"
//             page={page}
//             onChange={handlePage}
//           />
//         </Stack>
//        </div>
//      ) : 
//      (

//       page === 1 ? (

//         <Stack sx={{ color: 'grey.500'  }} spacing={2} direction="row">
//            <CircularProgress color="secondary" /> 
//         </Stack>
//       ) 
//       : (<p className="text-white">No more Articles</p> )

//      )} */}
//      hello
//       </>
//   )


// }
//   export default ArticlesCardData ;



// //   import React , {useState , useEffect} from "react";
// // import Pagination from '@mui/material/Pagination';
// // import Stack from '@mui/material/Stack';
// // import CircularProgress from '@mui/material/CircularProgress';
// // import { BentoGrid, BentoGridItem } from "../Ui/bento-grid.tsx";
// // import { InitialState } from "../context/context.jsx";
// // import { useNavigate } from "react-router-dom";
// // import NewsAPI from "newsapi";


// // const ArticlesCardData = () => {

// //   const [items, setItems] = useState([]);
// //   const { page , setPage  , search} = InitialState();
// //   const [foundData , setFoundData] = useState(false);

// //   const newsapi = new NewsAPI('30750f0dd3e54e4e82c1117d4a1ca3c8');

// //   useEffect(() => {
// //     const fetchArticles = async () => {
// //       // try {
// //       //   let res;
// //       //   res = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}&page=${page}`);

// //       //   if (!res.ok) {
// //       //     throw new Error('Network response was not ok');
// //       //   }

// //       //   const data = await res.json();
// //       //   const validArticles = data.articles.filter(article => article.urlToImage !== null);

// //       //   setItems(validArticles)
// //       //   setFoundData(validArticles.length > 0);

// //       // } catch (error) {
// //       //   console.error('Fetch error:', error);
// //       // }

// //       newsapi.v2.topHeadlines({
// //         sources: 'bbc-news,the-verge',
// //         q: 'bitcoin',
// //         category: 'business',
// //         language: 'en',
// //         country: 'us'
// //       }).then(response => {
// //         console.log(response);
// //       })
// //     };

// //     fetchArticles();
// //   }, [page, search]);

// //      {items.map( (it , index) => (
// //       <div className="text-white" key={(index)}>
// //          <div className="border m-5">
// //            {it.content}
// //          </div>
// //       </div>
// //      ))}
// //       </>
// //   )


// // }
// //   export default ArticlesCardData ;
import React , {useState , useEffect} from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { BentoGrid, BentoGridItem } from "../Ui/bento-grid.tsx";
import { InitialState } from "../context/context.jsx";
import { useNavigate } from "react-router-dom";

const CardData = ({ id, position, src, heading, description, date, reactions }) => {
  const navigate = useNavigate();

  const showSingleArticle = () => {
    navigate(`/singleArticle/${id}`);
  };

  return (
    <div
      onClick={showSingleArticle}
      className={`flex ${
        position ? 'flex-row h-[250px] space-x-5' : 'flex-col space-y-4'
      } text-clip max-h-full justify-center items-center overflow-hidden cursor-pointer`}
    >
      <div className={`${position ? 'w-1/2 h-full' : ''}`}>
        <img
          className='rounded-xl w-full h-full object-cover'
          src={src}
          alt={`Article ${position} cover`}
        />
      </div>
      <div
        className={`${
          position ? 'w-1/2 flex flex-col space-y-4' : 'space-y-1'
        } max-h-full justify-center items-center`}
      >
        <div className='text-lg text-white font-normal text-center'>
          {heading}
        </div>
        <div className='text-sm text-gray-500 text-center'>{description}..</div>
        <div className='flex flex-row justify-center space-x-6'>
          <div className='text-sm text-gray-500'>{date}</div>
        </div>
      </div>
    </div>
  );
};



const ArticlesCardData = () => {

  const [items, setItems] = useState([]);
  const { page , setPage  , search} = InitialState();
  const [foundData , setFoundData] = useState(false);



  useEffect(() => {
    const fetchArticles = async () => {
      try {
        let res;
        if (search === 'latest') {
          res = await fetch(`https://dev.to/api/articles/${search}?&page=${page}&per_page=30`);
        } else {
          res = await fetch(`https://dev.to/api/articles?tag=${search}&page=${page}&per_page=30`);
        }

        if (!res.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await res.json();
        const articlesWithImages = data.filter((art) => art.cover_image);

        setItems(articlesWithImages);
        setFoundData(articlesWithImages.length > 0);


      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchArticles();
  }, [page, search]);


  
  const handlePage = (e , val) => {
    setPage(val);
    window.scrollTo(0, 0);
    
  };


  return (
    <>
     {foundData ? (
       <div className="flex flex-col items-center justify-center">
          <BentoGrid className="max-w-4xl mx-auto">
          {items.map( (it , i) => (
              <BentoGridItem
               key={i}
               title={
                <CardData
                  id = {it.id}
                  position={ (i % 3 === 0 && i % 6 === 0 && i !== 0) || (i === 3 || i === 11)}
                  src={it.cover_image}
                  heading={it.title}
                  description={it.description}
                  date={it.readable_publish_date}
                  reactions={it.positive_reactions_count}
                />
              }
                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
              />
              ))}
          </BentoGrid>
        <Stack spacing={2} color="primary" sx={{mt : 6 }}>
          <Pagination
            sx={{
              '& .MuiPaginationItem-root': {
                color: 'white',
              },
              '& .MuiPaginationItem-root.Mui-selected': {
                backgroundColor: 'secondary.main',
                color: 'white',
              },
            }}
            count={15}
            color="secondary"
            page={page}
            onChange={handlePage}
          />
        </Stack>
       </div>
     ) : 
     (

      page === 1 ? (

        <Stack sx={{ color: 'grey.500'  }} spacing={2} direction="row">
           <CircularProgress color="secondary" /> 
        </Stack>
      ) 
      : (<p className="text-white">No more Articles</p> )

     )}
      </>
  )


}
  export default ArticlesCardData ;