import React, { Component } from "react";

import SaveBtn from "../../components/SaveBtn";
import Button from "../../components/Button";
import API from "../../utils/API";
// import apiRoutes from "../../routes/apiRoutes";
import { Link } from "react-router-dom";

import { List, ListItem } from "../../components/List";
import Input from "../../components/Input/Input.js";

class Articles extends Component {
  state = {
    articles: [],
    topic: "",
    startYear: "",
    endYear: "",
    url: ""
  };

  // componentDidMount() {

  //   this.loadarticles();
  // }

  loadarticles = () => {
    API.getArticlesLink(this.state.topic, this.state.startYear, this.state.endYear)
      .then(res => {
        this.setState({ articles: res.data.response.docs, topic: "", startYear: "", endYear: "", url: "" })
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  deletearticle = id => {
    API.deletearticle(id)
      .then(this.loadarticles())
      .catch(err => console.log(err));
  };
  savearticle = (data, id) => {
    API.savearticle(data)
      .then(res =>{ 
        console.log(res)
        let newArray = this.state.articles.filter(article => article._id !== id);
        this.setState({articles: newArray})
      })
     .catch(err => console.log(err))
      
  };
  // handleSaveDelete = event => {
  //   this.savearticle();
  //   this.deletearticle()

  //   };
    
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.topic) {
      // API.savearticle({
      //   topic: this.state.topic,
      //   startYear: this.state.startYear,
      //   endYear: this.state.endYear,

      //   url: this.state.url,

      this.loadarticles()

    }
  };

  render() {
    return (
      <div className="container" style={{ backgroundColor: "white", borderStyle: "solid", borderWidth: "1px" }}>
        <div className="page-header">
          <h1 className="text-center">Search Articles From</h1>
        </div>

        <h1 className="text-center"><img style={{ width: "60%" }} src="assets/the_new_york_times.jpg" alt="The New York Times" /></h1>
        <h1 className="text-center" style={{ marginTop: "-12px", color:"red" }}><b><i>React-tions Vary</i></b></h1>
        <br/>
        <Link to={"/SavedArticles"}>
          <strong>
            <h3 className="text-center">Go To Saved Articles</h3>
          </strong>
        </Link>


        <form>
          <Input
            value={this.state.topic}
            onChange={this.handleInputChange}
            name="topic"
            placeholder="Enter a topic you would like to search (required)"
          />
          <Input
            value={this.state.startYear}
            onChange={this.handleInputChange}
            name="startYear"
            placeholder="Enter the year to begin searching (required)"
          />
          <Input
            value={this.state.endYear}
            onChange={this.handleInputChange}
            name="endYear"
            placeholder="Enter the year to stop searching (required)"
          />
          <div className="panel">
            <Button 
              disabled={!(this.state.topic)}
              onClick={this.handleFormSubmit}
            >
              <h1 className="text-center">Search</h1>
            </Button>
          </div>
        </form>
        <br />
        

        {this.state.articles.length ? (
          <List>
            {this.state.articles.map(article => (
              <ListItem key={article._id}>
                <a href={article.web_url} target="blank">
                  <strong>
                    {article.headline.main}
                  </strong>
                  <br />
                  {article.pub_date}
                </a>

                <SaveBtn onClick={() =>  this.savearticle({ title: article.headline.main, url: article.web_url, date: article.pub_date }, article._id )  } />

              </ListItem>
            ))}
          </List>
        ) : (
            <h3>No Results to Display</h3>
          )}
      </div>

    );
  }
}

export default Articles;
