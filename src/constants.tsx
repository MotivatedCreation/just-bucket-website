import Logo from './assets/logo.svg?react';
import TextLogo from './assets/text-logo.svg?react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const HOME_URL = '/';
export const APP_NAME = 'Just Bucket';
export const AppLogo = (props: SvgIconProps) => <SvgIcon {...props} component={Logo} inheritViewBox />;
export const AppTextLogo = (props: SvgIconProps) => <SvgIcon {...props} component={TextLogo} inheritViewBox />;