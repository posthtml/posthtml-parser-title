'use strict';

import {Node, Options as PosthtmlOptions} from 'posthtml';
import parser, {Options as ParserOptions} from 'posthtml-parser';

interface Options extends PosthtmlOptions, ParserOptions {}

const posthtmlParserTitle = () => (tree: Node): Node => {
  const {options} = tree;

  tree.match({tag: 'title'}, (node: Node): Node => {
    if (node.content) {
      // @ts-expect-error
      node.content = node.content.map(content => {
        if (typeof content === 'string') {
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
