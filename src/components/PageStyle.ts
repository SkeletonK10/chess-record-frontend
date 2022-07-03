import styled from '@emotion/styled';

import { palette } from '../data';

const PageStyle = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  
  color: ${palette.wood};
  background-color: ${palette.ivory};
  
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default PageStyle;
