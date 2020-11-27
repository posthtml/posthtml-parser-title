'use strict';

import {Node} from 'posthtml';
import parser from 'posthtml-parser';

const posthtmlParserTitle = () => (tree: Node): Node => {
  const {options} = tree;

  tree.match({tag: 'title'}, (node: Node): Node => {
    if (node.content) {
      // @ts-expect-error
      node.content = node.content.map(content => {
        if (typeof content === 'string') {
          // @ts-expect-error
          const [node] = parser(content, options);
          return node;
        }

        return node;
      });
    }

    return node;
  });

  return tree;
};

export default posthtmlParserTitle;
