import { Container } from '../styles/components/Button';

interface ButtonProps {
  buttonType: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({
  children,
  buttonType,
  ...rest
}: any) => {
  return (
    <Container buttonType={buttonType} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
