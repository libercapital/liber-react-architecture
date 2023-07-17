import { memo } from 'react';

import { IHeadingProps } from './interfaces';
import * as S from './styles';

const Heading = ({
  children
}: IHeadingProps) => {
  return (
    <S.Heading>
      {children}
    </S.Heading>
  );
};

export default memo(Heading);
