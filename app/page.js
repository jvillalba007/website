'use client'

import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitch, FaSpotify, FaDiscord, FaSteam, FaXbox } from 'react-icons/fa';

// Datos dinámicos
const data = {
  avatar: '/avatar.jpeg',
  carrera: 'Ingeniería en Sistemas de Información',
  universidad: 'UTN FRBA',
  mail: 'ing.jvillalba@gmail.com',
  cv: 'https://cv.jvillalba007.pp.ua',
  socials: {
    linkedin: { link: 'https://www.linkedin.com/in/jvillalba007', username: 'LinkedIn' },
    github: { link: 'https://github.com/jvillalba007', username: 'GitHub' },
    instagram: { link: 'https://www.instagram.com/jvillalba007', username: 'Instagram' },
    twitch: { link: 'https://www.twitch.tv/2B_Ashford', username: 'Twitch' },
    spotify: { link: 'https://open.spotify.com/user/31cwqfdzia5qdiggpwqh4dtxwgsq', username: 'Spotify' }
  },
  gaming: {
    discord: { username: 'jvillalba007' },
    steam: { link: 'https://steamcommunity.com/id/jvillalba007', username: '2B_Ashford' },
    xbox: { username: 'jvillalba007' }
  },
  qrCode: '/qr-code.png',
  copy: '© 2024 - LinkTree by Javier Villalba',
  frase: 'Engineering with ♥ from Buenos Aires to the World'
};

const SocialButton = ({ icon, label, link, variant }) => (
  <Button variant={variant} href={link} target="_blank" className="d-flex align-items-center justify-content-center">
    {icon}
    <span className="ms-2">{label}</span>
  </Button>
);

const GamingButton = ({ icon, label, link, variant }) => (
  <Button variant={variant} href={link} target="_blank" className="d-flex align-items-center justify-content-center">
    {icon}
    <span className="ms-2">{label}</span>
  </Button>
);

export default function Home() {
  return (
    <Container>
      <main>
        <Row className="justify-content-center">
          <Col md={4}>
            <Card className="text-center">
             <Card.Img variant="top" src={data.avatar} alt="Avatar" className="mt-1 p-0 card-img-top" />
              <Card.Body>
                <Card.Title>Javier Villalba</Card.Title>
                <Card.Text>{data.carrera}<br/>{data.universidad}</Card.Text>
                <div className="button-group">
                  <Button variant="success" href={`mailto:${data.mail}`}>Email: {data.mail}</Button>
                  <Button variant="danger" href={data.cv}>Currículum Vitae (CV)</Button>
                </div>

                <hr className="separator" />

                <Card.Title className="mt-0">Redes Sociales</Card.Title>
                <div className="button-group">
                  <SocialButton icon={<FaLinkedin />} label={data.socials.linkedin.username} link={data.socials.linkedin.link} variant="linkedin" />
                  <SocialButton icon={<FaGithub />} label={data.socials.github.username} link={data.socials.github.link} variant="github" />
                  <SocialButton icon={<FaInstagram />} label={data.socials.instagram.username} link={data.socials.instagram.link} variant="instagram" />
                  <SocialButton icon={<FaTwitch />} label={data.socials.twitch.username} link={data.socials.twitch.link} variant="twitch" />
                </div>

                <hr className="separator" />

                <Card.Title className="mt-0">Gaming</Card.Title>
                <div className="button-group">
                  <GamingButton icon={<FaDiscord />} label={data.gaming.discord.username} variant="discord"/>
                  <GamingButton icon={<FaSteam />} label={data.gaming.steam.username} link={data.gaming.steam.link} variant="steam"  />
                  <GamingButton icon={<FaXbox />} label={data.gaming.xbox.username} variant="xbox"/>
                </div>

                <hr className="separator" />

                <Card.Title className="mt-0">Música</Card.Title>
                <div className="button-group">
                  <Button variant="spotify" href={data.socials.spotify.link} target="_blank" className="d-flex align-items-center justify-content-center">
                    <FaSpotify />
                    <span className="ms-2">{data.socials.spotify.username}</span>
                  </Button>
                </div>
              </Card.Body>
              <Card.Footer>
                <Image src={data.qrCode} alt="Código QR" className="mb-2" />
                <p className="mb-1">{data.copy}</p>
                <p className="frase">{data.frase}</p>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </main>
    </Container>
  );
}