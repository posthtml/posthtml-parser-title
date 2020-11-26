'use strict';

import {Node} from 'posthtml';
import parser from 'posthtml-parser';

const posthtmlParserTitle = () => (tree: Node): Node => {
  const {options} = tree;

  return tree.match({tag: 'title'}, (node: Node): Node => {
    node.content = node.content.map(content => parser(content, options));

    return node;
  });
};

export default posthtmlParserTitle;
