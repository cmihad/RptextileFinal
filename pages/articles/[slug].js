// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// let client = require('contentful').createClient({
//   space: process.env.NEXT_CONTENTFUL_SPACE_ID,
//   accessToken:process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
// });
// // export async function getStaticProps(){
// //   let data = await client.getEntries({
// //     content_type:'articles'
// //   })
//   return{
//     paths: data.items.map((item) =>({
//       param: {slug: item.fields.slug},
//     })),
//     fallback: true,
//   };

// export async function getStaticProps( params ){

//   let data =await client.getEntries({
//     content_type:'articles',
//     "fields.slug": params.slug,
//   })
// return{

//   props: {
//     article : data.items[0]
//   }
// }
// }

// export default function Articles( articles ){

//   return(

//     <div> 
//      <h1>{articles.fields.items}</h1>
//      <div>
//        {documentToReactComponents(articles.fields.content)}
//      </div>
    
//     </div>
//   ) 

// }