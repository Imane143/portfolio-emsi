// src/components/sections/Contact/index.tsx
import { FormEvent, useState } from 'react';
import Container from '../../shared/container';
import {
  ContactSection,
  ContactHeader,
  Title,
  Subtitle,
  ContactContent,
  ContactForm,
  FormGroup,
  Label,
  Input,
  Textarea,
  ContactInfo,
  InfoItem,
  InfoIcon,
  InfoText,
  InfoLabel,
  InfoValue
} from './styles';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique d'envoi du formulaire
    console.log('Form data:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "contact@example.com",
      href: "mailto:contact@example.com"
    },
    {
      icon: "📱",
      label: "Téléphone",
      value: "+212 XXXXXXXXX ",
      href: "tel:+212 XXXXXXXX"
    },
    {
      icon: "📍",
      label: "Localisation",
      value: "Rabat, Maroc",
      href: "#"
    }
  ];

  return (
    <ContactSection id="contact">
      <Container>
        <ContactHeader>
          <Title>Contact</Title>
          <Subtitle>
            N'hésitez pas à me contacter pour toute question ou opportunité de collaboration.
          </Subtitle>
        </ContactHeader>

        <ContactContent>
          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Nom</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="subject">Sujet</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <button type="submit">Envoyer</button>
          </ContactForm>

          <ContactInfo>
            {contactInfo.map((info) => (
              <InfoItem key={info.label}>
                <InfoIcon>{info.icon}</InfoIcon>
                <InfoText>
                  <InfoLabel>{info.label}</InfoLabel>
                  <InfoValue href={info.href}>{info.value}</InfoValue>
                </InfoText>
              </InfoItem>
            ))}
          </ContactInfo>
        </ContactContent>
      </Container>
    </ContactSection>
  );
};

export default Contact;