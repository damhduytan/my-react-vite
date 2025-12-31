import fontIconEOT from 'assets/fonts/font-icons.eot';
import fontIconTTF from 'assets/fonts/font-icons.ttf';
import fontIconWOFF from 'assets/fonts/font-icons.woff';

export const AppStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  img {
    user-select: none;
    object-fit: cover;

    * {
      user-select: auto;
    }
  }
`;

export const FontIconLoader = createGlobalStyle`
  @font-face {
    font-family: "font-icons";
    font-weight: normal;
    font-style: normal;
    src: url(${fontIconEOT});
    src:
      url(${fontIconEOT}) format("embedded-opentype"),
      url(${fontIconTTF}) format("truetype"),
      url(${fontIconWOFF}) format("woff");
  }
`;
