import { memo } from 'react';

export const Small = memo(({ count }) => {
  console.log('Small component was rendered');

  return <small>{count}</small>;
});
