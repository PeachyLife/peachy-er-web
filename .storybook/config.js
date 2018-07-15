import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'Peachy storybook',
  goFullScreen: false,
  showAddonsPanel: true,
  showSearchBox: false,
  addonPanelInRight: true,
  sortStoriesByKind: false,
  hierarchySeparator: /\./,
  hierarchyRootSeparator: /\|/,
  enableShortcuts: false,
});

function loadStories() {
  require('../src/stories/welcome.js');
  require('../src/stories/index.js');
}

configure(loadStories, module);
