// Em um arquivo .d.ts (ex: global.d.ts ou images.d.ts)

// Para .png
declare module '*.png' {
  import { ImageSourcePropType } from 'react-native';
  const value: ImageSourcePropType;
  export default value;
}

// Você pode adicionar para outros tipos de imagem também:
declare module '*.jpg' {
  import { ImageSourcePropType } from 'react-native';
  const value: ImageSourcePropType;
  export default value;
}

declare module '*.jpeg' {
  import { ImageSourcePropType } from 'react-native';
  const value: ImageSourcePropType;
  export default value;
}

// E para SVGs, se estiver usando uma biblioteca como react-native-svg
declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}