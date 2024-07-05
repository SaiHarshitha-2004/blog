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