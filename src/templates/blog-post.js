import React from "react"

const Blog = (data) => {
  const pageData = data.pageContext
  console.log(pageData)
  return (
    <div className="page__content" style={{marginTop: "5rem"}}>
      <div className="container">
        <picture>
          <source srcSet={pageData.image.fluid.srcSetWebp}/>
          <source srcSet={pageData.image.fluid.srcSet}/>
          <img src={pageData.image.fluid.src} alt={pageData.image.alt} style={{maxWidth: "100%"}}/>
        </picture>

        <h1>{pageData.title.text}</h1>
        <div dangerouslySetInnerHTML={{__html: pageData.content.html}}></div>
      </div>
    </div>
  )
}

export default Blog