import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  PageMainContainer,
  PageContentContainer,
  PageFirstCard,
  PageTitle,
  PageImage,
  PageSecondCard,
  StyleOptionsContainer,
  ListItem,
  StyleButton,
  TextAreaElement,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    textInput: '',
    isBoldStylingActive: false,
    isItalicStylingActive: false,
    isUnderlineStylingActive: false,
  }

  onToggleBold = () => {
    this.setState(prevState => ({
      isBoldStylingActive: !prevState.isBoldStylingActive,
    }))
  }

  onToggleItalic = () => {
    this.setState(prevState => ({
      isItalicStylingActive: !prevState.isItalicStylingActive,
    }))
  }

  onToggleUnderline = () => {
    this.setState(prevState => ({
      isUnderlineStylingActive: !prevState.isUnderlineStylingActive,
    }))
  }

  onChangeTextInput = event => {
    this.setState({textInput: event.target.value})
  }

  render() {
    const {
      textInput,
      isBoldStylingActive,
      isItalicStylingActive,
      isUnderlineStylingActive,
    } = this.state

    const boldOptionColor = isBoldStylingActive ? '#faff00' : '#f1f5f9'
    const italicOptionColor = isItalicStylingActive ? '#faff00' : '#f1f5f9'
    const underlineOptionColor = isUnderlineStylingActive
      ? '#faff00'
      : '#f1f5f9'

    return (
      <PageMainContainer>
        <PageContentContainer>
          <PageFirstCard>
            <PageTitle>Text Editor</PageTitle>
            <PageImage
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </PageFirstCard>
          <PageSecondCard>
            <StyleOptionsContainer>
              <ListItem>
                <StyleButton
                  data-testid="bold"
                  onClick={this.onToggleBold}
                  color={boldOptionColor}
                >
                  <VscBold size={25} />
                </StyleButton>
              </ListItem>
              <ListItem>
                <StyleButton
                  data-testid="italic"
                  onClick={this.onToggleItalic}
                  color={italicOptionColor}
                >
                  <GoItalic size={25} />
                </StyleButton>
              </ListItem>
              <ListItem>
                <StyleButton
                  data-testid="underline"
                  onClick={this.onToggleUnderline}
                  color={underlineOptionColor}
                >
                  <AiOutlineUnderline size={25} />
                </StyleButton>
              </ListItem>
            </StyleOptionsContainer>
            <TextAreaElement
              value={textInput}
              onChange={this.onChangeTextInput}
              isBoldStylingActive={isBoldStylingActive}
              isItalicStylingActive={isItalicStylingActive}
              isUnderlineStylingActive={isUnderlineStylingActive}
            />
          </PageSecondCard>
        </PageContentContainer>
      </PageMainContainer>
    )
  }
}

export default TextEditor
