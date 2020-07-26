import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Всем привет!</h1>
    <p>
      Это мой первый блог на <b><span style={{color: '#542c85'}}>Gatsby + </span> <span style={{color: '#61dafb'}}>React + </span> <span style={{color: '#38afbb'}}>Netlify</span></b> !<br/>
      Это <b style={{color: 'red'}}>самый быстрый сайт</b> и блог, что только может существовать! <br/>
      Для добавление поста исспользуется <b>markdown</b> синтаксис, что очень удобно <br/>
      Также сайт исспользует <i>CI/CD</i> при деплое в Git, Html на Netlify пересобираются
    </p>
  </Layout>
)
export default IndexPage
