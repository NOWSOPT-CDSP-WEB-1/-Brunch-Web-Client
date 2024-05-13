import { css } from '@emotion/react';

const theme = {
  color: {
    white01: '#FFFFFF',
    white02: 'rgba(255, 255, 255, 0.56)',
    gray01: '#F8F8F8',
    gray02: '#EEEEEE',
    gray03: '#E6E6E6',
    gray04: '#D5D5D3',
    gray05: '#C9C9C9',
    gray06: '#BEBEBE',
    gray07: '#A8A8A8',
    gray08: '#909090',
    gray09: '#666666',
    gray10: '#3D3D3D',
    gray11: '#2D2D2D',
    gray12: '#101010',
    mint01: 'var(--mint01, #00C6BE)',
    blue01: 'var(--blue01, #597ABE)',
  },
  font: {
    display1: css`
      font-weight: 600;
      font-size: 25px;
      font-family: 'Nanum Myeongjo', serif;
      font-style: normal;
      line-height: 125.037%; /* 93.778px */
      letter-spacing: -2.25px;
    `,
    head1: css`
      font-weight: 300;
      font-size: 35px;
      font-family: 'Noto Sans', sans-serif;
      font-style: normal;
      line-height: 136.241%; /* 47.684px */
      letter-spacing: 1.05px;
    `,
    head2: css`
      font-weight: 600;
      font-size: 28px;
      font-family: 'Nanum Myeongjo', serif;
      font-style: normal;
      line-height: 125.037%; /* 35.01px */
      letter-spacing: -0.84px;
    `,
    head3: css`
      font-weight: 600;
      font-size: 23px;
      font-family: 'Nanum Myeongjo', serif;
      font-style: normal;
      line-height: 125.037%; /* 28.759px */
      letter-spacing: -0.69px;
    `,
    head4: css`
      font-weight: 600;
      font-size: 20px;
      font-family: 'Nanum Myeongjo', serif;
      font-style: normal;
      line-height: 125.037%; /* 25.007px */
      letter-spacing: -0.6px;
    `,
    head5: css`
      font-weight: 600;
      font-size: 16px;
      font-family: 'Nanum Myeongjo', serif;
      font-style: normal;
      line-height: 125.037%; /* 20.006px */
      letter-spacing: -1.28px;
    `,
    head6: css`
      font-weight: 700;
      font-size: 13px;
      font-family: 'Noticia Text', sans-serif;
      font-style: normal;
      line-height: 136.516%; /* 17.747px */
      letter-spacing: 5.85px;
    `,
    body1: css`
      font-weight: 300;
      font-size: 15px;
      font-family: 'Noto Sans', sans-serif;
      font-style: normal;
      line-height: 168%; /* 25.2px */
      letter-spacing: -0.6px;
    `,
    body2: css`
      font-weight: 500;
      font-size: 14px;
      font-family: 'Noto Sans', sans-serif;
      font-style: normal;
      line-height: 136.241%; /* 19.074px */
      letter-spacing: 0.42px;
    `,
    body3: css`
      font-weight: 300;
      font-size: 14px;
      font-family: 'Noto Sans', sans-serif;
      font-style: normal;
      line-height: 136.241%; /* 19.074px */
      letter-spacing: -0.42px;
    `,
    body4_regular: css`
      font-weight: 400;
      font-size: 13px;
      font-family: 'Noto Sans', sans-serif;
      font-style: normal;
      line-height: 136.241%; /* 17.711px */
      letter-spacing: -0.65px;
    `,
    body4_light: css`
      font-weight: 300;
      font-size: 13px;
      font-family: 'Noto Sans', sans-serif;
      font-style: normal;
      line-height: 136.241%; /* 17.711px */
      letter-spacing: -0.65px;
    `,
    body5_3: css`
      font-weight: 300;
      font-size: 12px;
      font-family: 'Noto Sans', sans-serif;
      font-style: normal;
      line-height: 136.241%; /* 16.349px */
      letter-spacing: -0.36px;
    `,
    body5_10: css`
      font-weight: 300;
      font-size: 12px;
      font-family: 'Noto Sans', sans-serif;
      font-style: normal;
      line-height: 136.241%; /* 16.349px */
      letter-spacing: -1.2px;
    `,
    detail1: css`
      font-weight: 500;
      font-size: 11px;
      font-family: 'Noto Sans', sans-serif;
      font-style: normal;
      line-height: 136.241%; /* 14.986px */
    `,
    detail2: css`
      font-weight: 300;
      font-size: 10px;
      font-family: 'Noto Sans', sans-serif;
      font-style: normal;
      line-height: 136.241%; /* 13.624px */
      letter-spacing: -0.2px;
    `,
    detail3_7: css`
      font-weight: 300;
      font-size: 10px;
      font-family: 'Noto Sans', sans-serif;
      font-style: normal;
      line-height: 14px; /* 140% */
      letter-spacing: -0.7px;
    `,
    detail3_12: css`
      font-weight: 300;
      font-size: 10px;
      font-family: 'Noto Sans', sans-serif;
      font-style: normal;
      line-height: normal;
      letter-spacing: -1.2px;
    `,
    detail4_12: css`
      font-weight: 400;
      font-size: 9px;
      font-family: 'Noto Sans', sans-serif;
      font-style: normal;
      line-height: 136.241%; /* 12.262px */
      letter-spacing: 1.08px;
    `,
    detail4_183_0: css`
      font-weight: 400;
      font-size: 9px;
      font-family: 'Noto Sans', sans-serif;
      font-style: normal;
      line-height: 183%; /* 16.47px */
    `,
    detail4_3: css`
      font-weight: 400;
      font-size: 9px;
      font-family: 'Noto Sans', sans-serif;
      font-style: normal;
      line-height: 136.241%; /* 12.262px */
      letter-spacing: -0.27px;
    `,
    detail5: css`
      font-weight: 300;
      font-size: 8px;
      font-family: 'Noto Sans', sans-serif;
      font-style: normal;
      line-height: 136.241%; /* 10.899px */
    `,
    detail6: css`
      font-weight: 500;
      font-size: 7px;
      font-family: 'Noto Sans', sans-serif;
      font-style: normal;
      line-height: 136.241%; /* 9.537px */
    `,
    caption1: css`
      font-weight: 400;
      font-size: 12px;
      font-family: Georgia, sans-serif;
      font-style: italic;
      line-height: 113.657%; /* 13.639px */
      letter-spacing: -0.24px;
    `,
    caption2: css`
      font-weight: 400;
      font-size: 9px;
      font-family: Georgia, sans-serif;
      font-style: italic;
      line-height: 113.657%; /* 10.229px */
      letter-spacing: -0.18px;
    `,
    caption3: css`
      font-weight: 400;
      font-size: 10px;
      font-family: 'Noto Sans', sans-serif;
      font-style: normal;
      line-height: 183%; /* 18.3px */
      text-decoration-line: underline;
    `,
  },
};

export default theme;
