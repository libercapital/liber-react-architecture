import LogoImage from 'assets/svgs/logo.svg';
import { Heading } from 'components';

import * as S from './styles';

export default function Home() {
  return (
    <S.Container>
      <img src={LogoImage} alt="Logo" />
      <Heading level={1}>Welcome to Liber React Architecture</Heading>
      <p>
        This project was created to be used as the basis for React applications.
        The architecture was designed aiming at the organization and scalability
        of the application, counting on the main libraries in the market. I
        wrote a post explaining this architecture better and you can read it by{' '}
        <a
          href="https://blog.vinniciusgomes.dev/arquitetura-para-aplicacoes-react-d77361bf2d49"
          target="_blank"
          rel="noreferrer"
        >
          clicking here.
        </a>{' '}
        Or you can see the code on{' '}
        <a
          href="https://github.com/libercapital/liber-react-architecture"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        .
      </p>

      <S.CreatedBy>
        <span role="img" aria-label="heart">
          Created with ❤️ by{' '}
        </span>
        <a href="https://vinniciusgomes.com" target="_blank" rel="noreferrer">
          Vinnicius Gomes
        </a>
      </S.CreatedBy>
    </S.Container>
  );
}
