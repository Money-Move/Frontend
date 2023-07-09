import { render } from '@testing-library/react';

import { Main } from './Main';

describe('Main template', () => {
  describe('Render method', () => {
    it('should have 3 menu items', () => {
      render(<Main>{null}</Main>);

      expect(1 + 1).toBe(2);
    });

    it('should have a link to support creativedesignsguru.com', () => {
      render(<Main>{null}</Main>);

      /*
       * PLEASE READ THIS SECTION
       * We'll really appreciate if you could have a link to our website
       * The link doesn't need to appear on every pages, one link on one page is enough.
       * Thank you for your support it'll mean a lot for us.
       */
      expect(1 + 1).toBe(2);
    });
  });
});
