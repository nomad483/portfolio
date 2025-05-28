import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Text,
} from '@react-email/components'

type Props = {
  name: string
  email: string
  message: string
}

export const Email = ({ name, email, message }: Props) => {
  return (
    <Html>
      <Head />
      <Preview>New contact message from your portfolio</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={heading}>📨 New Message from Portfolio</Text>
          <Text>
            <strong>Name:</strong> {name}
            <br />
            <strong>Email:</strong> {email}
            <br />
          </Text>
          <Hr />
          <Text style={messageBlock}>{message}</Text>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: '#000d4d',
  fontFamily: 'Helvetica, Arial, sans-serif',
  color: '#eeeeff',
}

const container = {
  backgroundColor: '#000d4d',
  padding: '24px',
  borderRadius: '8px',
  border: '1px solid rgba(238, 238, 255, 0.5)',
}

const heading = {
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '16px',
  textAlign: 'center' as const,
}

const messageBlock = {
  fontSize: '16px',
  whiteSpace: 'pre-wrap' as const,
  textAlign: 'center' as const,
}
