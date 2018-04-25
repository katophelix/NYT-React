import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";

// import Button from "../../components/Button";
import API from "../../utils/API";
// import apiRoutes from "../../routes/apiRoutes";
import { Link } from "react-router-dom";

import { List, ListItem } from "../../components/List";


class Articles extends Component {
  state = {
    articles: []
  };

  loadarticles = () => {
    API.getarticles()
      .then(res =>{
        this.setState({ articles: res.data })
        console.log(res);
        console.log(this.state.articles)
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {

    this.loadarticles();
  }



  deletearticle = id => {
    API.deletearticle(id)
      .then(res => this.loadarticles())
      .catch(err => console.log(err));
  };
         
  

  render() {
    return (
      <div className="container" style={{ backgroundColor: "white", borderStyle: "solid", borderWidth: "1px" }}>
        <div className="page-header">
          {/* <h1 className="text-center"></h1> */}
        </div>

        <h1 className="text-center"><img style={{ width: "60%" }} src="assets/the_new_york_times.jpg" alt="The New York Times" /></h1>
        <h2 className="text-center" style={{ marginTop: "-12px", color:"red"  }}><b><i>React-tions Vary</i></b></h2>
        <br/>
        <Link to={"/"}>
                      <strong>
                      <h3 className="text-center">Search More Articles</h3>
                      </strong>
                    </Link>


      
        <br />
        

        {this.state.articles.length ? (
          <List>
            {this.state.articles.map(article => (
              <ListItem key={article._id}>
                <a href={article.url} target="blank">
                  <strong>
                    {article.title}
                  </strong>
                  <br/>
                  {article.date}
                </a>
               
                <DeleteBtn onClick={() => this.deletearticle(article._id)} />
              </ListItem>
            ))}
          </List>
        ) : (
            <h3></h3>
          )}
      </div>

    );
  }
}

export default Articles;
