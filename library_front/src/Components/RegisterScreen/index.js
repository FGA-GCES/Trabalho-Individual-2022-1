import React from 'react';
import Button from '../Button';
import {
  Main, Container, DivButtom, RightSideContainer,
} from './Style';

const RegisterScreen = ({
  cancel, submit, buttonTitle
}) => (
  <Main>
    <Container>
      <RightSideContainer>
        <DivButtom>
          <Button type="secondary" title="Cancelar" click={cancel} />
          <Button type="primary" title={buttonTitle} click={() => submit()} />
        </DivButtom>
      </RightSideContainer>
    </Container>
  </Main>
);

export default RegisterScreen;