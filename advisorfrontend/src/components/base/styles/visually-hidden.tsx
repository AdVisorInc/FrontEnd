import { Checkbox, Input, Radio, styled } from '@mui/material';

const visuallyHidden = () => `
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  bottom: 0;
  left: 0;
`;

export const VisuallyHiddenInput = styled(Input)(visuallyHidden);
export const VisuallyHiddenInputNative = styled('input')(visuallyHidden);
export const VisuallyHiddenRadio = styled(Radio)(visuallyHidden);
export const VisuallyHiddenCheckbox = styled(Checkbox)(visuallyHidden);
