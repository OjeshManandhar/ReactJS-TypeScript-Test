import React from 'react';

export const LongDivRefs: { [key: string]: any } = {
  home: React.createRef<HTMLDivElement>(),
  about: React.createRef<HTMLDivElement>(),
  product: React.createRef<HTMLDivElement>(),
  contact: React.createRef<HTMLDivElement>()
};
