import styled from 'styled-components'

export const PageMainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #25262c;
`
export const PageContentContainer = styled.div`
  width: 85%;
  display: flex;
  padding: 15px;
  background-color: #1b1c22;
  margin-top: 50px;
  margin-bottom: 50px;
`
export const PageFirstCard = styled.div`
  width: 50%;
  padding: 15px;
`
export const PageTitle = styled.h1`
  color: #f8fafc;
  font-family: 'Roboto';
  text-align: center;
`
export const PageImage = styled.img`
  width: 100%;
  margin-top: 25px;
  margin-bottom: 25px;
`
export const PageSecondCard = styled.div`
  width: 50%;
  background-color: #25262c;
  border-radius: 12px;
  border: 1px solid #334155;
`
export const StyleOptionsContainer = styled.ul`
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #334155;
`
export const ListItem = styled.li`
  list-style-type: none;
  margin-right: 15px;
`
export const StyleButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  outline: none;
  cursor: pointer;
  color: ${props => props.color};
`
export const TextAreaElement = styled.textarea`
  width: 90%;
  height: 90%;
  margin: 20px;
  background-color: transparent;
  border: none;
  outline: none;
  color: #f8fafc;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: ${props => (props.isBoldStylingActive ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalicStylingActive ? 'italic' : 'normal')};
  text-decoration: ${props =>
    props.isUnderlineStylingActive ? 'underline' : 'normal'};
`
