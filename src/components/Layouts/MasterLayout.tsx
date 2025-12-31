import * as GlobalStyled from 'styles/global';
import * as Styled from './styled';

const MasterLayout: FunctionComponent<App.LayoutComponent<ReactNode>> = ({
  children,
}) => {
  return (
    <Styled.MasterLayout>
      {children}
      <GlobalStyled.AppStyle />
      <GlobalStyled.FontIconLoader />
    </Styled.MasterLayout>
  );
};

export default MasterLayout;
