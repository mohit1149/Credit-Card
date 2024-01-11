// Write your code here
import {useState} from 'react'
import {
  LeftBgContainer,
  LeftHeading,
  LeftParagraph,
  LeftCardContainer,
  NumberHeading,
  NameHeading,
  RightHeading,
  MainBgContainer,
  RightContainer,
  TextInput,
} from './styledComponents'

const CreditCard = () => {
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const onChangeNumber = event => {
    setNumber(event.target.value)
  }
  const onChangeName = event => {
    setName(event.target.value)
  }
  const updatedName = name.toUpperCase()
  return (
    <MainBgContainer>
      <LeftBgContainer>
        <LeftHeading>CREDIT CARD</LeftHeading>
        <hr />
        <LeftCardContainer data-testid="creditCard">
          <NumberHeading>{number}</NumberHeading>
          <LeftParagraph>CARDHOLDER NAME</LeftParagraph>
          <NameHeading>{updatedName}</NameHeading>
        </LeftCardContainer>
      </LeftBgContainer>
      <RightContainer>
        <RightHeading>Payment Method</RightHeading>
        <TextInput
          placeholder="Card Number"
          type="text"
          onChange={onChangeNumber}
          value={number}
        />
        <TextInput
          placeholder="Cardholder Name"
          type="text"
          onChange={onChangeName}
          value={name}
        />
      </RightContainer>
    </MainBgContainer>
  )
}

export default CreditCard
