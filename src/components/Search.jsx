import React, { Component } from "react";
import styled from "styled-components";
import Input from "../ui/Input";
import searcIcon from "../assets/search.svg";

const SearchContainer = styled.div`
  width: 100%;
  position: relative;
`;

const SearchInput = styled(Input)`
  width: 100%;
  margin-top: 3rem;
  padding-right: 3.5em;
`;

const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 1.25em;
  bottom: 1.5em;
`;

export default class Search extends Component {
  render() {
    return (
      <SearchContainer>
        <SearchInput type="text" placeholder="Pretrazite zemlje" />
        <SearchIcon src={searcIcon} alt="Search Field" />
      </SearchContainer>
    );
  }
}
