import Article from "./Article";

function ArticleList({posts}){
    console.log(posts);
    const Articles=posts.map(post=>{
        const{id,date,preview,title}=post
        return <Article key={id} title={title} date={date} preview={preview}/>
    })
    return(
        <main>
            {Articles}
        </main>
    )
}
export default ArticleList