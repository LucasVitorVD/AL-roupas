import { styled } from "styled-components";
import { breakpoints } from "@/shared/themes/breakpoints";

export const StyledMobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F0F0F5;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0px;
  z-index: 1;

  @media screen and (min-width: ${breakpoints.md}) {
    display: none;
  }

  .menuHeader {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 1rem 1rem .2rem 1rem;
    /* border-bottom: 1px solid black; */
  }

  .closeHeader {
    align-self: flex-end;
  }

  .searchAreaMobile {
    display: flex;
    align-items: center;
    gap: .5rem;
    padding: .5rem;
    margin-bottom: 1rem;
    background-color: #FFFF;
    border-radius: .5rem;
    width: 70%;

    input {
      width: 100%;
      padding: .5rem;
      border: none;
      background-color: transparent;
      outline: none;
      font-size: 1rem;
    }
  }

  .itemsArea {
    flex: 1;
    padding: 1rem;
    width: 100%;
  }

  .items {
    display: flex;
    align-items: center;
    gap: .7rem;
    width: 100%;
    padding: .7rem;
    border-bottom: 1px solid black;
  }

  .navigation-categories {
    margin-top: 1.5rem;

    .title {
      margin-bottom: 1rem;
      font-weight: bold;
    }
  }
`

export const StyledCartIcon = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  .cartBadge {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.0625rem;
    height: 1.0625rem;
    border-radius: 50%;
    background-color: red;
    color: #FFF;
    font-size: 0.625rem;
    font-weight: 500;
    line-height: 1.625rem;
    position: absolute;
    left: 15px;
    top: 15px;
  }
`