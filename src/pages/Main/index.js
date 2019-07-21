import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Descriptions, Annotation } from './styles';
import Header from '~/componentes/Header';
import Tabs from '~/componentes/Tabs';


export default function Main() {
  return (
    <Container>
      <Header />
      <Content>
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>
          <CardContent>
            <Title>Saldo</Title>
            <Descriptions>R$ 1.500.000,00</Descriptions>
          </CardContent>
          <CardFooter>
            <Annotation>
              Transferencia de R$ 20,00 recebido de Diego Schell fernandes hoje às 06:00h
            </Annotation>
          </CardFooter>
        </Card>
      </Content>

      <Tabs />
    </Container>
  )
} 


// Começar apartir de 34:00 
// https://youtu.be/DDm0M_rZLJo?t=2046