import React, { Component } from "react"
import { Index } from "elasticlunr"
import { Link } from "gatsby"
import styled from "styled-components"

const SearchContainer = styled.div`

text-align:right;

  label {
    display:none;
  }

  input {
      padding:10px;
      width:100%;
      border:none;
       border:1px solid #c6c6c6;
        border-radius:8px;

  }
  @media screen and (max-width: 800px) {
    grid-column:1/-1;
  }
`

const SearchItems = styled.ul`
  list-style:none;
  margin:1em 0;
  padding:0 10px;
  position: absolute;
  right:10px;
  z-index:10;
  width:367px;
  overflow:hidden;
  background: #fff;

  @media screen and (max-width: 800px) {
    width:200px;
    max-width:100%;
  }

  li {
    margin:20px 0;
  }

`
// Search component
export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
    }
  }

  render() {
    return (
      <SearchContainer>
        <input type="search" name="searchclubs" placeholder="Search the site" value={this.state.query} onChange={this.search} />
        <label for="search">Receive promotional offers?</label>


        <SearchItems>
          {this.state.results.map(page => (
            <li key={page.id}>
              <Link to={"/" + page.path}>{page.title}</Link>
            </li>
          ))}
        </SearchItems>
      </SearchContainer>
    )
  }
  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
      Index.load(this.props.searchIndex)

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, {})
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    })
  }
}