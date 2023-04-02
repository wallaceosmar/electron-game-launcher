import {
  useRouteError,
} from 'react-router-dom';
import Root from '/@/root';
export function ErrorRouteBoundary() {
  let error = useRouteError();
  return (
    <>
      <Root>
        <h1>{error?.statusText}</h1>
      </Root>
    </>
  );
}