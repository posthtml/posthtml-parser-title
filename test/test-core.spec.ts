'use strict';

import test, {ExecutionContext} from 'ava';
import plugin from '../src';
import {readFileSync} from 'fs';
import path from 'path';
import posthtml from 'posthtml';
const fixtures = path.join(__dirname, 'fixtures');

test('basic', async t => {
  return compare(t, 'basic');
});

async function compare(t: ExecutionContext, name: string) {
  const source = readFileSync(path.join(fixtures, `${name}.html`), 'utf8');
  const {tree} = await posthtml([plugin()]).process(source);

  t.snapshot(tree[0]);
}
